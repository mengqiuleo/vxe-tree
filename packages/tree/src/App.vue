<script setup lang="ts">
import { ref, watch } from 'vue';
import vxeTree from './vxe-tree/tree';

const data = ref([
  {
    label: 'Parent node 1',
    expanded: true,
    children: [
      {
        label: 'Parent node 1-1',
        children: [{ label: 'Leaf node 1-1-1' }],
      },
      {
        label: 'Leaf node 1-2',
        checked: true,
      },
    ],
  },
  {
    label: 'Leaf node 2',
    selected: true,
  },
]);

</script>

<template>
  <div class="container">
    <vxeTree :data="data" check/>
  </div>
</template>

<style scoped>
</style>
