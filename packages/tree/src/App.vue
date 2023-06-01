<script setup lang="ts">
import { ref, watch } from 'vue';
import vxeTree from './vxe-tree/tree';
// import checkbox from './checkbox/checkbox'

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

</script>

<template>
  <div class="container">
    <vxeTree :data="data"/>

    <!-- <checkbox /> -->
  </div>
</template>

<style scoped>
</style>
