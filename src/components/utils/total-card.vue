<template>
  <div
    :class="['bg-white', 'rounded-lg', 'shadow-sm', 'm-2', 'pb-2', 'w-128', 'h-64']"
  >
    <div class="flex flex-col justify-start mx-4">
      <div class="flex flex-row justify-between">
        <h3 class="text-xl font-semibold py-8 px-8">Payment Details</h3>
        <p class="text-gray-500">{{ totalPrice }}</p>
      </div>
    </div>
    <div class="flex flex-col justify-between px-8">
      <h5 class="text-green text-sm py-1">Subtotal: {{ totalPrice }}</h5>
      <h5 class="text-green text-sm">Tax & service charge: {{ totalItems }}</h5>
      <div class="mt-4 justify-evenly p-8 px-16">
        <BaseActionBtn 
          initialText="Proceed to Checkout"
          :class="{ 'clicked-class': isClicked }"
          initialClass="bg-green hover:bg-green-600 text-white text-xs font-semibold py-2 px-4 rounded"
          @click="isClicked = !isClicked">
        </BaseActionBtn>
      </div>
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
  components:{
    BaseActionBtn
  },
  data() {
    return {
      isClicked: false
    }
  }
  };
  </script>
  
  <style>
  /* Add any custom styles here */
  </style>
  
  