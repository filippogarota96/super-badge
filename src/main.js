import { createApp } from 'vue'
import App from './App.vue'

import store from './store/index.js';

import {createRouter, createWebHistory} from 'vue-router';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Type',
            component: () => import(/* webpackChunkName: "Type" */ './views/type.vue'),
            props: true
            
        },
        {
            path: '/avatar',
            name: 'Avatar',
            component: () => import(/*webpackChunkName: "avatar" */ './views/avatar.vue'),
            props: true

        },
        {
            path: '/role',
            name: 'Role',
            component: () => import(/*webpackChunkName: "avatar" */ './views/role.vue'),
            props: true
        },
        {
            path: '/data',
            name: 'Data',
            component: () => import(/*webpackChunkName: "data" */ './views/data.vue'),
            props: true
        },
        {
            path: '/print',
            name: 'Print',
            component: () => import(/*webpackChunkName: "print" */ './views/print.vue'),
            props: true
        }

    ]
})



createApp(App)
.use(router)
.use(store)
.mount('#app')
