# 快速开始

本节将介绍如何在项目中使用 vxe-tree。


## 引入


```ts
// main.ts
import vxeTree from 'vxe-tree';

//import the styles
import 'vxe-tree/dist/index.css';

Vue.use(vxeTree);
```

增加 ts 的类型声明文件:
```ts
declare module 'vxe-tree'
```

## 使用
```vue
<vxe-tree :data="data" />
```
