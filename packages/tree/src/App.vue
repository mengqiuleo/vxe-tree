<script setup lang="ts">
import { onMounted, ref } from 'vue';
import vxeTree from './vxe-tree/tree';

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

// const contextMenu = (node: any) => {
//   console.log('contextMenu', node)
// }
const treeRef = ref(null);
// onMounted(() => {
//   treeRef.value.treeFactory.expandAllNodes();
// });

</script>

<template>
  <div class="container">
    <vxeTree class="mb-2" :data="data" accordion ref="treeRef">
    </vxeTree>

  </div>
</template>

<style scoped>
.container {
  width: 500px;
}
</style>
