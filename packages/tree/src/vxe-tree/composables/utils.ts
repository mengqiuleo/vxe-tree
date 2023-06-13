import { useInitSelectCollection } from './use-init-select-collection';
import { IInnerTreeNode, ITreeNode } from './use-tree-types';
import omit from '../../shared/omit'
import { randomId } from '../../shared/randomId'

interface ITreeMap {
  [id: string]: ITreeNode;
}

export function flatToNested(flatTree: IInnerTreeNode[]): ITreeNode[] {
  const treeMap: ITreeMap = {};
  return flatTree.reduce((acc: ITreeNode[], cur: IInnerTreeNode) => {
    const { id, parentId = '' } = cur;

    if (!treeMap[id]) {
      treeMap[id] = {
        ...cur,
        children: [],
      };
    }

    if (!treeMap[parentId]) {
      acc.push(treeMap[id]);
    } else {
      treeMap[parentId].children!.push(treeMap[id]);
    }

    return acc;
  }, []);
}

/**
 * 用于生成内部使用的扁平结构，对树的所有操作都是在操作这个内部的扁平结构，
 * 该数据一旦发生变化，树组件的 UI 即相应变化。
 *
 * @param tree 原始嵌套结构的树数据
 * @param key 子节点key，默认为'children'
 * @returns 扁平结构的树数据
 *
 * 将嵌套结构拍平之后，增加了
 * - 'id'：唯一标识一个树节点
 * - 'parentId'：父节点
 * - 'level'：所属的节点层级
 * - 'isLeaf'：是否是叶子节点，用于决定是否渲染展开/收起按钮
 * - 'idType'：(没有传入 id 的节点会生成一个随机的 id，idType 用来标识 id 是否是随机生成的)
 * - 'parentChildNodeCount'：父级子节点数量
 * - 'currentIndex'：当前节点在父节点的索引
 */
const { setInitSelectedNode } = useInitSelectCollection();
// * 在 use-Tree 中使用
export function generateInnerTree(tree: ITreeNode[], key = 'children', level = 0, path: IInnerTreeNode[] = []): IInnerTreeNode[] {
  level++;

  return tree.reduce((acc: IInnerTreeNode[], item: ITreeNode, currentIndex) => {
    const newItem: Partial<IInnerTreeNode> = Object.assign({}, item);//根据当前item生成新的newItem
    if (newItem.id === undefined) {
      newItem.id = randomId();
      newItem.idType = 'random';
    }

    if (newItem.selected) {
      setInitSelectedNode(newItem as IInnerTreeNode);
    }

    newItem.level = level;
    newItem.parentChildNodeCount = tree.length;
    newItem.currentIndex = currentIndex;
    newItem.childNodeCount = newItem.children?.length || 0;

    if (path.length > 0 && path[path.length - 1]?.level >= level) { //如果当前节点不是子节点了，那么我们就清空path数组，然后重新记录
      while (path[path.length - 1]?.level >= level) {
        path.pop();
      }
    }

    path.push(newItem as IInnerTreeNode);

    const parentNode = path[path.length - 2];
    if (parentNode) {
      newItem.parentId = parentNode.id;
    }

    if (!newItem[key]) {//这里的key指的是children，从传入的参数中看出来
      // @ts-ignore
      return acc.concat({ ...newItem, isLeaf: newItem.isLeaf === false ? false : true });//如果当前节点没有子节点，则将其直接加入到结果数组 acc 中
    } else { //否则，将其子节点递归地转化为 IInnerTreeNode 对象，并将其加入到当前节点的 children 属性中。
     // @ts-ignore
      return acc.concat(omit<ITreeNode>(newItem, 'children'), generateInnerTree(newItem[key], key, level, path));
    }
  }, []);
}
