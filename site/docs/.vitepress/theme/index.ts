import Theme from 'vitepress/theme';
import './style/custom.less';
import './style/themes.less';
import './style/dark.less';

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


import vxeCode from '../source-code/vxe-source-code.vue'

import vxeTree from 'vxe-tree';
import 'vxe-tree/dist/index.css';

export default {
  ...Theme,
  // 注册组件
  enhanceApp({app}) {
    app.use(vxeTree)
    app.component("vxeCode", vxeCode);
    app.use(ElementPlus)
  }
};
