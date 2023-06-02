import { Ref } from 'vue';
import { IInnerTreeNode, IUseCore, IContextMenu } from './use-tree-types';

export function useContextMenu() {
  // @ts-ignore
  return function useDisableFn(data: Ref<IInnerTreeNode[]>, core: IUseCore,  context: SetupContext): IContextMenu {
    const { setNodeValue } = core;
    
    const nodeContextMenu = (node: IInnerTreeNode): void => {
      setNodeValue(node, 'nodeContextMenu', true);
      context.emit('node-contextmenu', node);
    };

    const closeMenu = (node: IInnerTreeNode): void => {
      setNodeValue(node, 'nodeContextMenu', false);
    };

    return {
      nodeContextMenu,
      closeMenu
    };
  };
}
