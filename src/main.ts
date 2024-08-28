import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'

// import Manage from './views/Manage.vue'

import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Signin from './views/Signin.vue'
import Search from './views/Search.vue'



const routes =[
    {
        path: '/',
        name: 'Signin',
        component: Signin,
        meta: {
            hideNavbar: true
        }
    },
    // {
    //     path: '/manage',
    //     name: 'Manage',
    //     component: Manage
    // },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            hideNavbar: true
        }
    },
    {
        path: '/search',
        name: 'Search',
        component: Search
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
