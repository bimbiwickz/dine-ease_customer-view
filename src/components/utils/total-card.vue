<template>
    <div
      :class="['bg-white', 'rounded-lg', 'shadow-sm', 'm-2', 'pb-2', 'w-60', 'h-60']"
    >
      <div class="flex flex-col justify-start mx-4">
        <div class="flex flex-row justify-between">
          <h3 class="text-xl font-semibold">Summary</h3>
          <p class="text-gray-500">{{ totalPrice }}</p>
        </div>
      </div>
      <div class="flex-col justify-between mt-4 px-4">
        <h5 class="text-green text-sm">Total Items: {{ totalItems }}</h5>
        <h5 class="text-green text-sm">Total Price: {{ totalPrice }}</h5>
        
        <router-link to="/checkout">
          <BaseActionBtn 
                initialText="Check Out"
                initialClass="bg-green hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
                :onSubmit="onSubmit"
                :cancel="cancel"              >
            </BaseActionBtn>
        </router-link>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import BaseActionBtn from './baseActionBtn.vue';

  export default {
    props: {
      totalPrice: {
        type: Number,
        required: true,
      },
      totalItems: {
        type: Number,
        required: true,
      },
    },
    methods: {
    onSubmit() {
      // Add your onSubmit logic here
    },
    cancel() {
      // Add your cancel logic here
    },
  },
  };
  </script>
  
  <style>
  /* Add any custom styles here */
  </style>
  
  