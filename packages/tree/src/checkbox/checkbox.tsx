import { defineComponent, SetupContext, StyleValue } from 'vue';
import { checkboxProps, CheckboxProps } from './checkbox-types';
import { useNamespace } from '../shared/use-namespace';
import { useCheckbox } from './use-checkbox';
import './checkbox.scss';

export default defineComponent({
  name: 'DCheckbox',
  props: checkboxProps,
  emits: ['change', 'update:checked', 'update:modelValue'],
  // @ts-ignore
  setup(props: CheckboxProps, ctx: SetupContext) {
    const ns = useNamespace('checkbox');
    const {
      mergedChecked,
      handleClick,
    } = useCheckbox(props, ctx);

    return () => {
      // const wrapperCls = {
      //   [ns.e('column-margin')]: 'column',
      // };
      const wrapperStyle: StyleValue | undefined = [];
      const checkboxCls = {
        [ns.b()]: true,
        active: mergedChecked.value,
        'half-checked': props.halfChecked,
        disabled: props.disabled,
        unchecked: !mergedChecked.value,
      };

      const bgImgStyle =
        (props.color && props.halfChecked) || props.color ? `linear-gradient(${props.color}, ${props.color})` : '';
      const spanStyle = [
        `border-color:${(props.color|| props.halfChecked) && props.color ? props.color : ''}`,
        `background-image:${bgImgStyle}`,
        `background-color:${props.color && props.halfChecked ? props.color : ''}`,
      ];
      const spanCls = {
        [ns.e('material')]: true,
        'custom-color': props.color,
        [ns.m('no-label')]: !props.label && !ctx.slots.default,
        [ns.m('no-animation')]: !props.showAnimation,
        [ns.e('default-background')]: !props.halfChecked,
      };
      const polygonCls = {
        [ns.e('tick')]: true,
        [ns.m('no-animation')]: !props.showAnimation,
      };
      const labelCls = {
        [ns.m('md')]: 'md',
        [ns.m('bordered')]: props.border
      };

      return (
        <div  style={wrapperStyle}>
          <div class={checkboxCls}>
            <label onClick={handleClick} class={labelCls} style={{ width: 'auto' }}>
              <span style={spanStyle} class={spanCls}>
                <span class={ns.e('halfchecked-bg')}></span>
                <svg viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" class={ns.e('tick-wrap')}>
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <polygon
                      fill-rule="nonzero"
                      points="5.17391304 6.56521739 7.7173913 9.10869565 11.826087 5 13 6.17391304 7.7173913 11.4565217 4 7.73913043"
                      class={polygonCls}></polygon>
                  </g>
                </svg>
              </span>
            </label>
          </div>
        </div>
      );
    };
  },
});
