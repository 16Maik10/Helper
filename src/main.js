import { createApp } from 'vue'
import App from './helper-app.vue'
import store from './vuex/store'
import './assets/styles/styles.scss'
import router from './router/router'

createApp(App).use(store).use(router).mount('#app')
