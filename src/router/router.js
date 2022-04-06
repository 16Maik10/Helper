import { createRouter,createWebHistory } from 'vue-router';
import helperForm from '../components/helper-form.vue'
import helperSuccess from '../components/helper-success.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: 'form',
        component: helperForm,
    },
    {
        path: '/result',
        name: 'result',
        component: helperSuccess,
    }
]
})

export default router