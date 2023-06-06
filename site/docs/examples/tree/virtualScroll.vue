<template>
  <el-input style="width: 300px"  placeholder="search your node..." v-model="input"  @blur="onSearch(input)" />
  <el-input style="width: 300px; margin-left: 25px" placeholder="filter your node..." v-model="input1" @blur="onSearch1(input1)"/>
  
  <vxe-tree :data="data" :height="300" ref="treeRef"></vxe-tree>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ElInput } from 'element-plus';

const treeRef = ref(null);
const input = ref('')
const input1 = ref('')
const data = ref([
  ...Array.from({ length: 100 }).map((_, index) => ({
    label: 'Parent node ' + index,
    children:
      index % 2 === 0
        ? Array.from({ length: 10 }).map((_, index2) => ({
            label: 'Leaf node ' + index + '-' + index2,
          }))
        : undefined,
  })),
]);

onMounted(() => {
  treeRef.value.treeFactory.expandAllNodes();
});

const onSearch = (value) => {
  treeRef.value.treeFactory.searchTree(value, { isFilter: false });
};
const onSearch1 = (value) => {
  treeRef.value.treeFactory.searchTree(value, { isFilter: true });
};
</script>