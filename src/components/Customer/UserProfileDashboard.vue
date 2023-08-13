<template>
    <div class="">
        <StaticNavBar />
        <ProfileSideNav />
    </div>
    
  <div class="bg-white rounded-lg shadow p-4">
    <div class="flex items-center">
      <img :src="profileImage" alt="Profile Image" class="w-12 h-12 rounded-full mr-3">
      <div>
        <h2 class="text-lg font-semibold">{{ name }}</h2>
        <p class="text-gray-600">{{ email }}</p>
      </div>
    </div>
    <div class="mt-4">
      <slot></slot>
    </div>
  </div>

</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import ProfileSideNav from './ProfileSideNav.vue';
    import StaticNavBar from '../NavBar/StaticNavBar.vue';
    
    export default defineComponent({
        components: {
    ProfileSideNav,
    StaticNavBar
}
    });

</script>