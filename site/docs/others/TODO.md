# TODO

1. [手风琴模式](/components/accordion): 大量采用 hooks 写法，导致上下文割裂，我不知道怎么把 node 数据传给 getExpendedTree 函数
2. [右键菜单](/components/contextMenu): 菜单无法通过点击空白处来正常关闭，另外菜单布局需要优化
3. [操作按钮](/components/operate): 新增节点后，点击折叠，会自动增加 loading 样式，该问题已解决，下次发包可以看见
4. [操作按钮](/components/operate): 按钮样式问题
5. [操作按钮](/components/operate): 使用插槽，让用户可以传入自定义的节点内容
6. [自定义配色](/components/color): 自定义配色打包部署后失效
7. [右键菜单](/components/contextMenu): 右键事件`node-contextmenu`的文档描述补充
8. [可勾选](/components/check): 希望提供`check`属性的默认值
9. `__test__`: UT 目前还有很多场景没有实现
10. doc: 文档目前还不是很完善，希望: `文档的简易度向 elm 看齐，说明细粒度向 antd 看齐`