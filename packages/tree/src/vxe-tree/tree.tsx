import { defineComponent, getCurrentInstance, provide, ref, renderSlot, SetupContext, toRefs, TransitionGroup, useSlots, watch } from 'vue';
import VTreeNode from './components/tree-node';
import VTreeNodeContent from './components/tree-node-content';
import VTreeNodeToggle from './components/tree-node-toggle';
import VTreeNodeLoading from './components/tree-node-loading';
import VirtualList from '../virtual-list/virtual-list';
import {
  useTree,
  useCheck,
  useSelect,
  useOperate,
  useMergeNodes,
  useSearchFilter,
  IInnerTreeNode,
  ICheckStrategy,
  useDragdrop,
  useContextMenu
} from './composables';
import { USE_TREE_TOKEN, NODE_HEIGHT, TREE_INSTANCE } from './const';
import { TreeProps, treeProps } from './tree-types';
import { useNamespace } from '../shared/use-namespace';
import { formatCheckStatus, formatBasicTree } from './utils';
import './tree.scss';

export default defineComponent({
  name: 'vxe-tree',
  props: treeProps,
  emits: ['toggle-change', 'check-change', 'select-change', 'node-click', 'lazy-load', 'node-contextmenu'],
  // @ts-ignore
  setup(props: TreeProps, context: SetupContext) {
    const { slots, expose } = context;
    const treeInstance = getCurrentInstance();
    const { check, dragdrop, operate, showLine, checkboxPlaceRight, showContextMenu } = toRefs(props);
    const ns = useNamespace('tree');
    const normalRef = ref();
    const data = ref<IInnerTreeNode[]>(formatBasicTree(props.data));//# 这里并没有拍平，只是对用户传入的数据进行属性补全

    const userPlugins = [useSelect(), useOperate(), useMergeNodes(), useSearchFilter()];

    const checkOptions = ref<{ checkStrategy: ICheckStrategy }>({ //'upward' | 'downward' | 'both' | 'none';
      checkStrategy: formatCheckStatus(check.value),
    });

    if (check.value) { //如果用户设置节点可选择，增加 useCheck hook
      userPlugins.push(useCheck(checkOptions) as never);
    }

    if (dragdrop.value) { //同上
      userPlugins.push(useDragdrop(props, data) as never);
    }

    if(showContextMenu.value){
      userPlugins.push(useContextMenu() as never);
    }

    const treeFactory = useTree(data.value, userPlugins as never[], context, props);

    // 通过 useTree 拿到的各种方法都是已经传入拍平data的
    // setTree用于监听，当用户改变数据后，重新更新绑定的数据，并且生成新的拍平数据
    //* getExpendedTree 是我们真正展示在页面上的数据，数组拍平还不够，还要根据节点的expanded属性，再选择渲染的节点（useCore返回的,useCore定义了一些常用函数：getNode,getIndex）
    // toggleNode，virtualListRef 都是useToggle返回的， toggleNode是点击节点，切换该节点的展开/收起状态，其实就是控制节点的expanded属性，同时向外emit：toggle-change
    const { setTree, getExpendedTree, toggleNode, virtualListRef } = treeFactory;

    // @ts-ignore
    watch(data, setTree);  // 外部同步内部

    watch(
      () => props.data,
      (newVal) => {
        data.value = formatBasicTree(newVal);
      }
    );

    watch(check, (newVal) => {
      checkOptions.value.checkStrategy = formatCheckStatus(newVal);
    });

    // treeFactory 其实就是所有plugin里的所有方法，并且这些plugin都是已经传入了拍平数据的
    provide(USE_TREE_TOKEN, treeFactory); //提供给每个子节点
    provide(TREE_INSTANCE, treeInstance);

    expose({
      treeFactory,
    });

    const renderDTreeNode = (treeNode: IInnerTreeNode) =>
      slots.default ? (
        renderSlot(useSlots(), 'default', {
          treeFactory: treeFactory,
          nodeData: treeNode,
        })
      ) : (
        <VTreeNode data={treeNode} showLine={showLine.value} showContextMenu={showContextMenu.value}  checkboxPlaceRight={checkboxPlaceRight.value} check={check.value} dragdrop={dragdrop.value} operate={operate.value} key={treeNode.id}>
          {/* 这里是三个具名插槽，通过 content，icon，loading 来控制 */}
          {{
            default: () =>
              slots.content ? renderSlot(useSlots(), 'content', { nodeData: treeNode }) : <VTreeNodeContent data={treeNode} />,
            icon: () =>
              slots.icon ? renderSlot(useSlots(), 'icon', { nodeData: treeNode, toggleNode }) : <VTreeNodeToggle data={treeNode} />,
            loading: () => (slots.loading ? renderSlot(useSlots(), 'loading', { nodeData: treeNode }) : <VTreeNodeLoading />),

            // TODO: 右键菜单
            // contextmenu: () => (slots.contextmenu && showContextMenu.value) && renderSlot(useSlots(), 'contextmenu', {nodeData: treeNode})
          }}
        </VTreeNode>
      );

    return () => {
      const treeData = getExpendedTree?.().value; //只要我们点击折叠展开都会进行计算
      console.log(treeData)
      const vSlotsProps = {
        item: (treeNode: IInnerTreeNode) => renderDTreeNode(treeNode),
      };
      let virtualListProps = {};
      if (props.height) {
        virtualListProps = {
          height: props.height,
          data: treeData,
          itemHeight: NODE_HEIGHT,
        };
      }
      return props.height ? (
        <VirtualList ref={virtualListRef} class={ns.b()} {...virtualListProps} v-slots={vSlotsProps} />
      ) : (
        <div ref={normalRef} class={ns.b()}>
          <TransitionGroup name={ns.m('list')}>{treeData?.map(renderDTreeNode)}</TransitionGroup>
        </div>
      );
    };
  },
});
