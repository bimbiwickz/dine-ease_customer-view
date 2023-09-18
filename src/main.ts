import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { createRouter, createWebHistory } from 'vue-router'
//import type { NavigationGuardNext, RouteLocationNormalized, RouteLocationNormalizedLoaded, RouteRecordName } from 'vue-router';

import { getProfile } from './components/ProfileService'

//Vue.use(Router);

import App from './App.vue'
import Home from './components/Home.vue'
import UserHome from './components/UserHome.vue'
import SignUp from './components/SignUp.vue'
import ManagerHome from './components/Manager/ManagerHome.vue'
import AcceptOrder1 from './components/Manager/orders/acceptOrder1.vue'
import AcceptOrder2 from './components/Manager/orders/acceptOrder2.vue'
import Login from './components/login.vue'
import MgNavBar from './components/NavBar/MgNavBar.vue'
import Menu from './components/Customer/MenuView.vue'
import Cart from './components/Customer/CartView.vue'
import Checkout from './components/Customer/CheckoutView.vue'
import Reservation1 from './components/Manager/reservations/reservation1.vue'
import Reservation2 from './components/Manager/reservations/reservation2.vue'
import UserProfile from './components/Customer/UserProfileDashboard.vue'
import Reservations from './components/Customer/Reservations.vue'
import addFood from './components/Manager/addFood.vue'

export interface globalcomponents {
  BaseInput: typeof import('./components/utils/baseInput.vue')
  BaseActionBtn: typeof import('./components/utils/baseActionBtn.vue')
}
const routes = [
    // {
    //     path: '/baseInput',
    //     component: baseInput,
    //     //meta: { requiresAuth: true },
    // },
    {
        path: '/',
        component: Home,
        //meta: { requiresAuth: true },
    },
    {
        path: '/Home',
        component: UserHome,
        //meta: { requiresAuth: true },
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
        path:'/Home',
        components: {
          default: ManagerHome
        }
    },
    {
        path: '/accept/order-1', // Dynamic parameter ':orderNo'
        //name: 'order1',
        component: AcceptOrder1,
    },
    {
        path: '/accept/order-2', // Dynamic parameter ':orderNo'
        //name: 'order2',
        component: AcceptOrder2,
    },
    {
        path: '/reservation/res-1', // Dynamic parameter ':orderNo'
        name: 'order1',
        component: Reservation1,
    },
    ,
    {
        path: '/customer/MenuView',
        name: 'menu',
        component: Menu,
        props: true,
    },
    {
        path: '/Customer/CartView',
        name: 'cart',
        component: Cart,
        props: true,
    },
    {
        path: '/Customer/CheckoutView',
        name: 'checkout',
        component: Checkout,
        props: true,
    },
    {
        path: '/user-profile',
        component: UserProfile, 
    },
    {
        path: '/reservations',
        component: Reservations, 
    },
    {
        path: '/add-food',
        component: addFood, 
    },
  // {
  //     path: '/baseInput',
  //     component: baseInput,
  //     //meta: { requiresAuth: true },
  // },
  {
    path: '/',
    component: Home
    //meta: { requiresAuth: true },
  },
  {
    path: '/Home',
    component: UserHome
    //meta: { requiresAuth: true },
  },
  {
    path: '/signup',
    component: SignUp
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/managerhome',
    components: {
      default: ManagerHome
    }
  },
  {
    path: '/Home',
    components: {
      default: ManagerHome
    }
  },
  {
    path: '/accept/order-1', // Dynamic parameter ':orderNo'
    //name: 'order1',
    component: AcceptOrder1
  },
  {
    path: '/accept/order-2', // Dynamic parameter ':orderNo'
    //name: 'order2',
    component: AcceptOrder2
  },
  {
    path: '/reservation/res-1', // Dynamic parameter ':orderNo'
    name: 'order1',
    component: Reservation1
  },
  ,
  {
    path: '/customer/MenuView',
    name: 'menu',
    component: Menu,
    props: true
  },
  {
    path: '/Customer/CartView',
    name: 'cart',
    component: Cart,
    props: true
  },
  {
    path: '/Customer/CheckoutView',
    name: 'checkout',
    component: Checkout,
    props: true
  },
  {
    path: '/user-profile',
    component: UserProfile
  },
  {
    path: '/reservations',
    component: Reservations
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

// // Navigation guard to check authentication status
// router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
//   if (to.matched.some((route: RouteRecordRaw) => route.meta.requiresAuth)) {
//     const profile = await getProfile();
//     if (profile) {
//       // User is authenticated, allow access
//       next();
//     } else {
//       // User is not authenticated, redirect to login
//       next('/login');
//     }
//   } else {
//     // Public route, allow access
//     next();
//   }
// });

export default router

const app = createApp(App)
app.use(router)
app.use(createPinia())

app.mount('#app')