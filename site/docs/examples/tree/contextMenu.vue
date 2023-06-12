<template>
  <vxe-tree :data="data" check :show-contextMenu="true" @node-contextmenu="contextMenu">
    <template #contextmenu="{ nodeData }">
      <!-- <div>
        {{ nodeData.label }}
      </div> -->
      <el-dropdown trigger="contextmenu">
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item>Action 4</el-dropdown-item>
            <el-dropdown-item>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </template>
  </vxe-tree>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ElDropdown, ElDropdownItem, ElDropdownMenu, ElMessage } from 'element-plus'

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
  ElMessage({
    message: node.label,
    type: 'success'
  })
}
</script>