<script setup lang="ts">
import { ref } from 'vue';
import vxeTree from './vxe-tree/tree';

const data = ref([
  {
    label: 'docs',
    id: 'docs',
    checked: true
  },
  {
    label: 'packages',
    id: 'packages',
    expanded: true,
    children: [
      {
        label: 'plugin-vue',
        id: 'plugin-vue'
      },
      {
        label: 'vite',
        id: 'vite',
        expanded: true,
        children: [
          {
            label: 'src',
            id: 'src',
            checked: true
          },
          {
            label: 'README.md',
            id: 'README.md',
            children: [
              {
                label: 'index.md',
                id: 'index.md',
                checked: true
              }
            ]
          }
        ]
      },
      {
        label: 'vite1',
        id: 'vite1',
        expanded: true,
        children: [
          {
            label: 'src1',
            id: 'src1'
          },
          {
            label: 'README.md1',
            id: 'README.md1',
            checked: true,
            children: [
              {
                label: 'index.md1',
                id: 'index.md1'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    label: 'scripts',
    id: 'scripts',
    children: [
      {
        label: 'release.ts',
        id: 'release.ts'
      },
      {
        label: 'verifyCommit.ts',
        id: 'verifyCommit.ts'
      }
    ]
  },
  {
    label: 'pnpm-workspace.yaml',
    id: 'pnpm-workspace.yaml'
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
