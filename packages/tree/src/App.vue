<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
// import vxeTree from '../dist/index.esm.js'
// import vxeTree from './vxe-tree/tree';

const data = ref([
  {
    label: 'Parent node 1',
    children: [
      {
        label: 'Parent node 1-1',
        children: [{ label: 'Leaf node 1-1-1' }, { label: 'Leaf node 1-1-2' }],
      },
      { label: 'Leaf node 1-2' },
    ],
  },
  { label: 'Leaf node 2' },
]);

const treeRef = ref(null);
onMounted(() => {
  treeRef.value.treeFactory.expandAllNodes();
});

</script>

<template>
  <div class="container">
    <vxeTree class="mb-2" check operate :data="data" :dragdrop="{ dropPrev: true, dropNext: true, dropInner: true }" ref="treeRef">
    </vxeTree>

  </div>
</template>

<style scoped lang="scss">
.container {
  width: 500px;
}
</style>
