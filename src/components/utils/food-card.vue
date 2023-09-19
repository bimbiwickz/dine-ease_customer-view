<template>
  <div
    :class="['bg-white', 'rounded-lg', 'shadow-sm', isClicked ? 'shadow-2xl' : 'hover:shadow-md', 'm-2', 'lg:w-60', 'xs:w-48', 'lg:h-60', 'xs:h-48']"
  >
    <div class="flex flex-col">
      <div class="lg:w-56 lg:h-32 xs:w-42 xs:h-24 overflow-hidden rounded-md m-2">
        <div class="relative">
          <img :src="image" alt="Food" class="w-full h-full object-cover">
          <div class="absolute top-2 left-0 bg-white text-sm font-bold shadow-lg rounded-tr-lg rounded-br-lg backdrop-blur-md bg-opacity-80 text-green px-2 py-1">{{ type }}</div>
        </div>
      </div>

      <div class="flex flex-col justify-start mx-2">
        <div class="flex flex-row justify-between">
          <h3 class="text-xl font-semibold lg:text-lg xs:text-base">{{ title }}</h3>
          <p class="text-gray-500 lg:text-lg xs:text-base">{{ price }}</p>
        </div>
        <!-- <h3 class="lg:text-sm xs:text-xs border font-light border-green rounded-md px-2 align-center w-20 flex justify-center">{{ type }}</h3> -->
      </div>
    </div>
    <div class="flex justify-between mt-4">
      
      <div class="flex justify-center items-center">
        <button class="bg-green hover:bg-green-600 text-white font-semibold py-2 px-4 rounded" :buttonText="isAddedToPlate ? 'Added to Plate' : 'Add to Plate'" @click="addToPlate">
          <span class="flex justify-center">Add to Plate</span>
        </button>
      </div>
    </div>
    <div class="mt-4">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    isClicked: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    addToWishlist() {
      // Add your logic for adding to wishlist here
    },
    addToPlate() {
      // Add your logic for adding to plate here
    },
  },
};
</script>

<style>
/* Add any custom styles here */
</style>
