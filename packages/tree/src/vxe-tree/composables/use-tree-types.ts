import type { ComputedRef, Ref } from 'vue';

// 外部数据结构先只考虑嵌套结构
export interface ITreeNode {
  label: string;
  id?: string;
  children?: ITreeNode[];

  selected?: boolean;
  checked?: boolean;
  expanded?: boolean;

  disableSelect?: boolean;
  disableCheck?: boolean;
  disableToggle?: boolean;
  isLeaf?: boolean;
  nodeContextMenu?: boolean; 
}

// 内部数据结构使用扁平结构
export interface IInnerTreeNode extends ITreeNode {
  id: string;
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
  nodeContextMenu?: boolean; //右键事件
}

export type valueof<T> = T[keyof T];

export interface IUseCore {
  getLevel: (node: IInnerTreeNode) => number;
  getChildren: (
    node: IInnerTreeNode,
    config?: {
      expanded?: boolean;
      recursive?: boolean;
    }
  ) => IInnerTreeNode[];
  clearNodeMap: () => void;
  getParent: (node: IInnerTreeNode) => IInnerTreeNode;
  getExpendedTree: () => ComputedRef<IInnerTreeNode[]>;
  getIndex: (node: IInnerTreeNode) => number;
  getNode: (node: IInnerTreeNode) => IInnerTreeNode;
  setNodeValue: (node: IInnerTreeNode, key: keyof IInnerTreeNode, value: valueof<IInnerTreeNode>) => void;
  setTree: (newTree: IInnerTreeNode[]) => void;
  getTree: () => IInnerTreeNode[];
}

export interface IUseCheck {
  checkNode: (node: IInnerTreeNode) => void;
  uncheckNode: (node: IInnerTreeNode) => void;
  toggleCheckNode: (node: IInnerTreeNode) => void;
  getCheckedNodes: () => IInnerTreeNode[];
}

export interface IUseDisable {
  disableSelectNode: (node: IInnerTreeNode) => void;
  disableCheckNode: (node: IInnerTreeNode) => void;
  disableToggleNode: (node: IInnerTreeNode) => void;
  enableSelectNode: (node: IInnerTreeNode) => void;
  enableCheckNode: (node: IInnerTreeNode) => void;
  enableToggleNode: (node: IInnerTreeNode) => void;
}

export interface IUseOperate {
  insertBefore: (parentNode: IInnerTreeNode, node: ITreeNode, referenceNode?: IInnerTreeNode) => void;
  removeNode: (node: IInnerTreeNode, config? :{ recursive :boolean }) => void;
  editNode: (node: IInnerTreeNode, label: string) => void;
}

export interface IUseSelect {
  selectNode: (node: IInnerTreeNode) => void;
  deselectNode: (node: IInnerTreeNode) => void;
  toggleSelectNode: (node: IInnerTreeNode) => void;
  getSelectedNode: () => IInnerTreeNode;
}

export interface IUseToggle {
  expandNode: (node: IInnerTreeNode) => void;
  collapseNode: (node: IInnerTreeNode) => void;
  toggleNode: (node: IInnerTreeNode) => void;
  expandAllNodes: () => void;
}

export interface IUseMergeNodes {
  mergeTreeNodes: () => void;
}

export interface IUseLazyLoad {
  lazyLoadNodes: (node: IInnerTreeNode) => void;
}

export interface IUseInitSelectCollection {
  setInitSelectedNode: (node: IInnerTreeNode) => void;
  getInitSelectedNodes: () => IInnerTreeNode[];
  clearInitSelectedNodes: () => void;
}

export interface SearchFilterOption {
  isFilter: boolean; // 是否是过滤节点
  matchKey?: string; // node节点中匹配搜索过滤的字段名
  pattern?: RegExp; // 搜索过滤时匹配的正则表达式
}

export interface IUseSearchFilter {
  virtualListRef: Ref<HTMLElement | undefined>;
  searchTree: (target: string, option: SearchFilterOption) => void;
}

export interface IDropType {
  dropPrev?: boolean;
  dropNext?: boolean;
  dropInner?: boolean;
}

/**
 * 'upward' 表示选中一个节点时，其所有父节点也会自动选中。
 * 'downward' 表示选中一个节点时，其所有子节点也会自动选中。
 * 'both' 表示既有 'upward' 也有 'downward' 的效果，即选中一个节点时，其所有父节点和子节点都会自动选中。
 * 'none' 表示不具备自动选中的效果，选中一个节点只会选中该节点本身，不影响其他节点。
 */
export type ICheckStrategy = 'upward' | 'downward' | 'both' | 'none';

export type ICheck = boolean | ICheckStrategy;

export type IShowLine = boolean;

export type ICheckboxPlaceRight = boolean;

export type IShowContextMenu = boolean | string;

export type IAccordion = boolean | string;

export type IDragdrop = boolean | IDropType;

export type IOperateItem = 'add' | 'delete' | 'edit';

export type IOperate = boolean | IOperateItem | Array<IOperateItem>;

export interface LazyNodeResult {
  treeItems: ITreeNode[];
  node: IInnerTreeNode;
}

export interface DragState {
  dropType?: keyof Required<IDropType>; //拖拽类型，是dropPrev，dropNext，dropInner
  draggingNode?: HTMLElement | null; //正在拖拽的节点，就是html元素
  draggingTreeNode?: IInnerTreeNode | null; //正在交互的数据节点，我们的treenode数据
}

export interface IUseDraggable {
  onDragstart: (event: DragEvent, treeNode: IInnerTreeNode) => void; //拖拽开始， treeNode是我们操作的哪个节点
  onDragover: (event: DragEvent) => void; //晃来晃去，记录相对位置，进入某个节点
  onDragleave: (event: DragEvent) => void; //与 onDragleave 相反，离开某个结点
  onDrop: (event: DragEvent, dropNode: IInnerTreeNode) => void; //拖拽结束
  onDragend: (event: DragEvent) => void; //结束后的清理工作
}

export interface IDropNode {
  target: ITreeNode[];
  index: number;
  item: ITreeNode;
}

export interface IContextMenu {
  nodeContextMenu: (node: IInnerTreeNode) => void;
  closeMenu: (node: IInnerTreeNode) => void;
}

export interface IUseAccordion {
  accordionNode: (node: IInnerTreeNode) =>  void;
}

export type IUseTree = {
  treeData: Ref<IInnerTreeNode[]>;
} & IUseCore &
IUseToggle &
IUseSelect &
IUseCheck &
IUseDisable &
IUseOperate &
IUseMergeNodes &
IUseLazyLoad &
IUseSearchFilter &
IUseDraggable &
IContextMenu &
IUseAccordion;
