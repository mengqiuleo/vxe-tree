<template>
  <vxe-tree :data="data" ref="treeRef" operate @select-change="selectChange"></vxe-tree>
  <el-button type="primary" size="small" variant="solid" @click="addNode">Add</el-button>
  <el-button size="small"  @click="deleteNode">Delete</el-button>
</template>
<script setup lang="ts">
import { ElButton } from 'element-plus';
import { ref } from 'vue';

const treeRef = ref();
const selectedNode = ref();
const data = ref([
  {
    label: 'Parent node 1',
    id: 'node-1',
    children: [
      {
        label: 'Leaf node 1-1',
        id: 'node-1-1',
        children: [{ label: 'Leaf node 1-1-1', id: 'node-1-1-1' }],
      },
      { label: 'Leaf node 1-2', id: 'node-1-2' },
    ],
  },
  { label: 'Parent node 2', id: 'node-2' },
]);

const addNode = () => {
  if (!selectedNode.value) {
    return;
  }
  const childs = treeRef.value.treeFactory.getChildren(selectedNode.value);
  let labelName = 'new node';
  if (!childs || childs.length === 0) {
    labelName = selectedNode.value.label + '-1';
  } else if (childs.length > 0) {
    labelName = selectedNode.value.label + `-${childs.length + 1}`;
  }
  if (labelName.startsWith('Parent')) {
    labelName = labelName.replace('Parent', 'Leaf');
  }
  treeRef.value.treeFactory.insertBefore(selectedNode.value, { label: labelName });
};

const deleteNode = () => {
  if (!selectedNode.value) {
    return;
  }
  treeRef.value.treeFactory.removeNode(selectedNode.value);
};

const selectChange = (selected) => {
  selectedNode.value = selected;
};
</script>