<script lang="ts" setup>
import { ref, defineProps } from 'vue';

const props = defineProps<{
  loading?: boolean;
  outline?: boolean;
  danger?: boolean;
  warning?: boolean;
  flat?: boolean;
  buttonText?: string; // Add this line
}>();

const isClicked = ref(false);
const buttonText = ref(props.buttonText || "Click me");

const handleClick = () => {
  isClicked.value = !isClicked.value;
  buttonText.value = isClicked.value ? "Clicked!" : props.buttonText;
};
</script>

<template>
  <button
    @click="handleClick"
    class="w-full font-semibold py-2 px-4 cursor-pointer rounded-md my-4 border-2 border-green-500"
    :class="[
      isClicked ? 'bg-white text-green' : 'bg-green text-white',
      props.outline ? 'outlined' : '',
      props.danger ? 'danger' : '',
      props.warning ? 'warning' : '',
      props.flat ? 'flat' : '',
    ]"
  >
    <i-eos-icons-loading v-if="props.loading" />
    <span>
      {{ buttonText }}
    </span>
  </button>
</template>
