import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import '@/assets/css/index.css'
import App from './App.vue'

createApp(App).use(router).use(createPinia().use(piniaPluginPersistedstate)).use(ElementPlus).mount('#app')
