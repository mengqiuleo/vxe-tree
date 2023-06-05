import { createApp } from 'vue'
import App from './App.vue'
import vxeTree from '../dist/index.esm.js'
import '../dist/index.css'

createApp(App).use(vxeTree).mount('#app')
// createApp(App).mount('#app')
