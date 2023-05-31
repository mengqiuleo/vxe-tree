<script setup lang="ts">
import { ref, watch } from 'vue';
import vxeTree from './vxe-tree/tree';
// import checkbox from './checkbox/checkbox'

const openCheck = ref(true);
const checkStrategy = ref(['both', 'downward', 'upward', 'none']);
const currentStrategy = ref('both');

const data = ref([
  {
    label: 'Parent node 1',
    children: [
      {
        label: 'Parent node 1-1',
        children: [{ label: 'Leaf node 1-1-1' }, { label: 'Leaf node 1-1-2' }],
      },
      { label: 'Leaf node 1-2' },
    ],
  },
  { label: 'Leaf node 2' },
]);

watch(openCheck, (newVal) => {
  if (newVal === false) {
    currentStrategy.value = false;
  } else {
    currentStrategy.value = 'both';

    data.value = [
      {
        label: 'Parent node 1',
        children: [
          {
            label: 'Parent node 1-1',
            children: [{ label: 'Leaf node 1-1-1' }, { label: 'Leaf node 1-1-2' }],
          },
          { label: 'Leaf node 1-2' },
        ],
      },
      { label: 'Leaf node 2' },
    ];
  }
});

const toggleChange = (node) => {
  console.log('toggleChange node:', node);
};

const checkChange = (node) => {
  console.log('checkChange node:', node);
};

const selectChange = (node) => {
  console.log('selectChange node:', node);
};

const nodeClick = (node) => {
  console.log('nodeClick node:', node);
};

</script>

<template>
  <div class="container">
    <vxeTree :data="data"
    :check="currentStrategy"
    @toggle-change="toggleChange"
    @check-change="checkChange"
    @select-change="selectChange"
    @node-click="nodeClick"/>

    <!-- <checkbox /> -->
  </div>
</template>

<style scoped>
.container {
  widows: 500px;
}
</style>
