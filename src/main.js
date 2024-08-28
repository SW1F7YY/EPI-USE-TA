"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var vue_router_1 = require("vue-router");
require("./style.css");
var App_vue_1 = require("./App.vue");
// import Manage from './views/Manage.vue'
var Home_vue_1 = require("./views/Home.vue");
var Login_vue_1 = require("./views/Login.vue");
var Signin_vue_1 = require("./views/Signin.vue");
var Search_vue_1 = require("./views/Search.vue");
var routes = [
    {
        path: '/',
        name: 'Signin',
        component: Signin_vue_1.default,
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
        component: Home_vue_1.default
    },
    {
        path: '/login',
        name: 'Login',
        component: Login_vue_1.default,
        meta: {
            hideNavbar: true
        }
    },
    {
        path: '/search',
        name: 'Search',
        component: Search_vue_1.default
    }
];
var router = (0, vue_router_1.createRouter)({
    history: (0, vue_router_1.createWebHistory)(),
    routes: routes
});
(0, vue_1.createApp)(App_vue_1.default).use(router).mount('#app');
