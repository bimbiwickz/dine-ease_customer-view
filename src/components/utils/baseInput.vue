<script setup lang="ts">
import {toRefs, ref } from 'vue';

  // Props
  const props = defineProps<{
  modelValue: string | number | undefined;
  label: string;
  labelFor: string;
  fixedLabel?: boolean;
  type?: string; // Add the 'type' prop
  
}>();


  //  Emits
  const emit = defineEmits<{
    (event: "update:modelValue", payload: string | number): void;
  }>();

  const { label, labelFor, modelValue, type } = toRefs(props);
  const input = ref<HTMLInputElement>();

  function onClickLabel() {
    input.value?.focus();
  }
</script>

<template>
  <!-- <div
    :class="[
      'base-input',
      modelValue !== '' || fixedLabel ? 'focused' : ''
    ]"
    class="px-4 py-2 border border-gray-300 rounded-md"
  > -->
  <label
      :for="labelFor"
      :class="['text-red-500', 'font-bold']"
      @click="onClickLabel"
      class="text-gray-700 pt-3 font-medium text-sm"
    >
      {{ label }}
    </label>
    <input
      v-bind="$attrs"
      ref="input"
      :value="modelValue"
      @change="
        emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      :class="{
            'w-full border-lgray border-2 rounded-md p-1 hover:border-green': true,
            'border-red': false && !$attrs
          }"

      :type="type"
    />
    <div class="icon">
      <slot name="icon" />
    </div>
  <!-- </div> -->
</template>