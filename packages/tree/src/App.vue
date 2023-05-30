<script setup lang="ts">
import { ref } from 'vue';
import vxeTree from './vxe-tree/tree';

const data = ref([
  {
    label: 'docs',
    id: 'docs',
    level: 1
  },
  {
    label: 'packages',
    id: 'packages',
    level: 1
  },
  {
    label: 'scripts',
    id: 'scripts',
    expanded: true,
    level: 2
  },
  {
    label: 'pnpm-workspace.yaml',
    id: 'pnpm-workspace.yaml',
    level: 1
  }
])

</script>

<template>
  <div>
    <vxeTree :data="data" />
  </div>
</template>

<style scoped>
</style>
