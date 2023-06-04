import type { ComponentInternalInstance, VNode } from 'vue';
import { defineComponent, reactive, ref, getCurrentInstance, onMounted, onUpdated, onUnmounted } from 'vue';
import { findDOMNode } from '../utils';
import { resizeObserverProps } from '../virtual-list-types';

interface ResizeObserverState {
  height: number;
  width: number;
  offsetHeight: number;
  offsetWidth: number;
}

//通过监听指定元素的尺寸变化并触发回调函数来响应 DOM 元素的变化
export default defineComponent({
  name: 'ResizeObserver',
  props: resizeObserverProps,
  emits: ['resize'],
  // @ts-ignore
  setup(props, { slots }) {

    const state = reactive<ResizeObserverState>({ //存储被监听元素的属性
      width: 0,
      height: 0,
      offsetHeight: 0,
      offsetWidth: 0,
    });
    const currentElement = ref<Element | null>(null);//存储当前被监听的元素
    const resizeObserver = ref<ResizeObserver | null>(null);
    const destroyObserver = () => {
      if (resizeObserver.value) {
        resizeObserver.value.disconnect();//断开 ResizeObserver 实例与当前元素的绑定关系，
        resizeObserver.value = null;//将 resizeObserver 变量置为空
      }
    };

    //onTriggerResize 函数，该函数是 ResizeObserver 实例的回调函数，在元素尺寸变化时会被自动调用
    const onTriggerResize: ResizeObserverCallback = (entries: ResizeObserverEntry[]) => {
      const { onResize } = props;

      const target = entries[0].target as HTMLElement;//获取目标元素

      const { width, height } = target.getBoundingClientRect();//获取目标元素的位置和大小
      const { offsetWidth, offsetHeight } = target;

      const fixedWidth = Math.floor(width);
      const fixedHeight = Math.floor(height);

      if ( //如果目标元素尺寸发生变化
        state.width !== fixedWidth ||
        state.height !== fixedHeight ||
        state.offsetWidth !== offsetWidth ||
        state.offsetHeight !== offsetHeight
      ) {
        const size = { width: fixedWidth, height: fixedHeight, offsetWidth, offsetHeight };

        Object.assign(state, size);//将尺寸赋给被监听元素，更新被监听元素的尺寸
        if (onResize) {
          Promise.resolve().then(() => {
            onResize(
              {
                ...size,
                offsetWidth,
                offsetHeight,
              },
              target,
            );
          });
        }
      }
    };
    const instance = getCurrentInstance();//获取当前组件实例对象
    const registerObserver = () => { // registerObserver 函数，用于注册 ResizeObserver 实例和监听元素
      const { disabled } = props;
      if (disabled) {
        destroyObserver();
        return;
      }
      //registerObserver 函数会根据当前的 props.disabled 属性值来判断是否需要断开 ResizeObserver 与元素的绑定关系，
      //然后获取当前组件对应的 DOM 元素，并判断元素是否发生了变化。如果当前元素与之前被监听的元素不同，
      //则断开旧元素和 ResizeObserver 实例的绑定关系，并重新将 currentElement 变量设置为新元素。
      //最后，如果当前没有 ResizeObserver 实例且当前元素存在，则创建一个新的 ResizeObserver 实例并绑定到当前元素上
      if (instance) {
        const element = findDOMNode(instance as ComponentInternalInstance & { $el: VNode['el'] }) as Element;
        const elementChanged = element !== currentElement.value;
        const isSupported = window && 'ResizeObserver' in window;
        if (elementChanged) {
          destroyObserver();
          currentElement.value = element;
        }

        if (!resizeObserver.value && element && isSupported) {
          resizeObserver.value = new ResizeObserver(onTriggerResize);
          resizeObserver.value.observe(element);
        }
      }
    };
    onMounted(() => {
      registerObserver();
    });
    onUpdated(() => {
      registerObserver();
    });
    onUnmounted(() => {
      destroyObserver();
    });
    return () => {
      return slots.default?.()[0]; //slots.default?.()[0]，表示渲染其子组件
    };
  }
} as any);
