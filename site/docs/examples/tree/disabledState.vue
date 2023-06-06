<template>
  <vxe-tree :data="data" check></vxe-tree>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const data = ref([
  {
    label: 'Parent node 1',
    expanded: true,
    children: [
      {
        label: 'Parent node 1-1',
        disableToggle: true,
        disableSelect: true,
        disableCheck: true,
        children: [{ label: 'Leaf node 1-1-1' }],
      },
      {
        label: 'Leaf node 1-2',
        disableCheck: true,
      },
    ],
  },
  {
    label: 'Leaf node 2',
    disableSelect: true,
  },
]);

</script>