<script setup>
import accordion from 'exam/tree/accordion.vue'
</script>

# 手风琴模式
同一级的节点，每次只能展开一个。
可通过 `accordion` 属性开启手风琴模式。

::: code tree/accordion
TODO

大量采用 hooks 写法，导致上下文割裂，我不知道怎么把 node 数据传给 getExpendedTree 函数。
:::