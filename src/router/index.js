import { createRouter, createWebHistory } from 'vue-router'
import login from "../components/login.vue";
import reg from "../components/register.vue";
import main from "../components/main.vue";
import miku from "../components/goods/miku.vue";
import hyperBody from "../components/goods/hyperBody.vue";
import dusk from "../components/goods/dusk.vue";
import airu from "../components/goods/airu.vue";
import noel from "../components/goods/noel.vue";
import rokixi from "../components/goods/rokixi.vue";

const routes = [
    {
        path: '/',
        name: 'main',
        component: main
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/reg',
        name: 'reg',
        component: reg,
    },
    {
        path: '/miku',
        name: 'miku',
        component: miku
    },
    {
        path: '/hyperBody',
        name: 'hyperBody',
        component: hyperBody
    },
    {
        path: '/dusk',
        name: 'dusk',
        component: dusk
    },
    {
        path: '/airu',
        name: 'airu',
        component: airu
    },
    {
        path: '/noel',
        name: 'noel',
        component: noel
    },
    {
        path: '/rokixi',
        name: 'rokixi',
        component: rokixi
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router