<script setup lang="ts">
import { ref } from 'vue';
import vxeTree from './vxe-tree/tree';

const data = ref([
  {
    label: 'parent node 1',
  },
  {
    label: 'parent node 2',
    expanded: true,
    children: [
      {
        label: 'leaf node 2-1',
        expanded: true,
        children: [
          {
            label: 'leaf node 2-1-1',
          },
          {
            label: 'leaf node 2-1-2',
          },
        ],
      },
      {
        label: 'leaf node 2-2',
        children: [
          {
            label: 'leaf node 2-2-1',
          },
          {
            label: 'leaf node 2-2-2',
          },
        ],
      },
    ],
  },
  {
    label: 'parent node 3',
    expanded: true,
    children: [
      {
        label: 'leaf node 3-1',
      },
      {
        label: 'leaf node 3-2',
      },
    ],
  },
  {
    label: 'parent node 4',
    expanded: true,
    children: [
      {
        label: 'leaf node 4-1',
      },
      {
        label: 'leaf node 4-2',
      },
    ],
  },
  {
    label: 'parent node 5',
    expanded: true,
    children: [
      {
        label: 'leaf node 5-1',
      },
      {
        label: 'leaf node 5-2',
      },
    ],
  },
]);

const toggleChange = (node: any) => {
  console.log('toggleChange node:', node);
};


</script>

<template>
  <div class="container">
    <vxeTree class="mb-2" :data="data" check operate   @toggle-change="toggleChange" :dragdrop="{ dropPrev: true, dropNext: true, dropInner: true }"></vxeTree>

  </div>
</template>

<style scoped>
.container {
  width: 500px;
}
</style>
