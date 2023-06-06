<script setup>
import contextMenu from 'exam/tree/contextMenu.vue'
</script>

# 右键菜单 <el-badge value="todo" type='warning'></el-badge> 

通过 `show-contextMenu` 属性开启右键菜单。
同时 `node-contextmenu` 方法监听右键事件。

TODO: 右键菜单无法关闭，另外菜单显示位置有问题

::: code tree/contextMenu
<contextMenu></contextMenu>
:::