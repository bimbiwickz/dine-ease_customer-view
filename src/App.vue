<template>
  <div class="flex flex-col min-h-screen font-sans">
    <!-- <navbar/> -->
    <router-view></router-view> 
    <widget-container-modal />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from './components/NavBar/NavBar.vue'
import MgNavBar from './components/NavBar/MgNavBar.vue'
import StatNavBar from './components/NavBar/StaticNavBar.vue'
import Home from './components/Home.vue'
import LogIn from './components/LogIn.vue'
import ManagerHome from './components/Manager/ManagerHome.vue'
import AcceptOrder from './components/Manager/acceptOrder.vue'
import Reservations from './components/Customer/Reservations.vue'
import ProfileSideNav from './components/Customer/ProfileSideNav.vue'
import UserNavBar from './components/NavBar/UserNavbar.vue'
import UserProfile from './components/Customer/UserProfileDashboard.vue'
import { container } from 'jenesius-vue-modal';



export default defineComponent({
  components: {
    Home,
    NavBar,
    MgNavBar,
    StatNavBar,
    LogIn,
    ManagerHome,
    AcceptOrder,
    ProfileSideNav,
    Reservations,
    UserProfile,
    WidgetContainerModal: container,
    
    //OrderDetails
  },
  name: 'App',
});
</script>

<style src="./assets/main.css"/>
