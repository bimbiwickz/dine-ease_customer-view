<template>
  <div class="flex flex-col min-h-screen font-sans">
    <MgNavBar />
    <router-view></router-view> 
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/NavBar.vue';
import MgNavBar from './components/MgNavBar.vue';
import Home from './components/Home.vue';
import ManagerHome from './components/Manager/ManagerHome.vue'
import AcceptOrder from './components/Manager/acceptOrder.vue'
//import OrderDetails from './components/Manager/OrderDetails.vue'
 
export default defineComponent({
  components: {
    Home,
    NavBar,
    MgNavBar,
    ManagerHome,
    AcceptOrder,
    //OrderDetails
  }
});
</script>

<style src="./assets/main.css"/>
