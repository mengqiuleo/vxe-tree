import { computed } from 'vue';
import type { SetupContext } from 'vue';
import {
  CheckboxProps,
  UseCheckboxFn,
} from './checkbox-types';

export function useCheckbox(props: CheckboxProps, ctx: SetupContext): UseCheckboxFn {
  const isChecked = computed(() => props.checked || props.modelValue);//* 绑定 modelValue 属性实现双向数据绑定
  const mergedChecked = computed(() => {
    return  isChecked.value;
  });

  const canChange = (checked: boolean, val: string | undefined) => {
    if (props.disabled) {
      return Promise.resolve(false);
    }

    const beforeChange = props.beforeChange ;
    if (beforeChange) {
      const res = beforeChange(checked, val);
      if (typeof res === 'boolean') {
        return Promise.resolve(res);
      }
      return res;
    }
    return Promise.resolve(true);
  };
  const toggle = () => {
    const current = !isChecked.value;
    ctx.emit('update:checked', current);
    ctx.emit('update:modelValue', current);//* 双向数据绑定事件触发 
    ctx.emit('change', current);
  };
  const handleClick = ($event: Event) => {
    $event.stopPropagation();
    canChange(!isChecked.value, props.label).then((res) => res && toggle());
  };
  return {
    mergedChecked,
    handleClick,
  };
}


