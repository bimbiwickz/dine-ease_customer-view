
  <script setup lang="ts">
  import { defineProps, defineEmits, toRefs } from 'vue';
  
  // Props
  const props = defineProps({
    modelValue: String,
    options: Array,
    label: String,
    labelFor: String
  });
  
  // Emits
  const emit = defineEmits(['update:modelValue']);
  
  const { modelValue, options, label, labelFor } = toRefs(props);
  
  const onChange = (event) => {
    emit('update:modelValue', event.target.value);
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
      <select 
        :id="labelFor" 
        v-model="modelValue" 
        @change="onChange($event)"
        >
        <option 
            v-for="option in options" 
            :key="option" 
            :value="option"
            :class="{
            'w-full border-lgray border-2 rounded-md p-1 hover:border-green': true,
            'border-red': false && !$attrs
          }"
          >
          {{ option }}
            
        </option>
      </select>
    </div>
  </template>
  
  