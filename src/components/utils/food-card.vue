<template>
  <div
    :class="['bg-white', 'rounded-lg', 'shadow-sm', isClicked ? 'shadow-2xl' : 'hover:shadow-md', 'm-2', 'pb-2', 'lg:w-60', 'xs:w-48', 'lg:h-60', 'xs:h-48']"
  >
    <!-- ... rest of the template code ... -->
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
    <!-- ... rest of the template code ... -->
  </div>
</template>

<script lang="ts">
import BaseActionBtn from './baseActionBtn.vue'
import axios from 'axios';

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
      type: Number,
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
    userId: {
      type: String,
      required: true,
    },
    foodId: {
      type: String,
      required: true,
    },
  },
  methods: {
    incrementCount() {
      this.count++;
      const orderDetails = {
        userId: this.userId,
        foodId: this.foodId,
        count: this.count,
      };

      axios.post('http://localhost:3000/itemCount', orderDetails)
        .then((response) => {
          // Handle the response if needed
          //window.alert('One item added to the table.');
        })
        .catch((error) => {
          // Handle the error if needed
          window.alert(error);
        });

      this.$emit('update-count', this.count);
    },

    decrementCount() {
      if (this.count > 0) {
        this.count--;
        const orderDetails = {
          userId: this.userId,
          foodId: this.foodId,
          count: this.count,
        };

        axios.put('http://localhost:3000/itemCount', orderDetails)
          .then((response) => {
            // Handle the response if needed
            window.alert('One item removed from the table.');
          })
          .catch((error) => {
            // Handle the error if needed
           // window.alert(error);
          });

        this.$emit('update-count', this.count);
      }
    },
    // ...
  },
  components: {
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
