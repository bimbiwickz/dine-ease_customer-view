<template>
    <UserNavbar />

    <div class="container w-full items-center mx-auto bg-black">

    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import UserNavbar from './NavBar/UserNavbar.vue';

    export default defineComponent({
        components: {
            UserNavbar,
        }
    });
</script>