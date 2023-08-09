<template>
  <div class="flex flex-col min-h-screen font-sans">
    if(role==0){
      <NavBar />
    }else if(role==1){
      <MgNavBar />
    }
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
import OrderDetails from './components/Manager/OrderDetails.vue'
import login from "./components/"
 
export default defineComponent({
  components: {
    Home,
    NavBar,
    MgNavBar,
    ManagerHome,
    AcceptOrder,
    OrderDetails,
    login
  }
});
</script>

<style src="./assets/main.css"/>
