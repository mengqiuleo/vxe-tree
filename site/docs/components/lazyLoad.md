<script setup>
import lazyLoad from 'exam/tree/lazyLoad.vue'
</script>

# 节点懒加载

通过设置该节点 `isLeaf` 参数为 `false`, 组件回调 `lazyLoad` 方法实现节点懒加载。


::: code tree/lazyLoad
<lazyLoad></lazyLoad>
:::