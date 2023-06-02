import { reactive, computed } from 'vue';
import type { Ref } from 'vue';
import type { TreeProps } from '../tree-types';
import type { DragState, IUseDraggable, IDropNode, IInnerTreeNode, ITreeNode, IDropType } from './use-tree-types';
import { cloneDeep } from 'lodash';
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
      findDragAndDropNode(cloneData);
      if (currentDragNode && currentDropNode && currentDropType) {
        const cloneDrapNode = Object.assign({}, currentDragNode.target[currentDragNode.index]);//备份当前克隆节点
        if (currentDropType === 'dropPrev') {
          currentDropNode.target.splice(currentDropNode.index, 0, cloneDrapNode);
        } else if (currentDropType === 'dropNext') {
          currentDropNode.target.splice(currentDropNode.index + 1, 0, cloneDrapNode);
        } else if (currentDropType === 'dropInner') {
          const children = currentDropNode.target[currentDropNode.index].children;
          if (Array.isArray(children)) {
            children.unshift(cloneDrapNode);
          } else {
            currentDropNode.target[currentDropNode.index].children = [cloneDrapNode];
          }
        }
        const targetIndex = currentDragNode.target.indexOf(currentDragNode.item);
        if (targetIndex !== -1) {
          currentDragNode.target.splice(targetIndex, 1);
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
        if (typeof props.dragdrop === 'object') {
          curDropType = props.dragdrop;
        } else if (props.dragdrop === true) {
          curDropType = { dropInner: true };
        }
        const { dropPrev, dropNext, dropInner } = curDropType;

        let innerDropType: DragState['dropType'];

        const prevPercent = dropPrev ? (dropInner ? 0.25 : dropNext ? 0.45 : 1) : -1;
        const nextPercent = dropNext ? (dropInner ? 0.75 : dropPrev ? 0.55 : 0) : 1;
        const currentTarget = event.currentTarget as HTMLElement | null;
        const targetPosition = currentTarget?.getBoundingClientRect();
        const distance = event.clientY - (targetPosition?.top || 0);

        if (distance < (targetPosition?.height || 0) * prevPercent) {
          innerDropType = 'dropPrev';
        } else if (distance > (targetPosition?.height || 0) * nextPercent) {
          innerDropType = 'dropNext';
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
              classList.add(dropTypeMap[innerDropType]);
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
              result = formatBasicTree(result);
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

