import { Ref } from 'vue';
import { useOperate } from './use-operate';
import { IInnerTreeNode, IUseCore, IUseMergeNodes } from './use-tree-types';

export function useMergeNodes() {
  return function useMergeNodesFn(data: Ref<IInnerTreeNode[]>, core: IUseCore): IUseMergeNodes {
    const { setNodeValue, getChildren } = core;
    const { removeNode } = useOperate()(data, core);

    const mergeTreeNodes = () => {
      // 先定义一个合并方法，之后对根节点的直接子节点进行遍历实现合并操作
      const mergeToNode = (node: IInnerTreeNode) => {
        if (node.isLeaf) {
          return;
        }

        const children = getChildren(node, { recursive: false });//获取该节点的直接子节点，不要孙节点
        if (children?.length === 1) {
          const subChildren = getChildren(children[0], { recursive: false });

          if (subChildren.length !== 0) { //如果子节点数量为1，且该子节点还有子节点，则将其合并进当前节点
            setNodeValue(node, 'label', node.label + ' / ' + children[0]?.label);
            removeNode(children[0], { recursive: false });//移出它的子节点的子节点
            mergeToNode(node);
          } else {//如果子节点没有子节点，将这个子节点
            setNodeValue(children[0], 'parentId', node.id);
          }
        } else {
          children.forEach((item) => {
            mergeToNode(item);
          });
        }
      };

      data.value
        .filter((item) => item.level === 1) //遍历根节点的直接子节点
        .forEach((item) => {
          mergeToNode(item);
        });
    };

    return {
      mergeTreeNodes,
    };
  };
}
