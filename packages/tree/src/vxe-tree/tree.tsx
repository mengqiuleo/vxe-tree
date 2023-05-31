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
} from './composables';
import { USE_TREE_TOKEN, NODE_HEIGHT, TREE_INSTANCE } from './const';
import { TreeProps, treeProps } from './tree-types';
import { useNamespace } from '../shared/use-namespace';
import { formatCheckStatus, formatBasicTree } from './utils';
import './tree.scss';

export default defineComponent({
  name: 'vxe-tree',
  props: treeProps,
  emits: ['toggle-change', 'check-change', 'select-change', 'node-click', 'lazy-load'],
  // @ts-ignore
  setup(props: TreeProps, context: SetupContext) {
    const { slots, expose } = context;
    const treeInstance = getCurrentInstance();
    const { check, dragdrop, operate } = toRefs(props);
    const ns = useNamespace('tree');
    const normalRef = ref();
    const data = ref<IInnerTreeNode[]>(formatBasicTree(props.data));//# 这里是否是拍平的？？感觉不是

    const userPlugins = [useSelect(), useOperate(), useMergeNodes(), useSearchFilter()];

    const checkOptions = ref<{ checkStrategy: ICheckStrategy }>({ //'upward' | 'downward' | 'both' | 'none';
      checkStrategy: formatCheckStatus(check.value),
    });

    if (check.value) {
      userPlugins.push(useCheck(checkOptions) as never);
    }

    if (dragdrop.value) {
      userPlugins.push(useDragdrop(props, data) as never);
    }

    const treeFactory = useTree(data.value, userPlugins as never[], context);

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

    provide(USE_TREE_TOKEN, treeFactory);
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
        <VTreeNode data={treeNode} check={check.value} dragdrop={dragdrop.value} operate={operate.value} key={treeNode.id}>
          {{
            default: () =>
              slots.content ? renderSlot(useSlots(), 'content', { nodeData: treeNode }) : <VTreeNodeContent data={treeNode} />,
            icon: () =>
              slots.icon ? renderSlot(useSlots(), 'icon', { nodeData: treeNode, toggleNode }) : <VTreeNodeToggle data={treeNode} />,
            loading: () => (slots.loading ? renderSlot(useSlots(), 'loading', { nodeData: treeNode }) : <VTreeNodeLoading />),
          }}
        </VTreeNode>
      );

    return () => {
      const treeData = getExpendedTree?.().value;
      console.log('拍平的', treeData)
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
