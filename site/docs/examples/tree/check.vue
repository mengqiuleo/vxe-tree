<template>
  <div style="height: 28px;">
    <label style="margin-right: 20px;">
      <span style="margin-left: 10px;">开启勾选</span>
      <el-switch v-model="openCheck"></el-switch>
    </label>
    <el-radio-group v-if="openCheck" v-model="currentStrategy" direction="row">
      <el-radio v-for="strategy of checkStrategy" :label="strategy">{{ strategy }}</el-radio>
    </el-radio-group>
  </div>

  <vxe-tree
    :data="data"
    :check="currentStrategy"
    @toggle-change="toggleChange"
    @check-change="checkChange"
    @select-change="selectChange"
    @node-click="nodeClick"
  ></vxe-tree>
</template>

<script setup lang="ts">
import { ElRadioGroup, ElRadio, ElSwitch } from 'element-plus'
import { ref, watch } from 'vue';

const openCheck = ref(true)
const checkStrategy = ref(['both', 'downward', 'upward', 'none']);
const currentStrategy = ref('both')

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