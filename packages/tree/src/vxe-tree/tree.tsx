import { defineComponent, toRefs } from 'vue';
import { TreeProps, treeProps } from './tree-type';

export default defineComponent({
  name: 'vxeTree',
  props: treeProps,
  setup(props: TreeProps) {
    const { data: innerData } = toRefs(props)

    return () => (
      <>
        <div class="vxe-tree">
          {innerData.value.map(treeNode => treeNode.label)}
        </div>
      </>
    );
  }
});
