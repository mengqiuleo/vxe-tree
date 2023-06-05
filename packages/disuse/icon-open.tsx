// export const IconOpen = (): JSX.Element => (
//   <svg
//     width="16px"
//     height="16px"
//     viewBox="0 0 16 16"
//     version="1.1"
//     xmlns="http://www.w3.org/2000/svg"
//     class="svg-icon svg-icon-close"
//   >
//     <g stroke-width="1" fill="none" fill-rule="evenodd">
//       <rect x="0.5" y="0.5" width="15" height="15" rx="2" stroke="#90a4b7"></rect>
//       <rect x="4" y="7" width="8" height="2" fill="#90a4b7"></rect>
//     </g>
//   </svg>
// );

import { defineComponent } from 'vue'
export const IconOpen = defineComponent({
  name: 'IconOpen',
  props: {
    strokeWidth: {
      type: Number,
      default: 1.5,
    },
  },
  render() {
    return (
      <svg
        width="16px"
        height="16px"
        viewBox="0 0 16 16"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        class="svg-icon svg-icon-close"
      >
        <g stroke-width="1" fill="none" fill-rule="evenodd">
          <rect x="0.5" y="0.5" width="15" height="15" rx="2" stroke="#90a4b7"></rect>
          <rect x="4" y="7" width="8" height="2" fill="#90a4b7"></rect>
        </g>
      </svg>
    )
  },
})
