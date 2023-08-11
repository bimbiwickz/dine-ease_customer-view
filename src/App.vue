<template>
  <div class="flex flex-col min-h-screen font-sans">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Home from './components/Home.vue';
 
export default defineComponent({
  components: {
    Home,
  }
});
</script>