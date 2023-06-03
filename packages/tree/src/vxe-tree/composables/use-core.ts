import { computed, ComputedRef, Ref, onUnmounted } from 'vue';
import { IInnerTreeNode, ITreeNode, IUseCore, valueof } from './use-tree-types';
import { generateInnerTree } from './utils';

const DEFAULT_CONFIG = {
  expanded: false, // 是否只从展开了的节点中获取数据
  recursive: true, // 是否需要获取非直接子节点
};

// useCore: 用于操作树形结构数据的工具函数库, data是拍平的数组
export function useCore(): (data: Ref<IInnerTreeNode[]>) => IUseCore {
  const nodeMap = new Map<string, IInnerTreeNode[]>(); //缓存已经处理过的节点
  return function useCoreFn(data: Ref<IInnerTreeNode[]>): IUseCore {

    // 传入一个节点，返回该节点所在的层级
    const getLevel = (node: IInnerTreeNode): number => {
      return data.value.find((item) => item.id === node.id)?.level!;
    };

    //传入一个节点对象和一个可选的用户配置对象（默认使用 DEFAULT_CONFIG），返回该节点的子节点数组。该函数会尝试从缓存中获取已经处理好的子节点，如果缓存中不存在，
    //则会根据用户配置筛选需要返回的子节点，并将结果存入缓存中；
    // 这是个工具函数，是在下面的 getExpendedTree（将拍平的数组去掉折叠的数组，返回真正渲染的数组） 中使用的
    const getChildren = (node: IInnerTreeNode, userConfig = DEFAULT_CONFIG): IInnerTreeNode[] => {
      if (node.isLeaf) { //该函数时返回子节点数组，如果是叶子节点，返回空
        return [];
      }
      let mapKey = node.id || '';
      if (userConfig.expanded) { //如果只从展开的节点中获取数据
        mapKey += '_expanded';
      }
      if (userConfig.recursive) { //如果需要获取它的孙子节点
        mapKey += '_recursive';
      }
      if (node.id && nodeMap.has(mapKey)) { //如果缓存中有
        const cacheNode = nodeMap.get(node.id);
        if (cacheNode) {
          return cacheNode;
        }
      }

      //getInnerExpendedTree 函数主要实现的功能是将已经展开的节点列表扁平化（去掉折叠的节点），使得在子节点查找时可以更高效地查找。
      const getInnerExpendedTree = (): ComputedRef<IInnerTreeNode[]> => { 
        return computed(() => {
          let excludeNodes: IInnerTreeNode[] = [];
          const result = [];
          for (let i = 0, len = data?.value.length; i < len; i++) {
            const item = data?.value[i];
            if (excludeNodes.map((innerNode) => innerNode.id).includes(item.id)) {
              continue;
            }
            if (item.expanded !== true && !item.isLeaf) {
              excludeNodes = getChildren(item);
            }
            result.push(item);
          }
          return result;
        });
      };

      const result = [];
      const config = { ...DEFAULT_CONFIG, ...userConfig };
      //如果用户指定了 只获取展开的节点，调用 getInnerExpendedTree 函数获得展开的节点列表，再在展开的节点列表中进行查找子节点。
      const treeData = config.expanded ? getInnerExpendedTree() : data;
      const startIndex = treeData.value.findIndex((item) => item.id === node.id);

      //for循环获取子节点，从当前节点的下一个节点开始往后遍历整个树结构，找到与当前节点层级相差为 1 的节点，作为当前节点的子节点，然后将符合条件的子节点存入 result 数组中。
      for (let i = startIndex + 1; i < treeData.value.length && getLevel(node) < treeData.value[i].level; i++) {
        if (config.recursive && !treeData.value[i].isHide) {
          result.push(treeData.value[i]);
        } else if (getLevel(node) === treeData.value[i].level - 1 && !treeData.value[i].isHide) {
          result.push(treeData.value[i]);
        }
      }
      if (node.id) {
        nodeMap.set(mapKey, result);
      }
      return result;
    };

    const clearNodeMap = () => { //清空 nodeMap 缓存
      nodeMap.clear();
    };

    const getParent = (node: IInnerTreeNode): IInnerTreeNode => { //传入一个节点对象，返回该节点的父节点对象
      return data.value.find((item) => item.id === node.parentId)!;
    };

    //这个是我们真正在页面上渲染的数据，本来先把数组铺平，然后根据每个节点的 expanded 属性，该属性确定它是否展开，杨村长有讲过
    // 数组拍平用的是传入的 generateInnerTree， 在 utils中
    const getExpendedTree = (): ComputedRef<IInnerTreeNode[]> => {
      return computed(() => {
        let excludeNodes: IInnerTreeNode[] = []; //保存排除的节点
        const result = [];
        for (let i = 0, len = data?.value.length; i < len; i++) {
          const item = data?.value[i];
          if (excludeNodes.map((node) => node.id).includes(item.id) || item.isHide) {
            continue;
          } 
          if (item.expanded !== true) { //是折叠的
            excludeNodes = getChildren(item);
          } 
          result.push(item); //能走到这儿说明它是展开的，如果是折叠的，上面的excludeNodes遍历的时候就退出了
        }
        return result;
      });
    };

    const getIndex = (node: IInnerTreeNode): number => { //传入一个节点对象，返回该节点在数据源 data 中的索引值
      if (!node) {
        return -1;
      }
      return data.value.findIndex((item) => item.id === node.id);
    };

    const getNode = (node: IInnerTreeNode): IInnerTreeNode => { //传入一个节点对象，返回该节点在数据源 data 中的完整对象
      return data.value.find((item) => item.id === node.id)!;
    };

    // 传入一个节点对象、一个属性名和属性值，将该节点在数据源 data 中对应属性的值设置为给定的值；
    const setNodeValue = (node: IInnerTreeNode, key: keyof IInnerTreeNode, value: valueof<IInnerTreeNode>): void => {
      clearNodeMap();
      if (getIndex(node) !== -1) {
        // @ts-ignore
        data.value[getIndex(node)][key] = value;
      }
    };

    // 传入一个树形结构数组，重新生成内部使用的树形结构，并更新数据源 data
    const setTree = (newTree: ITreeNode[]): void => {
      clearNodeMap();
      data.value = generateInnerTree(newTree);
    };

    const getTree = () => { //获取数据源 data 中的所有节点对象
      return data.value;
    };

    onUnmounted(() => {
      clearNodeMap();
    });

    return {
      getLevel,
      // @ts-ignore
      getChildren,
      clearNodeMap,
      getParent,
      getExpendedTree,
      getIndex,
      getNode,
      setNodeValue,
      setTree,
      getTree,
    };
  };
}
