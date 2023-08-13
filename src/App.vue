<template>
  <div class="flex flex-col min-h-screen font-sans">
    <navbar/>
    <router-view></router-view> 
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/NavBar/NavBar.vue';
import MgNavBar from './components/NavBar/MgNavBar.vue';
import StatNavBar from './components/NavBar/StaticNavBar.vue';
import Home from './components/Home.vue';
import ManagerHome from './components/Manager/ManagerHome.vue'
import AcceptOrder from './components/Manager/acceptOrder.vue'
import Login from './components/login.vue'


export default defineComponent({
  components: {
    Home,
    NavBar,
    MgNavBar,
    StatNavBar,
    Login,
    ManagerHome,
    AcceptOrder,
    //OrderDetails
  }
});
</script>

<style src="./assets/main.css"/>
