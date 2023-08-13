import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { createRouter, createWebHistory} from 'vue-router';


import App from './App.vue'
import Home from './components/Home.vue' 
import SignUp from './components/SignUp.vue'
import ManagerHome from './components/Manager/ManagerHome.vue'
import AcceptOrder1 from './components/Manager/orders/acceptOrder1.vue'
import AcceptOrder2 from './components/Manager/orders/acceptOrder2.vue'
import Login from './components/login.vue'
import MgNavBar from './components/NavBar/MgNavBar.vue'


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
        components: {
          default: ManagerHome
        }
    },
    {
        path: '/accept/order-1', // Dynamic parameter ':orderNo'
        name: 'order1',
        component: AcceptOrder1,
    },
    {
        path: '/accept/order-2', // Dynamic parameter ':orderNo'
        name: 'order2',
        component: AcceptOrder2,
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
