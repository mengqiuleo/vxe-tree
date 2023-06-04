<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import vTree from './vxe-tree/tree';

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
    <vTree class="mb-2" check operate :data="data" :dragdrop="{ dropPrev: true, dropNext: true, dropInner: true }" ref="treeRef">
    </vTree>

  </div>
</template>

<style scoped lang="scss">
.container {
  width: 500px;
}
</style>
