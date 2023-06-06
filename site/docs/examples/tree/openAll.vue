<template>
  <vxe-tree :data="data" ref="treeRef" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const data = ref([
  {
    label: 'Parent node 1',
    children: [
      {
        label: 'Parent node 1-1',
        children: [{ label: 'Leaf node 1-1-1' }],
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