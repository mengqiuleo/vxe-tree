# treeFactory

`treeFactory`是组件内部暴露出来的一些数据和方法，当自定义树结构的时候会用到。

```ts
type TreeFactory = {
  // 扁平化处理后的数据，IInnerTreeNode 见下表
  treeData: Ref<IInnerTreeNode[]>;

  // 获取节点层级
  getLevel: (node: IInnerTreeNode) => number;

  // 获取某个节点的子节点
  getChildren: (
    node: IInnerTreeNode,
    config?: {
      expanded?: boolean; // 是否只从展开了的节点中获取数据
      recursive?: boolean; // 是否需要获取非直接子节点
    }
  ) => IInnerTreeNode[];

  // 获取某个节点的父节点
  getParent: (node: IInnerTreeNode) => IInnerTreeNode;

  // 获取当前是展开状态的节点
  getExpendedTree: () => ComputedRef<IInnerTreeNode[]>;

  // 获取某个节点在扁平化数据结构中的索引
  getIndex: (node: IInnerTreeNode) => number;

  // 设置某个节点的属性值
  setNodeValue: (node: IInnerTreeNode, key: keyof IInnerTreeNode, value: valueof<IInnerTreeNode>) => void;

  // 展开节点，并触发`toggle-change`事件
  expandNode: (node: IInnerTreeNode) => void;

  // 收起节点，并触发`toggle-change`事件
  collapseNode: (node: IInnerTreeNode) => void;

  // 展开/收起节点
  toggleNode: (node: IInnerTreeNode) => void;

  // 展开所有节点
  expandAllNodes: () => void;

  // 单选，并触发`select-change`事件
  selectNode: (node: IInnerTreeNode) => void;

  // 取消单选，并触发`select-change`事件
  deselectNode: (node: IInnerTreeNode) => void;

  // 单选/取消单选，并触发`select-change`事件
  toggleSelectNode: (node: IInnerTreeNode) => void;

  // 获取已单选的节点
  getSelectedNode: () => IInnerTreeNode;

  // 勾选，并触发`check-change`事件
  checkNode: (node: IInnerTreeNode) => void;

  // 取消勾选，并触发`check-change`事件
  uncheckNode: (node: IInnerTreeNode) => void;

  // 勾选/取消勾选，并触发`check-change`事件
  toggleCheckNode: (node: IInnerTreeNode) => void;

  // 获取已勾选的节点
  getCheckedNodes: () => IInnerTreeNode[];

  // 禁用节点单选
  disableSelectNode: (node: IInnerTreeNode) => void;

  // 禁用节点勾选
  disableCheckNode: (node: IInnerTreeNode) => void;

  // 禁用节点展开/收起
  disableToggleNode: (node: IInnerTreeNode) => void;

  // 启用节点单选
  enableSelectNode: (node: IInnerTreeNode) => void;

  // 启用节点勾选
  enableCheckNode: (node: IInnerTreeNode) => void;

  // 启用节点展开/收起
  enableToggleNode: (node: IInnerTreeNode) => void;

  // 当节点只有一个子节点时，合并显示
  mergeTreeNodes: () => void;

  // 懒加载某个节点的子节点
  lazyLoadNodes: (node: IInnerTreeNode) => void;

  // 搜索节点，参数为搜索关键字和搜索配置项，SearchFilterOption 见下表
  searchTree: (target: string, option: SearchFilterOption) => void;
};
```

## IInnerTreeNode

```ts
interface IInnerTreeNode extends ITreeNode {
  level: number;
  idType?: 'random';
  parentId?: string;
  isLeaf?: boolean;
  parentChildNodeCount?: number;
  currentIndex?: number;
  loading?: boolean; // 节点是否显示加载中
  childNodeCount?: number; // 该节点的子节点的数量
  isMatched?: boolean; // 搜索过滤时是否匹配该节点
  childrenMatched?: boolean; // 搜索过滤时是否有子节点存在匹配
  isHide?: boolean; // 过滤后是否不显示该节点
  matchedText?: string; // 节点匹配的文字（需要高亮显示）
}
```

## SearchFilterOption

```ts
interface SearchFilterOption {
  isFilter: boolean; // 是否是过滤节点
  matchKey?: string; // node节点中匹配搜索过滤的字段名
  pattern?: RegExp; // 搜索过滤时匹配的正则表达式
}
```