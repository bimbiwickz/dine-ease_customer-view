
  <script setup lang="ts">
  import { defineProps, defineEmits, toRefs } from 'vue';
  
  // Props
  const props = defineProps({
    modelValue: String,
    label: String,
    labelFor: String
  });
  
  // Emits
  const emit = defineEmits(['update:modelValue']);
  
  const { label, labelFor } = toRefs(props);
  
  const onChange = (event) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(event.target.files[0]);
    fileReader.addEventListener('load', () => {
      emit('update:modelValue', fileReader.result);
    });
  };
  function onClickLabel() {
    input.value?.focus();
  }
  </script>
  <template>
    <div>
      <label 
        :for="labelFor"
        :class="['text-red-500', 'font-bold']"
        @click="onClickLabel"
      class="text-gray-700 pt-3 font-medium text-sm"
      >
      {{ label }}
      </label>
      <input 
        type="file" 
        :id="labelFor" 
        @change="onChange($event)"
        :class="{

        }"
      />
    </div>
  </template>
  
  
