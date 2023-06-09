import { defineComponent, inject, PropType, toRefs } from 'vue';
import { USE_TREE_TOKEN } from '../const';
import { IInnerTreeNode, IUseTree } from '../composables';
import { IconClose } from './icon-close';
import { IconOpen } from './icon-open';

import { useNamespace } from '../../shared/use-namespace';

export default defineComponent({
  name: 'VTreeNodeToggle',
  props: {
    data: {
      type: Object as PropType<IInnerTreeNode>,
      default: () => ({}),
    }
  },
  setup(props) {
    const { data } = toRefs(props);
    // @ts-ignore
    const { toggleNode, accordionNode } = inject(USE_TREE_TOKEN) as Partial<IUseTree>;
    const ns = useNamespace('tree');

    return () => {
      return (
        <span
          class={[ns.e('node-folder'), data.value?.disableToggle && 'toggle-disabled']}
          onClick={(event: MouseEvent) => {
            event.stopPropagation();
            toggleNode && toggleNode(data.value);  // 这里修改节点的 expanded属性，然后 getExpendedTree 再对节点过滤，之后的节点才会被渲染到页面上，所以才能控制节点的展开收起
            
            // TODO: 手风琴模式
            // accordionNode && accordionNode(data.value);
          }}>
          {data.value.isLeaf ? (
            // node-indent 这个 span 是占位符，因为如果是叶子节点，也要有展开收起图标的缩进
            <span class={ns.e('node-indent')} />
          ) : data.value.expanded ? (
            <IconOpen/>
          ) : (
            <IconClose/>
          )}
        </span>
        
      );
    };
  },
});
