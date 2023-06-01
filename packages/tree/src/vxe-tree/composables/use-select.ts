import { Ref, SetupContext } from 'vue';
import { useInitSelectCollection } from './use-init-select-collection';
import { IInnerTreeNode, IUseCore, IUseSelect } from './use-tree-types';

//控制选中，不是checkbox，是选中整行
export function useSelect() {
  return function useSelectFn(data: Ref<IInnerTreeNode[]>, core: IUseCore, context: SetupContext): IUseSelect {
    const { setNodeValue } = core;
    const { getInitSelectedNodes, clearInitSelectedNodes } = useInitSelectCollection();

    let prevActiveNode: IInnerTreeNode;

    const selectNode = (node: IInnerTreeNode): void => {
      if (node.disableSelect) { //如果当前节点被禁止选择
        return;
      }

      const initSelectedNodes = getInitSelectedNodes();
      if (initSelectedNodes.length) {
        initSelectedNodes.forEach((item) => {
          setNodeValue(item, 'selected', false); //清除所有已经初始化选中的节点
        });
        clearInitSelectedNodes();
      }

      if (prevActiveNode) {
        const prevActiveNodeIndex = data.value.findIndex((item) => item.id === prevActiveNode.id);
        setNodeValue(data.value[prevActiveNodeIndex], 'selected', false); //清除之前的活动节点，我们需要将当前节点设置为活动节点
      }

      setNodeValue(node, 'selected', true); //将当前节点标记为选中
      context.emit('select-change', node);
      prevActiveNode = node;//将当前节点标记为上一个活动节点
    };

    const deselectNode = (node: IInnerTreeNode): void => { //取消选中
      setNodeValue(node, 'selected', false);
      context.emit('select-change', node);
    };

    const toggleSelectNode = (node: IInnerTreeNode): void => { //切换节点的选中状态，如果节点已选中，则取消选中；如果节点未选中，则选中该节点。
      if (node.selected) {
        deselectNode(node);
      } else {
        selectNode(node);
      }
    };

    //获取当前选中的节点，它在 data.value 数组中查找第一个被标记为选中的节点，并返回该节点
    const getSelectedNode = (): IInnerTreeNode => {
      return data.value.find((node) => node.selected)!;
    };

    return {
      selectNode,
      deselectNode,
      toggleSelectNode,
      getSelectedNode,
    };
  };
}
