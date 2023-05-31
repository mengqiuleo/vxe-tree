import { defineComponent, toRefs } from 'vue';
import { TreeProps, treeProps } from './tree-type';
import { useToggle } from './composables/use-toggle';
import './tree.scss'
import useHighlightNode from './composables/use-highlight';

export default defineComponent({
  name: 'vxeTree',
  props: treeProps,
  emit: [],
  setup(props: TreeProps, { slots }) {
    const { data, checkable } = toRefs(props)
    const { expandedTree, toggleNode } = useToggle(data) //expandedTree是我们渲染只展开的树节点
    const { nodeClassNameReflect, handleInitNodeClassNameReflect, handleClickOnNode } = useHighlightNode()

    // 增加缩进的展位元素
    const Indent = () => {
      return <span style="display: inline-block; width: 16px; height: 16px;"></span>
    }

    return () => (
      <>
        <div class="vxe-tree">
          {expandedTree.value.map(treeNode => (
            <div class="vxe-tree-node" style={{
              paddingLeft: `${ 24 * (treeNode.level - 1)}px`
            }}>
              {/* 折叠图标：判断当前节点为叶子，不需要图标 */}
              { treeNode.isLeaf ? 
                <span style={{display: 'inline-block', width: '25px'}}></span> :
                <svg 
                    onClick={() => toggleNode(treeNode)}
                    style={{
                      width: '18px', height: '18px', display: 'inline-block',
                      transform: treeNode.expanded ? 'rotate(90deg)' : ''
                    }}
                    viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="currentColor" d="M384 192v640l384-320.064z"></path>
                  </svg>
              }


              {/* 标签 */}
              {treeNode.label}
            </div>
            ))
          }
        </div>
      </>
    );
  }
});
