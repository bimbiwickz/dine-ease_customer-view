<template>
  <button
    class="bg-green hover:bg-green-600 text-white font-semibold py-2 px-4 rounded" @click="toggleButtonText">
    {{ buttonText }}
  </button>
</template>

<script lang="ts">
export default {
  data() {
    return {
      buttonText: this.initialText
    };
  },
  props: {
    initialText: {
      type: String,
      required: true,
    },
    clickedText: {
      type: String,
      default: "Clicked me!",
    },
    
  },
  methods: {
    toggleButtonText() {
      if (this.buttonText === this.initialText) {
        this.buttonText = this.clickedText;
      } else {
        this.buttonText = this.initialText;
      }
    },
  },
};
</script>
