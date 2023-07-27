<template>
  <div class="flex flex-col min-h-screen font-sans">
    <SignUp />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SignUp from './components/SignUp.vue';

export default defineComponent({
  components: {
    SignUp
  }
});
</script>