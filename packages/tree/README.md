# vxeTree
A powerful tree component for Vue3

## Installing
Install with npm:
```
npm install vxe-tree
```
Import in your project:
```js
import vxeTree from 'vxe-tree';

//import the styles
import 'vxe-tree/dist/index.css';

Vue.use(vxeTree);
```
Add .d.ts file:
```js
declare module 'vxe-tree'
```

## Features
- Lazy-loading 
- Checkbox selection
- Disabled and Default state
- Custom icons
- Search filtering
- Virtual scrolling
- Drag and drop functionality
- Action buttons

Please refer to the documentation for specific usage

## Theme customization
After introducing the default styles, introduce your own styles
```js
:root {
  --vxe-brand: red; //checkBox style
  --vxe-list-item-selected-bg: blue; //selected style
  --vxe-list-item-hover-bg: yellow; //hover style
}
```


## License
MIT License © 2023 [mengqiuleo](https://github.com/mengqiuleo)