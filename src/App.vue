<template>
  <div class="flex flex-col min-h-screen font-sans">
    <!-- <navbar/> -->
    <router-view></router-view> 
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/NavBar/NavBar.vue';
import MgNavBar from './components/NavBar/MgNavBar.vue';
import StatNavBar from './components/NavBar/StaticNavBar.vue';
import logNavBar from './components/NavBar/logNavBar.vue';
import Home from './components/Home.vue';
import ManagerHome from './components/Manager/ManagerHome.vue'
import AcceptOrder1 from './components/Manager/orders/acceptOrder1.vue'
import AcceptOrder2 from './components/Manager/orders/acceptOrder2.vue'
import Login from './components/login.vue'
import Menu from './components/Customer/MenuView.vue'
import Cart from './components/Customer/CartView.vue'
import Checkout from  './components/Customer/CheckoutView.vue'
import Reservation1 from './components/Manager/reservations/reservation1.vue'
import Reservation2 from './components/Manager/reservations/reservation2.vue'

export default defineComponent({
  components: {
    Home,
    NavBar,
    MgNavBar,
    StatNavBar,
    Login,
    ManagerHome,
    AcceptOrder1,
    AcceptOrder2,
    Menu,
    Cart,
    Checkout,
    Reservation1,
    Reservation2
  }
});
</script>

<style src="./assets/main.css"/>
