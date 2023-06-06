<template>
  <el-row class="mb10">
    <el-input class="mb10" style="width: 300px" placeholder="search your node..." v-model="input"  @blur="onSearch(input)"></el-input>
  </el-row>

  <el-row class="mb10">
    <el-input class="mb10" style="width: 300px" placeholder="filter your node..." v-model="input1" @blur="onSearch1(input1)"></el-input>
  </el-row>
  
  <el-row class="mb10">
    <el-input style="width: 300px" placeholder="filter your node by custom key..." v-model="input2" @blur="onSearch2(input2)"></el-input>
    <span class="ml8">
      <ElTooltip content="使用自定义的属性搜索匹配树节点">
        <el-icon><QuestionFilled /></el-icon>
      </ElTooltip>
    </span>
  </el-row>

  <el-row class="mb10">
    <el-input style="width: 300px" placeholder="filter your node by Regex..." v-model="input3" @blur="onSearch2(input3)"></el-input>
    <span class="ml8">
      <ElTooltip content="使用正则表达式限定搜索范围">
        <el-icon><QuestionFilled /></el-icon>
      </ElTooltip>
    </span>
  </el-row>

  <vxe-tree ref="treeRef" :data="data"></vxe-tree>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ElInput, ElRow, ElTooltip } from 'element-plus';
import { QuestionFilled  } from '@element-plus/icons-vue';

const treeRef = ref();
const input = ref('')
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')

const data = ref([
  {
    label: 'parent node 1',
    customSearchValue: 'a',
  },
  {
    label: 'parent node 2',
    customSearchValue: 'b',
    children: [
      {
        label: 'child node 2-1',
        customSearchValue: 'c',
        children: [
          {
            label: 'child node 2-1-1',
            customSearchValue: 'd',
          },
          {
            label: 'child node 2-1-2',
            customSearchValue: 'e',
          },
        ],
      },
      {
        label: 'child node 2-2',
        customSearchValue: 'f',
        children: [
          {
            label: 'child node 2-2-1',
            customSearchValue: 'g',
          },
          {
            label: 'child node 2-2-2',
            customSearchValue: 'h',
          },
        ],
      },
    ],
  },
  {
    label: 'parent node 3',
    customSearchValue: 'i',
    children: [
      {
        label: 'child node 3-1',
        customSearchValue: 'j',
      },
      {
        label: 'child node 3-2',
        customSearchValue: 'k',
      },
    ],
  },
  {
    label: 'parent node 4',
    customSearchValue: 'l',
    children: [
      {
        label: 'child node 4-1',
        customSearchValue: 'm',
      },
      {
        label: 'child node 4-2',
        customSearchValue: 'n',
      },
    ],
  },
  {
    label: 'parent node 5',
    customSearchValue: 'o',
    children: [
      {
        label: 'child node 5-1',
        customSearchValue: 'p',
      },
      {
        label: 'child node 5-2',
        customSearchValue: 'q',
      },
    ],
  },
]);
const onSearch = (value) => {
  treeRef.value.treeFactory.searchTree(value, { isFilter: false });
};
const onSearch1 = (value) => {
  treeRef.value.treeFactory.searchTree(value, { isFilter: true });
};
const onSearch2 = (value) => {
  treeRef.value.treeFactory.searchTree(value, { isFilter: true, matchKey: 'customSearchValue' });
};
const onSearch3 = (value) => {
  const regex = new RegExp('^' + value + '[\s\S]*');
  treeRef.value.treeFactory.searchTree(value, { isFilter: true, pattern: regex });
};
</script>
<style>
.mb10 {
  margin-bottom: 5px;
}
.ml8 {
  margin-left: 8px;
}
</style>