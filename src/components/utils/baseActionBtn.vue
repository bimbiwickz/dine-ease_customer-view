<template>
  <button
    class="bg-green hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
    :loading="isLoading"
    :outline="false"
    :danger="false"
    :warning="false"
    :flat="false"
    @click="addToPlate"
  >
    <span class="flex justify-center">{{ buttonText }}</span>
  </button>
</template>

<script lang="ts">
//import BaseActionBtn from '@/components/baseActionBtn.vue';

export default {
  // components: {
  //   BaseActionBtn,
  // },
  data() {
    return {
      isLoading: false,
      isAddedToPlate: false,
      buttonText: 'Add to Plate',
    };
  },
  methods: {
    addToPlate() {
      this.isAddedToPlate = !this.isAddedToPlate;
      this.buttonText = this.isAddedToPlate ? 'Added to Plate' : 'Add to Plate';
    },
  },
};
</script>
