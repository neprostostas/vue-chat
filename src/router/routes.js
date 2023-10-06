import MainLayout from "@/layouts/MainLayout";

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: MainLayout
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;