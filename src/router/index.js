import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', name: 'home', component: () => import('../views/home.vue') },
    { path: '/about/:id', name: 'info2' ,component: () => import('../views/info2.vue') },
]

export default createRouter({
    history: createWebHistory(),
    routes,
})