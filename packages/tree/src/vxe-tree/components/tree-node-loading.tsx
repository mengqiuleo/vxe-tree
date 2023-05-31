import { defineComponent, getCurrentInstance } from 'vue';
import { useNamespace } from '../../shared/use-namespace';

export default defineComponent({
  name: 'DTreeNodeLoading',
  setup() {
    const app = getCurrentInstance();
    const ns = useNamespace('loading-children ');

    return () => {
      return <span class={ns.b()}>{`${ 'Loading'}...`}</span>;
    };
  },
});
