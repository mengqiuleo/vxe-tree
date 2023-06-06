<template>
  <vxe-tree :data="data" @lazy-load="lazyLoad" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const data = ref([
  {
    label: 'Parent node 1',
    children: [
      {
        label: 'Parent node 1-1 - dynamic loading',
        isLeaf: false,
      },
      { label: 'Leaf node 1-2' },
    ],
  },
  { label: 'Leaf node 2 - dynamic loading', isLeaf: false },
]);

const lazyLoad = (node, callback) => {
  setTimeout(() => {
    const data = [
      {
        label: 'child node 1',
        expanded: true,
        children: [
          {
            label: 'child node 1-1',
          },
          {
            label: 'child node 1-2',
          },
        ],
      },
      {
        label: 'child node 2',
        children: [
          {
            label: 'child node 2-1',
          },
        ],
      },
    ];
    callback({
      treeItems: data,
      node,
    });
  }, 500);
};
</script>