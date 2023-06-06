# 源码解读

## 目录
项目采用 monorepo 开发


-  components 各个子组件(主要是 treeNode)
- composables 将各个方法、属性的实现使用 hook 抽离，可维护性高

如果需要开发新功能，只需要在 composables 中新建 hook，并且在 `composables/index.ts` 中导出，然后在 `composables/use-tree.ts` 或者 `tree.tsx` 中选择合适的时机注册