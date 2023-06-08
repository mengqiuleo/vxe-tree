import { Ref, SetupContext, ref } from 'vue';
import { IInnerTreeNode, IUseCore, LazyNodeResult, IUseLazyLoad } from './use-tree-types';
import { generateInnerTree } from './utils';

export function useLazyLoad() {
  return function useLazyLoadFn(data: Ref<IInnerTreeNode[]>, core: IUseCore, context: SetupContext): IUseLazyLoad {
    const { getNode, setNodeValue, getIndex, getChildren } = core;

    // 设置公共父节点
    const setCommonParent = (node: IInnerTreeNode, nodes: Ref<IInnerTreeNode[]>) => {
      nodes.value.forEach((item) => {
        if (item.level - 1 === node.level && !item.parentId) {//如果当前节点的层级减一等于node,并且当前节点还没有父节点，证明是父子关系
          item.parentId = node.id;
        }
      });
    };
    // 插入子节点
    const insertChildrenNodes = (parent: IInnerTreeNode, nodes: Ref<IInnerTreeNode[]>) => {
      const parentIndex = getIndex(parent);
      if (parentIndex !== -1) {
        data.value.splice(parentIndex + 1, 0, ...nodes.value);//将所有数据插入原data中
      }
    };

    //按需延迟加载树的子节点，将它们插入到树中并相应地更新父节点。
    const dealChildNodes = (result: LazyNodeResult) => {//result是两个参数：treeItems 和 node
      const node = getNode(result.node);//node是我们设置了 isLeaf 的那个节点
      setNodeValue(node, 'loading', false);
      const childNodes = ref<IInnerTreeNode[]>(generateInnerTree(result.treeItems, 'children', node.level));//将获取到的数据拍平
      // 设置公共父节点
      setCommonParent(node, childNodes);
      // 插入children
      insertChildrenNodes(node, childNodes);
      // 更新childrenNodes数量
      const childrenNodes = getChildren(node);
      setNodeValue(node, 'childNodeCount', childrenNodes.length);
    };

    //懒加载是用来异步加载树的内容的
    //我们需要向外emit一个事件，外部调用异步方法获取数据，传入回调函数，利用回调函数将获取到的节点传给我们组件内部，然后我们再渲染异步获取到的节点
    const lazyLoadNodes = (node: IInnerTreeNode): void => {
      const innerNode = getNode(node); //获取最开始的需要懒加载的节点
      if (!innerNode.isLeaf && !innerNode.childNodeCount) {//不是叶子节点但是子节点数量不为0，证明是一个懒加载节点
        setNodeValue(node, 'loading', true);//设置为懒加载节点
        context.emit('lazy-load', node, dealChildNodes);//向外触发，当当前节点为懒加载时，按需延迟加载树的子节点
      }
    };

    return {
      lazyLoadNodes,
    };
  };
}