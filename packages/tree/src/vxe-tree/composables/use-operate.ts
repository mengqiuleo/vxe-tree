import { Ref, ref } from 'vue';
import { randomId } from '../../shared/randomId';
import { IInnerTreeNode, ITreeNode, IUseCore, IUseOperate } from './use-tree-types';

export function useOperate() {
  return function useOperateFn(data: Ref<IInnerTreeNode[]>, core: IUseCore): IUseOperate {
    const { setNodeValue, getChildren, getIndex, getLevel, getParent } = core;

    const insertBefore = (parentNode: IInnerTreeNode, node: ITreeNode, referenceNode?: IInnerTreeNode): void => {
      const children = getChildren(parentNode, {
        recursive: false,
      });
      const lastChild = children[children.length - 1]; // 获取当前父节点的最后一个子节点
      let insertedIndex = getIndex(parentNode) + 1;

      if (referenceNode) {
        insertedIndex = getIndex(referenceNode);
      } else if (lastChild) {
        insertedIndex = getIndex(lastChild) + 1;
      }

      setNodeValue(parentNode, 'expanded', true);
      setNodeValue(parentNode, 'isLeaf', false);
      let childrenLen = parentNode.childNodeCount
      if(!childrenLen){
        childrenLen = 0
        setNodeValue(parentNode, 'childNodeCount', childrenLen+1);
      }
      // console.log('当前父节点', parentNode)

      if (lastChild) {
        setNodeValue(lastChild, 'parentChildNodeCount', children.length + 1);
      }

      const currentNode = ref({
        ...node,
        level: getLevel(parentNode) + 1,
        parentId: parentNode.id,
        isLeaf: true,
        parentChildNodeCount: children.length + 1,
        currentIndex: lastChild && typeof lastChild.currentIndex === 'number' ? lastChild.currentIndex + 1 : 0,
      });

      if (currentNode.value.id === undefined) {
        currentNode.value.id = randomId();
      }
      // @ts-ignore
      data.value = data.value.slice(0, insertedIndex).concat(currentNode.value, data.value.slice(insertedIndex, data.value.length));
    };

    // recursive代表是否要递归删除子节点
    const removeNode = (node: IInnerTreeNode, config = { recursive: true }): void => {
      if (!config.recursive) {//不递归删除它的子节点，那么所有孩子层级减一，默认是要递归删除
        getChildren(node).forEach((child) => { 
          setNodeValue(child, 'level', getLevel(child) - 1);
        });
      }

      //筛选出除要删除节点和其子孙节点之外的所有节点，并将这些节点重新赋值给原始数据源data。
      data.value = data.value.filter((item) => {
        if (config.recursive) {
          return (
            item.id !== node.id &&
            !getChildren(node)
              .map((nodeItem) => nodeItem.id)
              .includes(item.id)
          );
        } else {
          return item.id !== node.id;
        }
      });

      // 子节点全部删完了，应该设置父节点为叶子结点(isLeaf)
      if (getParent(node) && getChildren(getParent(node)).length === 0) {
        setNodeValue(getParent(node), 'isLeaf', true);
      }
    };

    const editNode = (node: IInnerTreeNode, label: string): void => {
      setNodeValue(node, 'label', label);
    };

    return {
      insertBefore,
      removeNode,
      editNode,
    };
  };
}
