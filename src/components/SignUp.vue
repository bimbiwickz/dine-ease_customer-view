<style>
    @import '@/assets/main.css';
</style>
<template>
    <div class="container items-center mx-auto bg-green-500 pl-72 pt-32 ">
      <div class="container w-3/4 max-h-max bg-white content-center py-6 px-6 rounded-3xl flex-columns ">
        <div class="sign-up-left w-1/2 items-center ">
          <div class="logo">
            <img class="w-36 h-36" src="../assets/dine ease logo color.png" alt="">
          </div>
          <div class="sign-up-form ">
            <h1 class="font-sans text-3xl text-center font-semibold pb-10 ">Register</h1>
            <label for="reg-form" class="text-gray-700">Name</label><br>
            <input type="text" class="w-2/3 border-lgray border-2 rounded-md p-2 hover:border-green"><br>
            <label for="reg-form" class="text-gray-700">Email</label>
            <input type="text" class="w-full border border-gray-300 rounded-md p-2">
            <label for="reg-form" class="text-gray-700">Contact Number</label>
            <input type="text" class="w-full border border-gray-300 rounded-md p-2">
            <label for="reg-form" class="text-gray-700">Password</label>
            <input type="text" class="w-full border border-gray-300 rounded-md p-2">
            <label for="reg-form" class="text-gray-700">Confirm Password</label>
            <input type="text" class="w-full border border-gray-300 rounded-md p-2">
            <input type="button" value="Register" class="w-full bg-green text-white font-bold py-2 px-4 rounded-md">
            <p class="text-gray-700">Already have an account? <a href="#" class="text-blue-500">Login</a></p>
            <div class="or flex items-center my-4">
              <hr class="flex-grow border-gray-300">
              <p class="mx-4 text-gray-700">OR</p>
              <hr class="flex-grow border-gray-300">
            </div>
            <button class="flex items-center">
              <img class="w-1/2" src="../assets/google.png" alt="">
              <p class="ml-2">Continue with Google</p>
            </button>
          </div>
        </div>
        <div class="sign-up-right w-1/2">
          <!-- Add content for the right side if needed -->
          <img src="../assets/images/1.png" alt="">
        </div>
      </div>
    </div>
  </template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SignUp',
    data() {
        return {
            title: 'Sign Up Page'
        };
    }
});
</script>