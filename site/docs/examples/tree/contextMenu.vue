<template>
  <vxe-tree :data="data" check :show-contextMenu="true" @node-contextmenu="contextMenu">
    <template #contextmenu="{ nodeData }">
      <div>
        {{ nodeData.label }}
      </div>
    </template>
  </vxe-tree>
</template>

<script setup lang="ts">
import { ref } from 'vue';

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

const contextMenu = (node) => {
  console.log(node)
}
</script>