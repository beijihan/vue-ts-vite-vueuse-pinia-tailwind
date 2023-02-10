import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import router from './router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


import App from './App.vue'

createApp(App).use(router).use(createPinia().use(piniaPluginPersistedstate)).use(ElementPlus).mount('#app')
import '@/assets/css/index.scss'
