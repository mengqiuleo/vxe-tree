import { ITreeNode, IInnerTreeNode } from './tree-type'
export function generateInnerTree(
  tree: ITreeNode[], 
  level = 0, //表示当前节点的层级，每递归一次，层级加一
  path = [] as IInnerTreeNode[] //记录当前路径，获取父节点id,因为需要设置 parentId
): IInnerTreeNode[] {
  level++

  return tree.reduce((prev, cur) => {
    const o = {...cur} as IInnerTreeNode
    o.level = level //设置当前节点的层级

    //记录path，计算parentId
    if(path.length > 0 && path[path.length - 1].level >= level) { //说明是在向上冒泡的过程
      // 目前是由子到父，弹出
      while(path.length) path.pop()
    } 

    // 父 - 子 
    path.push(o)
    
    //获取parentNode
    const parentNode = path[path.length-2]
    if(parentNode) {
      o.parentId = parentNode.id
    }

    if(o.children) {
      const children = generateInnerTree(o.children, level, path)
      delete o.children
      return prev.concat(o, children)
    } else { //叶子节点
      o.isLeaf = true
      return prev.concat(o)
    }
  }, [] as IInnerTreeNode[])

}
