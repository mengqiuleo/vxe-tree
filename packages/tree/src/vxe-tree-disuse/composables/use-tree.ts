import { ref, computed, Ref, unref } from "vue"
import { IInnerTreeNode, ITreeNode } from '../tree-type';
import { generateInnerTree } from "../utils"

export function useTree(node: Ref<ITreeNode[]> | ITreeNode[]) {
  const innerData = ref(generateInnerTree(unref(node))) //innerData是拍平的

  const toggleNode = (node: IInnerTreeNode) => {
    // 在原始列表中获取该节点
    const cur = innerData.value.find(item => item.id === node.id)
    if( cur) {
      cur.expanded = !cur.expanded
    }
  }
  
  //获取展开的数组列表，我们只渲染展开的
  const expandedTree = computed(() => {
    let excludeNodes: IInnerTreeNode[] = []
    const result = []
  
    for(const item of innerData.value) {
      //如果遍历的节点在排除列表中，直接跳出本次循环
      if(excludeNodes.includes(item)){
        continue
      }
  
      //当前节点处于折叠状态，它的子节点应该被排除
      if(item.expanded !== true){
        excludeNodes = getChildren(item)
      }
      result.push(item)
    }
    return result
  })
  const getChildren = (node: IInnerTreeNode, recursive = true) => {
    const result = []
    // 找到node 在列表中的索引
    const startIndex = innerData.value.findIndex(item => item.id === node.id)
    // 找到它后面所有子节点（level 比当前节点大）
    for (
      let i = startIndex + 1;
      i < innerData.value.length && node.level < innerData.value[i].level;
      i++
    ) {
      if (recursive) {
        result.push(innerData.value[i])
      } else if (node.level === innerData.value[i].level - 1) {
        // 直接子节点
        result.push(innerData.value[i])
      }
    }
    return result
  }

  return {
    innerData, //拍平的
    toggleNode, //当我们点击某个节点时，触发它的 toggleNode事件，让箭头朝右或朝下
    expandedTree, //我们最终渲染的
    getChildren //这个其实外面不会用到
  }
}

