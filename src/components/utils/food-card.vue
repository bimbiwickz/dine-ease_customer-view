<template>
  <div
    :class="['bg-white', 'rounded-lg', 'shadow-sm', isClicked ? 'shadow-2xl' : 'hover:shadow-md', 'm-2', 'pb-2', 'lg:w-60', 'xs:w-48', 'lg:h-60', 'xs:h-48']"
  >
    <div class="flex flex-col">
      <div class="lg:w-56 lg:h-32 xs:w-42 xs:h-24 overflow-hidden rounded-md m-2">
        <div class="relative">
          <img :src="image" alt="Food" class="w-full h-full object-cover">
          <div class="absolute top-2 left-0 bg-white text-sm font-bold shadow-lg rounded-tr-lg rounded-br-lg backdrop-blur-md bg-opacity-80 text-green px-2 py-1">{{ type }}</div>
        </div>
      </div>

      <div class="flex flex-col justify-start mx-4">
        <div class="flex flex-row justify-between">
          <h3 class="text-xl font-semibold lg:text-lg xs:text-base">{{ title }}</h3>
          <p class="text-gray-500 lg:text-lg xs:text-base">{{ price }}</p>
        </div>
        <!-- <h3 class="lg:text-sm xs:text-xs border font-light border-green rounded-md px-2 align-center w-20 flex justify-center">{{ type }}</h3> -->
      </div>
    </div>
    <div class="flex justify-between mt-4 px-4">
      <h5 class="text-green text-sm">{{ count }} on my plate</h5>
      <div class="flex flex-row justify-center">
        <div class="flex items-center">
          <button @click="decrementCount" class="px-2 py-1 bg-gray-200 rounded-l-md m-0.5 lg:text-sm xs:text-xs">
            -
          </button>
          <div class="px-2 py-1 bg-green text-white rounded-md lg:text-sm xs:text-xs">
            {{ count }}
          </div>
          <button @click="incrementCount" class="px-2 py-1 bg-gray-200 rounded-r-md m-0.5 lg:text-sm xs:text-xs">
            +
          </button>
        </div>
      </div>
    </div>
    <div class="mt-4">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import BaseActionBtn from './baseActionBtn.vue'

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
    incrementCount() {
      this.count++;
    },
    decrementCount() {
      if (this.count > 0) {
        this.count--;
      }
    },
  },
  components:{
    BaseActionBtn
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style>
/* Add any custom styles here */
</style>
