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

const contextMenu = (node: any) => {
  console.log('contextMenu', node)
}

</script>

<template>
  <div class="container">
    <vxeTree class="mb-2" :data="data" check :show-contextMenu="true" @node-contextmenu="contextMenu"   @toggle-change="toggleChange" :dragdrop="{ dropPrev: true, dropNext: true, dropInner: true }">
      <template #contextmenu="{ nodeData }">
        <div  class="menu">
          <div>{{ nodeData.label }}</div>
          <div>{{ nodeData.id  }}</div>
          <div>delete</div>
        </div>
      </template>
    </vxeTree>

  </div>
</template>

<style scoped>
.container {
  width: 500px;
}
.menu{
  background-color: #dfe1e6;
  width: 100px;
  height: 80px;
  border-radius: 4px;
}
</style>
