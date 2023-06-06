<template>
  <vxe-tree :data="data" ref="treeRef"></vxe-tree>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';

const treeRef = ref(null);
const data = ref([
  {
    label: 'Parent node 1',
    children: [
      {
        label: 'Parent node 1-1',
        children: [
          {
            label: 'Parent node 1-1-1',
            children: [
              {
                label: 'Parent node 1-1-1-1',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'Parent node 2',
    children: [
      {
        label: 'Parent node 2-1',
        children: [
          {
            label: 'Leaf node 2-1-1',
          },
          {
            label: 'Leaf node 2-1-2',
          },
        ],
      },
    ],
  },
  {
    label: 'Parent node 3',
    children: [
      {
        label: 'Leaf node 3-1',
        children: [
          {
            label: 'Leaf node 3-1-1',
            children: [
              {
                label: 'Leaf node 3-1-1-1',
              },
            ],
          },
        ],
      },
      {
        label: 'Leaf node 3-2',
      },
    ],
  },
]);

onMounted(() => {
  treeRef.value.treeFactory.mergeTreeNodes();
  treeRef.value.treeFactory.expandAllNodes();
});
</script>
