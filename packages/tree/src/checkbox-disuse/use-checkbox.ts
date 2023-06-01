import { computed } from 'vue';
import type { SetupContext } from 'vue';
import {
  CheckboxProps,
  UseCheckboxFn,
} from './checkbox-types';

export function useCheckbox(props: CheckboxProps, ctx: SetupContext): UseCheckboxFn {

  const isChecked = computed(() => props.checked || props.modelValue);
  const mergedChecked = computed(() => {
    return isChecked.value;
  });

  const canChange = (checked: boolean) => {
    if (props.disabled) {
      return Promise.resolve(false);
    }

    const beforeChange = props.beforeChange;
    if (beforeChange) {
      const res = beforeChange(checked);
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
    ctx.emit('update:modelValue', current);
    ctx.emit('change', current);
  };
  const handleClick = ($event: Event) => {
    $event.stopPropagation();
    canChange(!isChecked.value).then((res) => res && toggle());
  };

  const size = computed(() => props.size || 'md');


  return {
    mergedChecked,
    handleClick,
    size
  };
}