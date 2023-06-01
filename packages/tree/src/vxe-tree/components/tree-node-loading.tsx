import { defineComponent } from 'vue';
import { useNamespace } from '../../shared/use-namespace';

export default defineComponent({
  name: 'DTreeNodeLoading',
  setup() {
    const ns = useNamespace('loading-children ');

    return () => {
      return <span class={ns.b()}>{`${ 'Loading'}...`}</span>;
    };
  },
});
