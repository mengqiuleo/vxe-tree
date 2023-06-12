import { reactive, computed } from 'vue';
import type { Ref } from 'vue';
import type { TreeProps } from '../tree-types';
import type { DragState, IUseDraggable, IDropNode, IInnerTreeNode, ITreeNode, IDropType } from './use-tree-types';
import { cloneDeep } from 'lodash-es';
import { useNamespace } from '../../shared/use-namespace';
import { formatBasicTree } from '../utils';

const ns = useNamespace('tree');

const dropTypeMap = {
  dropPrev: ns.em('node', 'drop-prev'),
  dropNext: ns.em('node', 'drop-next'),
  dropInner: ns.em('node', 'drop-inner'),
};

export function useDragdrop(props: TreeProps, data: Ref<IInnerTreeNode[]>) {
  return function useDragdropFn(): IUseDraggable {
    const dragState = reactive<DragState>({
      dropType: undefined,//拖拽类型，是dropPrev，dropNext，dropInner
      draggingNode: null,//正在拖拽的节点，就是html元素
      draggingTreeNode: null,//正在交互的数据节点，我们的treenode数据
    });

    const treeIdMapValue = computed<Record<string | number, IInnerTreeNode>>(() => {
      return data.value.reduce((acc, cur) => ({
        ...acc, [cur.id]: cur,
      }), {});
    });

    const checkIsParent = (childNodeId: number | string, parentNodeId: number | string): boolean => {
      const realParentId = treeIdMapValue.value[childNodeId]?.parentId;
      if (realParentId === parentNodeId) {
        return true;
      } else if (realParentId !== undefined) {
        return checkIsParent(realParentId, parentNodeId);
      } else {
        return false;
      }
    };

    const removeDraggingStyle = (target: HTMLElement | null) => {
      target
        ?.classList
        .remove(...Object.values(dropTypeMap));
    };

    //拖拽时真正处理数据的地方：参数一：拖拽节点，参数二：释放节点（目标节点）
    const handlerDropData = (dragNodeId: string | number, dropNodeId: string | number, currentDropType?: string) => {
      const cloneData = cloneDeep(data.value);//将所有的节点数据备份，我们需要找到拖拽节点和目标接节点，因为有可能用户把拖拽节点扔出去了
      let currentDragNode: IDropNode | undefined;
      let currentDropNode: IDropNode | undefined;
      const findDragAndDropNode = (curr: ITreeNode[]) => {
        if (!Array.isArray(curr)) {
          return;
        }
        curr.every((item, index) => {
          if (currentDragNode && currentDropNode) {
            return false;
          }
          if (item.id === dragNodeId) {
            currentDragNode = { target: curr, index, item };
          } else if (item.id === dropNodeId) {
            currentDropNode = { target: curr, index, item };
          }
          if (!currentDragNode || !currentDropNode) {
            Array.isArray(item.children) && findDragAndDropNode(item.children);
          }
          return true;
        });
      };
      findDragAndDropNode(cloneData);//找到拖拽节点和目标节点
      if (currentDragNode && currentDropNode && currentDropType) {
        const cloneDragNode = Object.assign({}, currentDragNode.target[currentDragNode.index]);//备份当前克隆节点
        if (currentDropType === 'dropPrev') {
          currentDropNode.target.splice(currentDropNode.index, 0, cloneDragNode);
        } else if (currentDropType === 'dropNext') {
          currentDropNode.target.splice(currentDropNode.index + 1, 0, cloneDragNode);
        } else if (currentDropType === 'dropInner') {
          const children = currentDropNode.target[currentDropNode.index].children;//获取当前放置节点的所有子节点
          if (Array.isArray(children)) {
            children.unshift(cloneDragNode);//把drag节点插入
          } else {
            currentDropNode.target[currentDropNode.index].children = [cloneDragNode];//放置节点原来是一个叶子节点
          }
        }
        const targetIndex = currentDragNode.target.indexOf(currentDragNode.item);
        if (targetIndex !== -1) {
          currentDragNode.target.splice(targetIndex, 1);//找到拖拽节点，并从原来的位置上删除
        }
      }

      return cloneData;
    };

    const clearDragDropInfo = () => {
      dragState.dropType = undefined;
      dragState.draggingNode = null;
      dragState.draggingTreeNode = null;
    };

    //* 1. 拖拽开始
    const onDragstart = (event: DragEvent, treeNode: IInnerTreeNode): void => {
      event.stopPropagation();
      dragState.draggingNode = event.target as HTMLElement | null; //记录信息，记录拖拽节点
      dragState.draggingTreeNode = treeNode;
      const treeInfo = {
        type: 'tree-node',
        nodeId: treeNode.id,
      };
      // 将正在拖拽的数据节点存入 dataTransfer（主要是存 id）, 未来需要在 drop 的时候取出
      event.dataTransfer?.setData('Text', JSON.stringify(treeInfo));
    };

    // onDragover 和 onDragleave 用来判断当前的拖拽类型是什么：比如是放在前面、后面、里面
    //根据目标元素的位置和拖动行为，在目标元素上添加相应的样式以及设置拖放的效果
    const onDragover = (event: DragEvent): void => {
      event.preventDefault();
      event.stopPropagation();
      if (!dragState.draggingNode) { return; }

      if (props.dragdrop) {

        if (event.dataTransfer) {
          event.dataTransfer.dropEffect = 'move';
        }

        if (!data) {
          return;
        }
        let curDropType: IDropType = {};
        if (typeof props.dragdrop === 'object') { //如果用户传入的是对象
          curDropType = props.dragdrop;//设置插入到前面、后面、里面
        } else if (props.dragdrop === true) { //如果是布尔值
          curDropType = { dropInner: true }; //直接设置插入到子节点
        }
        const { dropPrev, dropNext, dropInner } = curDropType;

        let innerDropType: DragState['dropType'];//存储当前拖放目标的位置类型

        //计算出前面插入位置和后面插入位置的阈值，根据这些阈值判断当前拖动节点应该插入到目标节点的哪个位置。
        const prevPercent = dropPrev ? (dropInner ? 0.25 : dropNext ? 0.45 : 1) : -1;//如果三个都同意，0.25
        const nextPercent = dropNext ? (dropInner ? 0.75 : dropPrev ? 0.55 : 0) : 1;//同上，0.75
        const currentTarget = event.currentTarget as HTMLElement | null; //获取鼠标目标元素
        const targetPosition = currentTarget?.getBoundingClientRect(); //* targetPosition.top 指当期目标节点的高度
        const distance = event.clientY - (targetPosition?.top || 0);//计算出鼠标距离目标元素顶部的距离
        //* event.clientY 是鼠标的高度，越往下值越大，都是正值

        //通过比较鼠标位置和目标元素的阈值，确定当前拖动节点应该插入到目标节点的哪个位置类型（前插、后插或内部插入）
        if (distance < (targetPosition?.height || 0) * prevPercent) {
          innerDropType = 'dropPrev';//dropPrev其实是指自己的前面
        } else if (distance > (targetPosition?.height || 0) * nextPercent) {
          innerDropType = 'dropNext';//指的是上一个节点
        } else if (dropInner) {
          innerDropType = 'dropInner';
        } else {
          innerDropType = undefined;
        }
        if (innerDropType) {
          const classList = currentTarget?.classList;
          if (classList) {
            if (!classList.contains(dropTypeMap[innerDropType])) {
              removeDraggingStyle(currentTarget);
              classList.add(dropTypeMap[innerDropType]);//* 动态添加class
            }
          }
        } else {
          removeDraggingStyle(currentTarget);
        }
        dragState.dropType = innerDropType;
      }
    };

    const onDragleave = (event: DragEvent): void => {
      event.stopPropagation();
      if (!dragState.draggingNode) { return; }
      removeDraggingStyle(event.currentTarget as HTMLElement | null);
    };

    //* 2. 拖拽释放
    const onDrop = (event: DragEvent, dropNode: IInnerTreeNode): void => {
      event.preventDefault();
      event.stopPropagation();
      removeDraggingStyle(event.currentTarget as HTMLElement | null);
      if (!dragState.draggingNode) { return; }
      if (!props.dragdrop) { return; }

      // 获取正在拖拽的节点信息，刚才在 onDragstart 中存了
      const treeInfoStr = event.dataTransfer?.getData('Text');
      if (treeInfoStr) {
        try {
          const treeInfo = JSON.parse(treeInfoStr);
          if (typeof treeInfo === 'object' && treeInfo.type === 'tree-node') {
            const dragNodeId = treeInfo.nodeId;//我们拖拽的节点
            const isParent = checkIsParent(dropNode.id, dragNodeId);
            if (dragNodeId === dropNode.id || isParent) { //判断释放节点是否是拖拽节点的子节点（也就是说我们把一个父节点放到了它的子节点中），这是不合法的，或者是同一节点，相当于没有拖拽，也不行的
              return;
            }
            if (dragState.dropType) {
              let result = handlerDropData(dragNodeId, dropNode.id, dragState.dropType);
              result = formatBasicTree(result); //*拖拽递归处理，如果拖拽的当前节点存在子节点，那么所有子节点也需要拖拽
              data.value = result;
            }
          }
        } catch (e) {
          console.error(e);
        }
        clearDragDropInfo();
      }
    };

    //清理工作，不用理会
    const onDragend = (event: DragEvent) => {
      event.preventDefault();
      event.stopPropagation();
      clearDragDropInfo();
    };

    return {
      onDragstart,
      onDragover,
      onDragleave,
      onDrop,
      onDragend,
    };
  };
}

