# Tree 事件

| 事件名        | 回调参数                   | 说明                                         | 跳转 Demo                 |
| :------------ | :------------------------- | :------------------------------------------- | :------------------------ |
| toggle-change | `Function(node)`           | 节点展开/收起的回调事件，返回选中的节点对象  | [可勾选](/components/check)         |
| check-change  | `Function(node)`           | 节点勾选的回调事件，返回选中的节点对象       | [可勾选](/components/check)         |
| select-change | `Function(node)`           | 节点选中的回调事件，返回选中的节点对象       | [可勾选](/components/check)         |
| node-click    | `Function(node)`           | 节点点击事件，返回点击的节点对象             | [可勾选](/components/check)         |
| lazy-node     | `Function(node, callback)` | 节点懒加载事件，返回点击的节点对象及回调函数 | [节点懒加载](/components/lazyLoad) |
| node-contextMenu     | `Function(node)` | 节点右键点击事件，返回点击的节点对象 | [节点右键菜单](/components/contextMenu) |
