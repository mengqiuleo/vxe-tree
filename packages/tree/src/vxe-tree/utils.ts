import type { ICheck, ICheckStrategy, ITreeNode, IInnerTreeNode } from './composables/use-tree-types';
import { randomId } from '../shared/randomId';

/**
 * true 默认为 both，false 默认为 none。
 * "true" defaults to "both" and "false" to "none".
 * 如果是boolean值，那么设置它为 both或者none，否则设置为'upward' | 'downward'
 */
export const formatCheckStatus = (check: ICheck): ICheckStrategy => {
  return typeof check === 'boolean' ?
    check ? 'both' : 'none'
    : check;
};
/**
 * Standardized tree node 此时已经拍平了
 * @param trees
 * @param keyName
 * @param childrenName
 * @param parentId
 * @returns IInnerTreeNode[]
 */
export const formatBasicTree = (trees: ITreeNode[], keyName = 'id', childrenName = 'children', parentId?: string): IInnerTreeNode[] => {
  return trees.map((item) => {
    const curItem = { ...item, parentId } as IInnerTreeNode;//* 给每个节点增加 parentId

    if (!(keyName in curItem) || !curItem[keyName as 'id'] ) { //先给每个节点增加一个 id
      curItem[keyName as 'id'] = randomId();
      curItem.idType = 'random';
    }
    if (
      childrenName in curItem
      && Array.isArray(curItem[childrenName as 'children'])
      && curItem[childrenName as 'children']?.length
    ) {
      //* Child nodes exist: 拖拽递归处理，如果拖拽的当前节点存在子节点，那么所有子节点也需要拖拽
      curItem[childrenName as 'children'] = formatBasicTree(
        curItem[childrenName as 'children'] as ITreeNode[], //*这里遍历它的孩子节点
        keyName,
        childrenName,
        curItem[keyName as 'id'],
      );
      // Child nodes exist after node dragging
      if ('isLeaf' in curItem) {
        delete curItem.isLeaf;
      }
    } else {
      // There is no child node, and then there is no IsLeaf attribute
      if (!('isLeaf' in curItem)) {
        curItem.isLeaf = true;
      }
    }
    if (!curItem.parentId) {
      delete curItem.parentId;
    }
    return curItem;
  });
};
