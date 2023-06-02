import type { ComputedRef, ComponentInternalInstance } from 'vue';
import { ref, computed, defineComponent, inject, renderSlot, toRefs, useSlots } from 'vue';
import { NODE_HEIGHT, TREE_INSTANCE, USE_TREE_TOKEN } from '../const';
import { treeNodeProps, TreeNodeProps } from '../tree-types';
import { IInnerTreeNode, IUseTree, useTreeNode } from '../composables';
import VTreeNodeToggle from './tree-node-toggle';
import VTreeNodeLoading from './tree-node-loading';
import  Checkbox  from '../../checkbox/checkbox';
import VTreeNodeContent from './tree-node-content';
import { useNamespace } from '../../shared/use-namespace';
import { omit } from '../../shared/omit';
import { formatCheckStatus } from '../utils';

export default defineComponent({
  name: 'vxeTreeNode',
  props: treeNodeProps,
  setup(props: TreeNodeProps, { slots }) {

    const { data, check, dragdrop, operate, showLine, checkboxPlaceRight } = toRefs(props);
    console.log('showline', showLine.value)
    const {
      toggleSelectNode,
      toggleCheckNode,
      toggleNode,
      getChildren,
      insertBefore,
      removeNode,
      getNode,
      onDragstart,
      onDragover,
      onDragleave,
      onDrop,
      onDragend,
    } = inject(USE_TREE_TOKEN) as Partial<IUseTree>;
    //inject(USE_TREE_TOKEN) 返回的实际上是一个对象，该对象包含了 IUseTree 接口中定义的一系列方法和属性。而通过使用 Partial<IUseTree>，我们将这些方法和属性都变为可选的，这意味着我们可以只使用其中的某些方法或属性，而不用关心其他未使用的方法或属性是否存在。

    const treeInstance = inject(TREE_INSTANCE) as ComponentInternalInstance | null;
    const ns = useNamespace('tree');

    const { nodeClass, nodeStyle, nodeContentClass, nodeVLineClass, nodeVLineStyles, nodeHLineClass, nodeOperationAreaClass } = useTreeNode(
      data as ComputedRef<IInnerTreeNode>
    );

    const halfChecked = computed(() => {
      if (!data.value?.checked) {
        return false;
      }
      const checkFormat = formatCheckStatus(check.value);//规范用户传入的'upward' | 'downward' | 'both' | 'none'
      if (['upward', 'both'].includes(checkFormat)) {
        const children = getChildren?.(data.value) || [];
        const checkedChildren = children?.filter((item: IInnerTreeNode) => item.checked);
        return checkedChildren.length > 0 && checkedChildren.length < children.length;
      } else {
        return false;
      }
    });

    const checkboxProps = computed(() => {
      return {
        key: data.value?.id,
        disabled: data.value?.disableCheck,
        halfChecked: halfChecked.value,//半选，子节点有被选中的，那父节点就要半选
        modelValue: data.value?.checked,
        'onUpdate:modelValue': () => {
          toggleCheckNode?.(data.value);
        },
        onClick: (event: MouseEvent) => {
          event.stopPropagation();
        },
        color: '#18a058'
      };
    });

    const isShowOperationArea = ref(false);

    // 见名知意：展示操作图标
    const showOperationArea = () => {
      isShowOperationArea.value = true;
    };

    const hideOperationArea = () => {
      isShowOperationArea.value = false;
    };

    return () => {
      let dragdropProps = {};
      if (dragdrop.value && !data.value?.disableSelect) {
        dragdropProps = {
          draggable: true,
          onDragstart: (event: DragEvent) => onDragstart?.(event, data.value),
          onDragover: (event: DragEvent) => onDragover?.(event),
          onDragleave: (event: DragEvent) => onDragleave?.(event),
          onDrop: (event: DragEvent) => onDrop?.(event, data.value),
          onDragend: (event: DragEvent) => onDragend?.(event),
        };
      }
      return (
        <div
          class={nodeClass.value}
          style={nodeStyle.value}
          onMouseenter={showOperationArea}
          onMouseleave={hideOperationArea}
        >
          {/* 连接线 */}
          {showLine.value && nodeVLineStyles.value.map((item) => (
            <span class={nodeVLineClass.value} style={item}></span>
          ))}
          {showLine.value && <span class={nodeHLineClass.value} style={omit(nodeVLineStyles.value[0], ['height', 'top'])}></span>}

          {/* 每个元素 */}
          <div
            class={nodeContentClass.value}
            onClick={() => {
              toggleSelectNode?.(data.value);
              treeInstance?.emit('node-click', data.value);
            }}
            {...dragdropProps}
          >
            {/* 折叠 + 自定义图标：为什么每个节点都要有这个，叶子节点不是没有图标吗？因为叶子节点虽然没有图标，但是需要占位符，保持缩进一致 */}
            {slots.icon ? renderSlot(useSlots(), 'icon', { nodeData: data, toggleNode }) : <VTreeNodeToggle data={data.value} />}
            
            <div class={ns.em('node-content', 'value-wrapper')} style={{ height: `${NODE_HEIGHT}px` }}>
              {(check.value && !checkboxPlaceRight.value) && <Checkbox class={ns.e('checkbox-wrapper')}  {...checkboxProps.value} />}
              {slots.default ? renderSlot(useSlots(), 'default', { nodeData: data }) : <VTreeNodeContent data={data.value} />}
              {getNode?.(data.value)?.loading ? slots.loading ? renderSlot(useSlots(), 'loading') : <VTreeNodeLoading /> : ''}
              {dragdrop.value && (
                <>
                  <div class={ns.em('node', 'drop-top')} />
                  <div class={ns.em('node', 'drop-bottom')} />
                  <div class={ns.em('node', 'drop-left')} />
                  <div class={ns.em('node', 'drop-right')} />
                </>
              )}
            </div>

            {/* 新增或删除： isShowOperationArea值是干嘛的？我们鼠标移到每一个元素身上，就会显示add和delete图标 */}
            {operate.value && isShowOperationArea.value && (
              <div class={nodeOperationAreaClass.value}>
                <button
                  name="add"
                  onClick={() => {
                    insertBefore?.(data.value, { label: 'New node' });
                  }}
                >add</button>
                <button
                  name="delete"
                  onClick={() => {
                    removeNode?.(data.value);
                  }}
                >delete</button>
              </div>
            )}
          

          </div>
          {(check.value && checkboxPlaceRight.value) && <Checkbox class={ns.e('checkbox-wrapper--right')}  {...checkboxProps.value} />}
        </div>
      );
    };
  },
});
