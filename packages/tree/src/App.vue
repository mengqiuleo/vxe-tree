<script setup lang="ts">
import { onMounted, ref } from 'vue';
import vxeTree from './vxe-tree/tree';

const treeRef = ref(null);
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

</script>

<template>
  <div class="container">
    <vxeTree :data="data" :height="300" ref="treeRef">
    </vxeTree>

  </div>
</template>

<style scoped lang="scss">
.container {
  width: 500px;
}
</style>
