<template>
  <button
    :class="buttonClasses" @click="toggleButtonText">
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
  computed: {
       buttonClasses() {
         return {
           'bg-green hover:bg-green-600 text-white font-semibold py-2 px-4 rounded': this.buttonText === this.initialText,
           'bg-white hover:bg-white-600 text-green font-semibold py-2 px-4 rounded border-2 border-green': this.buttonText === this.clickedText,
         };
       },
     },
};
</script>
