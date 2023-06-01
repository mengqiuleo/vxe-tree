import { PropType, ExtractPropTypes, ComputedRef } from 'vue';

type Size = 'lg' | 'md' | 'sm';

const commonProps = {
  name: {
    type: String,
    default: undefined,
  },
  halfChecked: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: undefined,
  },
  showAnimation: {
    type: Boolean,
    default: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  beforeChange: {
    type: Function as PropType<(isChecked: boolean) => boolean | Promise<boolean>>,
    default: undefined,
  },
  size: {
    type: String as PropType<Size>
  },
} as const;

export const checkboxProps = {
  ...commonProps,
  checked: {
    type: Boolean,
    default: false,
  },
  value: {
    type: [Number, String] as PropType<string | number>,
  },
  'onUpdate:checked': {
    type: Function as PropType<(v: boolean) => void>,
    default: undefined,
  },
  onChange: {
    type: Function as PropType<(v: boolean) => void>,
    default: undefined,
  },
  modelValue: {
    type: Boolean,
  },
  'onUpdate:modelValue': {
    type: Function as PropType<(v: boolean) => void>,
  },
  border: {
    type: Boolean,
    default: false,
  },
} as const;

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>;

export type UseCheckboxFn = {
  mergedChecked: ComputedRef<boolean>;
  size: ComputedRef<string>;
  handleClick: (event: Event) => void;
};