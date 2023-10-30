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
    initialClass: {
      type: String,
      default: "bg-green hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
    },
    clickedClass: {
      type: String,
      default: "bg-white hover:bg-white-600 text-green font-semibold py-2 px-4 rounded border-2 border-green"
    },
      onSubmit: {
      type: Function,
      default: () => {},
    },
    cancel: {
      type: Function,
      default: () => {},
    },
    
    
  },
  methods: {
    toggleButtonText() {
      if (this.buttonText === this.initialText) {
        this.buttonText = this.clickedText;
        this.onSubmit();
      } else {
        this.buttonText = this.initialText;
        this.cancel();
      }
    },
  },
  computed: {
  buttonClasses() {
    return {
      [this.initialClass]: this.buttonText === this.initialText,
      [this.clickedClass]: this.buttonText === this.clickedText,
    };
  },
},
};
</script>
