import { ref, Ref, SetupContext } from 'vue';
import { ICheckStrategy, IInnerTreeNode, IUseCore, IUseCheck } from './use-tree-types';

// 设置节点属性的参数类型
type ISetNodeValue = Parameters<IUseCore['setNodeValue']>;

/**
 * 'upward' 表示选中一个节点时，其所有父节点也会自动选中。
 * 'downward' 表示选中一个节点时，其所有子节点也会自动选中。
 * 'both' 表示既有 'upward' 也有 'downward' 的效果，即选中一个节点时，其所有父节点和子节点都会自动选中。
 * 'none' 表示不具备自动选中的效果，选中一个节点只会选中该节点本身，不影响其他节点。
 */

// useCheck函数接收一个options参数，包括一个checkStrategy属性，默认值为"both"，有四种类型：'upward' | 'downward' | 'both' | 'none'
export function useCheck(options: Ref<{ checkStrategy: ICheckStrategy }> = ref({ checkStrategy: 'both' as ICheckStrategy })) {
  return function useCheckFn(data: Ref<IInnerTreeNode[]>, core: IUseCore, context: SetupContext): IUseCheck {
    const { setNodeValue, getNode, getChildren, getParent } = core;

    // 用于将指定节点设为选中状态，并触发 check-change 事件
    const checkNode = (node: IInnerTreeNode): void => {
      setNodeValue(node, 'checked', true);
      context.emit('check-change', node);
    };

  //# 没懂这个函数
    const setNodeValueInAvailable = (node: ISetNodeValue[0], key: ISetNodeValue[1], value: ISetNodeValue[2]) => {
      if (!node.disableCheck) {
        setNodeValue(node, key, value);
      }
    };

    // 定义 uncheckNode 函数，用于将指定节点设为取消选中状态，并触发 check-change 事件
    const uncheckNode = (node: IInnerTreeNode): void => {
      setNodeValue(node, 'checked', false);
      context.emit('check-change', node);
    };

    //* 用于控制父节点的选中状态。它会递归地向上更新所有祖先节点的选中状态。
    const controlParentNodeChecked = (node: IInnerTreeNode, checked: boolean): void => {
      if (!node.parentId) {
        return;
      }
      const parentNode = getParent(node);
      if (!parentNode) {
        return;
      }
      // 当前父节点的子节点数组中是否有选中的
      let childChecked = checked; //因为当前节点被选中了，所以这个值目前为 true
      // 子节点选中后触发
      if (checked) {
        if (!parentNode.checked) { // 如果父节点没有被选中，那就设置父节点选中状态
          setNodeValueInAvailable(parentNode, 'checked', true);
        }
      } else {
        // 子节点取消后触发
        const siblingNodes = getChildren(parentNode); //拿到当前节点父节点的所有孩子
        const checkedSiblingNodes = siblingNodes.filter((item) => item.checked && item.id !== node.id);//通过过滤拿到除了当前节点的，也就是其他被选中的孩子
        // 子节点全部是取消状态
        if (checkedSiblingNodes.length === 0) { //如果我们把当前节点取消选中，并且其他孩子也没有被选中，
          setNodeValueInAvailable(parentNode, 'checked', false);//那么父节点就要取消选中
        } else {
          setNodeValueInAvailable(parentNode, 'checked', true);
          childChecked = true;
        }
      }
      if (parentNode.parentId) {
        // 递归往上设置父节点的 checked 属性
        controlParentNodeChecked(parentNode, childChecked);
      }
    };

    // 定义 toggleCheckNode 函数，用于切换指定节点（也就是当前节点）的选中状态，并触发 check-change 事件。
    //* 如果指定节点是选中状态，则将其子节点全部设为未选中状态，反之则将其子节点全部设为选中状态。
    const toggleCheckNode = (node: IInnerTreeNode): void => {
      const checked = getNode(node).checked; //获取当前节点的选中状态
      if (checked) { //如果选中了
        setNodeValue(node, 'checked', false); //接下来就是让它为未选中
        context.emit('check-change', node);

        if (['downward', 'both'].includes(options.value.checkStrategy)) { //*如果配置了 'downward' 或 'both'
          getChildren(node).forEach((item) => setNodeValueInAvailable(item, 'checked', false)); //当前节点设置为未选中，那么子节点全部也为未选中
        }
      } else {
        setNodeValue(node, 'checked', true); //让当前节点选中
        context.emit('check-change', node);

        if (['downward', 'both'].includes(options.value.checkStrategy)) {
          getChildren(node).forEach((item) => setNodeValueInAvailable(item, 'checked', true)); //当前节点选中，那子节点全部选中
        }
      }

      //根据配置 options.value.checkStrategy，控制父节点的选中状态。如果配置了 'upward' 或 'both'，则调用 controlParentNodeChecked 函数控制父节点的选中状态。
      //如果当前节点从选中状态切换到未选中状态，那么向上遍历直到找到根节点并更新其选中状态；如果当前节点从未选中状态切换到选中状态，那么向上遍历直到找到根节点并更新其选中状态。
      if (['upward', 'both'].includes(options.value.checkStrategy)) {//* 实现 upward 和 downward 的关键
        controlParentNodeChecked(node, !checked);
      }
    };

    // 返回当前被选中的节点
    const getCheckedNodes = () => {
      return data.value.filter((node) => node.checked);
    };

    return {
      checkNode, //设置被选中节点的 checked属性 值
      uncheckNode, //设置未被选中节点的 checked属性 值
      toggleCheckNode, //当我们改变某个节点的选中状态，如果指定节点是选中状态，则将其子节点全部设为未选中状态，反之则将其子节点全部设为选中状态。
      getCheckedNodes, //获取被选中的节点
    };
  };
}

//* 最重要的是 toggleCheckNode 函数，它用于当前节点上，并且控制它的全部子节点还有它的父节点的相关状态