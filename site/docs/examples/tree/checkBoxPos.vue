<template>
  <vxe-tree :data="data" check="none" :checkboxPlaceRight="true" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

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