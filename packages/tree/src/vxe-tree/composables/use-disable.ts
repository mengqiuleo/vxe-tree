import { Ref } from 'vue';
import { IInnerTreeNode, IUseCore, IUseDisable } from './use-tree-types';

export function useDisable() {
  // @ts-ignore
  return function useDisableFn(data: Ref<IInnerTreeNode[]>, core: IUseCore): IUseDisable {
    const { setNodeValue } = core;
    //disableSelectNode 用于禁用节点的选择功能，即用户无法通过鼠标或键盘选择该节点。
    //而 disableCheckNode 用于禁用节点的勾选功能，即用户无法通过勾选框来勾选该节点。
    const disableSelectNode = (node: IInnerTreeNode): void => {
      setNodeValue(node, 'disableSelect', true);
    };

    const disableCheckNode = (node: IInnerTreeNode): void => {
      setNodeValue(node, 'disableCheck', true);
    };

    const disableToggleNode = (node: IInnerTreeNode): void => {
      setNodeValue(node, 'disableToggle', true);
    };

    const enableSelectNode = (node: IInnerTreeNode): void => {
      setNodeValue(node, 'disableSelect', false);
    };

    const enableCheckNode = (node: IInnerTreeNode): void => {
      setNodeValue(node, 'disableCheck', false);
    };

    const enableToggleNode = (node: IInnerTreeNode): void => {
      setNodeValue(node, 'disableToggle', false);
    };

    return {
      disableSelectNode,
      disableCheckNode,
      disableToggleNode,
      enableSelectNode,
      enableCheckNode,
      enableToggleNode,
    };
  };
}
