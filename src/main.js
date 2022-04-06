import { createApp } from 'vue'
import App from './helper-app.vue'
import store from './vuex/store'
import './assets/styles/styles.scss'

createApp(App).use(store).mount('#app')
