import { Ref, ref } from 'vue';
import { IInnerTreeNode, IUseCore, IUseSearchFilter, SearchFilterOption } from './use-tree-types';
import { trim } from 'lodash-es';
export function useSearchFilter() {
  return function useSearchFilterFn(data: Ref<IInnerTreeNode[]>, core: IUseCore): IUseSearchFilter {
    const { clearNodeMap, getExpendedTree } = core;
    const virtualListRef = ref(); //virtualListRef 是一个 ref 对象，用于在虚拟滚动时得到组件内部的虚拟列表实例，方便进行滚动操作。
    const resetNodeSearchProperty = () => { //重置相关参数
      data.value.forEach((item) => {
        item.childrenMatched = false;
        item.isHide = false;
        item.isMatched = false;
        item.matchedText = '';
      });
      if (virtualListRef.value) {
        virtualListRef.value.scrollTo(0);
      }
    };

    const hasDealParentNode = (pre: number, cur: number, parentIdSet: Set<unknown>) => { //(L, i, set)
      // 当访问到同一层级前已经有匹配时前一个已经处理过父节点了，不需要继续访问
      // 当访问到第一父节点的childrenMatched为true的时，不再需要向上寻找，防止重复访问
      return (
        (data.value[pre].parentId === data.value[cur].parentId && data.value[pre].isMatched) || //如果 L 和 i 是兄弟节点并且L已经匹配了，那就说明它的父节点已经处理过了
        (parentIdSet.has(data.value[pre].id) && data.value[pre].childrenMatched) //L是中间层的父节点(也就是直接父节点)，并且也匹配了
      );
    };

    //target要搜索的文本内容，option 是一个可选配置项对象，包含三个属性：matchKey、pattern 和 isFilter。
    const dealMatchedData = (target: string, matchKey: string | undefined, pattern: RegExp | undefined) => {
      const trimmedTarget = trim(target).toLocaleLowerCase();//要搜索的文本不分大小写
      for (let i = 0; i < data.value.length; i++) {
        const key = matchKey ? data.value[i][matchKey] : data.value[i].label;//以label来进行匹配
        const selfMatched = pattern ? pattern.test(key) : key.toLocaleLowerCase().includes(trimmedTarget);//这里是匹配到了当前节点
        data.value[i].isMatched = selfMatched; //将匹配结果记录在该节点的一些状态值上，true/false
        // 需要向前找父节点，处理父节点的childrenMatched、expand参数(子节点匹配到时，父节点需要展开)
        if (selfMatched) {
          data.value[i].matchedText = matchKey ? data.value[i].label : trimmedTarget;//将用户传入的搜索文本高亮
          if (!data.value[i].parentId) {
            // 没有parentId表示时根节点，不需要再向前遍历
            continue;
          }
          let L = i - 1;//因为这个是数组拍平的， L 表示当前循环的节点
          const set = new Set();//存储所有父节点
          set.add(data.value[i].parentId);
          // 没有parentId时，表示此节点的纵向parent已访问完毕
          // 没有父节点被处理过，表示时第一次向上处理当前纵向父节点
          while (L >= 0 && data.value[L].parentId && !hasDealParentNode(L, i, set)) {//while条件：整个数组向前循环完毕 并且 存在当前节点的父节点 并且 
            if (set.has(data.value[L].id)) {//L是i的直接父节点
              data.value[L].childrenMatched = true;
              data.value[L].expanded = true;//展开状态
              set.add(data.value[L].parentId);//把直接父节点的父节点加入
            }
            L--;
          }
          // 循环结束时需要额外处理根节点一层
          if (L >= 0 && !data.value[L].parentId && set.has(data.value[L].id)) {//此时L是根节点
            data.value[L].childrenMatched = true;
            data.value[L].expanded = true;
          }
        }
      }
    };

    const hasParentNodeMatched = (pre: number, _cur: number, parentIdSet: Set<unknown>) => {
      return parentIdSet.has(data.value[pre].id) && data.value[pre].isMatched;//如果L是父节点，并且也匹配过了
    };

    // 处理过滤的隐藏属性
    const dealNodeHideProperty = () => { // 对于过滤操作，需要设置节点是否需要隐藏，上面已经对匹配到的标签上增加了一个 isMatched 属性
      data.value.forEach((item, index) => { 
        if (item.isMatched || item.childrenMatched) {
          item.isHide = false; //如果被匹配到了，不能隐藏，需要展开
        } else {
          // 需要判断是否有父节点有匹配
          if (!item.parentId) {
            item.isHide = true;
            return;
          }
          let L = index - 1;
          const set = new Set();
          set.add(data.value[index].parentId);
          while (L >= 0 && data.value[L].parentId && !hasParentNodeMatched(L, index, set)) { //还没匹配过(也就是set中没有)
            if (set.has(data.value[L].id)) {
              set.add(data.value[L].parentId);
            }
            L--;
          }
          if (!data.value[L].parentId && !data.value[L].isMatched) {
            // 没有parentId, 说明已经访问到当前节点所在的根节点
            item.isHide = true;
          } else {
            item.isHide = false;
          }
        }
      });
    };

    //用于虚拟滚动，处理匹配到的第一个节点下标
    const getFirstMatchIndex = (): number => {
      let index = 0;
      const showTreeData = getExpendedTree().value;
      while (index <= showTreeData.length - 1 && !showTreeData[index].isMatched) {
        index++;
      }
      return index >= showTreeData.length ? 0 : index;
    };

    //matchKey 表示搜索文本应该匹配的数据属性名，默认值为 undefined，表示搜索每个节点的 label 属性。
    //pattern 表示搜索文本所用正则表达式，如果不提供，则使用默认的字符串查找方法。
    //isFilter 表示是否对搜索结果进行过滤操作，过滤后不符合条件的节点将被隐藏。
    const searchTree = (target: string, option: SearchFilterOption): void => { //target要搜索的文本内容，option 是一个可选配置项对象，包含三个属性：matchKey、pattern 和 isFilter。
      // 搜索前需要先将nodeMap清空, 重置搜索相关参数
      clearNodeMap();
      resetNodeSearchProperty();
      if (!target) {
        return;
      }
      dealMatchedData(target, option.matchKey, option.pattern);
      
      if (option.isFilter) { // 对于过滤操作，需要设置节点是否需要隐藏
        dealNodeHideProperty();
      }
      // 虚拟滚动，需要得到第一个匹配的节点，然后滚动至该节点
      if (virtualListRef.value) {
        const scrollIndex = getFirstMatchIndex();
        virtualListRef.value.scrollTo(scrollIndex);
      }
    };

    return {
      virtualListRef,
      searchTree,
    };
  };
}
