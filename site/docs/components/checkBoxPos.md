<script setup>
import checkBoxPos from 'exam/tree/checkBoxPos.vue'
</script>

# 复选框位置
`vxeTree` 组件默认情况下复选框位于左侧，可以通过 `checkboxPlaceRight` 属性移动到右侧。

注意，需要首先开启 `check` 属性，只使用 `checkboxPlaceRight` 属性无效。
 
::: code tree/checkBoxPos
<checkBoxPos></checkBoxPos>
:::