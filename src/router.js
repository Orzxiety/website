import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: () => import('./views/IndexView.vue')
        },
        {
            path: '/:pathMatch(.*)',
            redirect: '/'
        }
    ]
})

export default router