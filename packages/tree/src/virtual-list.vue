<!-- 这里是对虚拟滚动学习 -->
<script setup lang="ts">
import { ref, computed } from 'vue';

const containerHeight = 300 //容器高度
const itemHeight = 24 //列表项高度
const visibleCount = Math.ceil(containerHeight / itemHeight) //可视区域列表元素数量

const totalCount = 1000 //列表项总数，一共有多少条数据
const data = ref(
  Array.from({ length: totalCount }).map((_, index) => ({value: index}))
)

const startIndex = ref(0) //起始索引
const visibleData = computed(() => ( //可视区域的数据
  data.value.slice(startIndex.value, startIndex.value + visibleCount)
))

const offsetY = ref(0) //列表在Y轴的偏移量

const scrollEvent = (event: UIEvent) => {
  const { scrollTop } = event.target as HTMLElement
  //当 scrollTop 发生变化， 重新计算 startIndex，如果startIndex发生变化，则依赖它的visibleData也发生变化
  startIndex.value = Math.floor(scrollTop / itemHeight)
  offsetY.value = scrollTop // 改变列表元素在Y轴的偏移量
}

</script>

<template>
  <div class="v-virtual-list__container" @scroll="scrollEvent">
    <!-- 数据最终高度，用于展示滚动条 -->
    <div class="v-virtual-list__blank" :style="{
      height: `${totalCount * itemHeight}px`
    }"></div>

    <!-- 真正的数据列表 -->
    <div class="v-virtual-list" :style="{
      transform: `translate3d(0, ${offsetY}px, 0)`
    }">
      <div class="item" v-for="(item , index) in visibleData" :key="index">
        Item {{ item.value  }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.v-virtual-list {
  .item {
    height: 24px;
  }

  &__container { //可视区域
    border: 3px solid yellow;
    height: 300px;
    overflow: auto; //这个属性可以出现滚动条
    position: relative;
  }

  &__blank { //这个属性要把container撑开，也就是它要使得出现滚动条
    border: 3px solid purple;
    background-color: purple;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    /* height: 10000px; //上左右都设置了，下面不设置，而是使用了 height，这样就能撑开 height是列表项总高度：itemHeight*itemCount */
  }

  & { //我们让数据列表
    border: 3px solid green;
    background-color: green;
    transform: translate3d(0,0,0);//中间的是列表区域在Y轴的偏移量，会跟随鼠标实时变化
  }
}
</style>
