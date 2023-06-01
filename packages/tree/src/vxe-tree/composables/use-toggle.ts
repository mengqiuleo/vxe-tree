import { Ref, SetupContext } from 'vue';
import { IInnerTreeNode, IUseCore, IUseToggle, IUseLazyLoad } from './use-tree-types';

// 控制展开收起，这里和 lazyLoad有耦合
export function useToggle() {
  return function useToggleFn(data: Ref<IInnerTreeNode[]>, core: IUseCore, context: SetupContext, lazyLode: IUseLazyLoad): IUseToggle {
    const { getNode, setNodeValue } = core;
    const { lazyLoadNodes } = lazyLode;

    const expandNode = (node: IInnerTreeNode): void => { //接受一个树节点作为参数，将该节点展开
      if (node.disableToggle || node.loading) { //如果该节点不能折叠 或者 正在加载
        return;
      }

      setNodeValue(node, 'expanded', true);
      context.emit('toggle-change', node);
    };

    const collapseNode = (node: IInnerTreeNode): void => { //接受一个树节点作为参数，将该节点收起
      if (node.disableToggle || node.loading) {
        return;
      }
      setNodeValue(node, 'expanded', false);
      context.emit('toggle-change', node);
    };

    const toggleNode = (node: IInnerTreeNode): void => {  //接受一个树节点作为参数，切换该节点的展开/收起状态。
      if (node.disableToggle || node.loading) {
        return;
      }
      if (getNode(node).expanded) {
        collapseNode(node);
      } else {
        expandNode(node);
      }
      //* 懒加载节点: 耦合
      lazyLoadNodes(node);
    };

    const expandAllNodes = (): void => { //展开所有节点
      data.value.forEach((node: IInnerTreeNode) => {
        expandNode(node);
      });
    };

    return {
      expandNode,
      collapseNode,
      toggleNode,
      expandAllNodes,
    };
  };
}
