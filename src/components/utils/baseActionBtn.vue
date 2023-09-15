<script lang="ts" setup>
const props = defineProps<{
  loading?: boolean;
  outline?: boolean;
  danger?: boolean;
  warning?: boolean;
  flat?: boolean;
}>();
</script>

<template>
  <button
    class="w-full bg-green text-white font-semibold py-2 px-4 cursor-pointer rounded-md my-4 hover:bg-lgreen hover:text-green"
    :class="[
      props.outline ? 'outlined' : '',
      props.danger ? 'danger' : '',
      props.warning ? 'warning' : '',
      props.flat ? 'flat' : '',
    ]"
  >
    <i-eos-icons-loading v-if="props.loading" />
    <span>
      <slot />
    </span>
  </button>
</template>

