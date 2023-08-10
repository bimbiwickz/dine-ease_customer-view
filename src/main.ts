import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { createRouter, createWebHistory} from 'vue-router';


import App from './App.vue'
import Home from './components/Home.vue' 
import SignUp from './components/SignUp.vue'
import ManagerHome from './components/Manager/ManagerHome.vue'
import AcceptOrder from './components/Manager/acceptOrder.vue'
import Login from './components/login.vue'

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/signup',
        component: SignUp, 
    },
    {
        path: '/login',
        component: Login, 
    },
    {
        path:'/managerhome',
        component: ManagerHome
    },
    {
        path: '/accept-order/', // Dynamic parameter ':orderNo'
        name: 'Orders',
        component: AcceptOrder,
      },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

const app = createApp(App)
app.use(router);
app.use(createPinia())

app.mount('#app')
