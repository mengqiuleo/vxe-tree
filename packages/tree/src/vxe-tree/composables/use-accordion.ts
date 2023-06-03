import { TreeProps } from '../tree-types';
import { IInnerTreeNode, IUseAccordion, IUseCore } from './use-tree-types';

//* 废弃，手风琴模式暂时没办法实现，上下文割裂，目前没有办法将 node 传给 getExpendedTree 方法
export function useAccordion(props: TreeProps) {
  return function useAccordionFn(core: IUseCore): IUseAccordion {
    const { getExpendedTree } = core;
    
    const accordionNode = (node: IInnerTreeNode): void => {
      if(!props.accordion) return;
      console.log('accordion')
      const id = node.id
      let showTreeData = getExpendedTree().value;
      // 展开节点
      if (!showTreeData.includes(node)) {
        // 手风琴模式
        if (props.accordion) {
          // 所有兄弟节点id
          const siblings = Object.values(showTreeData)
            .filter(
              treeNode => node.parentId === treeNode.parentId && node.id !== id,
            )
            // .map(node => node.id);
          // 剔除兄弟节点
          showTreeData = showTreeData.filter(
            key => !siblings.includes(key),
          );
        }
      }
    };
    return {
      accordionNode
    };
  };
}
