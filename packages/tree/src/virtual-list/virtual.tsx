import { computed, defineComponent, HTMLAttributes, ref, toRefs, onMounted } from 'vue';
import type { VirtualListProps } from './virtual-list-types';
import { virtualListProps } from './virtual-list-types';
import './virtual-list.scss';

export default defineComponent({
  name: 'DVirtualList',
  props: virtualListProps,
  setup(props: VirtualListProps, { slots }){
    const Component = props.component as keyof HTMLAttributes; //Component是我们视口大小的那个div，相当于那个container，这个也让用户传入，
    const { data, itemHeight } = toRefs(props)
    const containerRef = ref()

    const containerHeight = ref(0) //容器高度
    const visibleCount = computed(() => {
      return Math.ceil(containerHeight.value / itemHeight.value) //可视区域列表元素数量
    })

    const startIndex = ref(0) //起始索引

    const visibleData = computed(() => ( //可视区域的数据
      data.value.slice(startIndex.value, Math.min(startIndex.value + visibleCount.value, data.value.length))
    ))

    onMounted(() => {
      containerHeight.value = containerRef.value.clientHeight
    })

    const offsetY = ref(0) //列表在Y轴的偏移量

    const scrollEvent = (event: UIEvent) => {
      const { scrollTop } = event.target as HTMLElement
      //当 scrollTop 发生变化， 重新计算 startIndex，如果startIndex发生变化，则依赖它的visibleData也发生变化
      startIndex.value = Math.floor(scrollTop / itemHeight.value)
      offsetY.value = scrollTop - (scrollTop % itemHeight.value) // 改变列表元素在Y轴的偏移量
    }


    return () => {
      return (
        <>
          <Component class="vxe-virtual-list__container" ref={containerRef} onScroll={scrollEvent}>
            {/* 数据最终高度，用于展示滚动条 */}
            <div class="vxe-virtual-list__blank" style={{
              height: `${data.value.length * itemHeight.value}px`
            }}></div>

             {/* 真正的数据列表 */}
            <div class="vxe-virtual-list" style={{
              transform: `translate3d(0, ${offsetY}px, 0)`
            }}>
              {
                visibleData.value.map((item) => slots.default?.({item}))
              }
            </div>
          </Component> 
        </>
      )
    }
  }
})