<template>
  <div v-if="showForm" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white p-6 rounded shadow-md w-80">
      <h2 class="text-lg font-semibold mb-4">Reserve Table {{ tableNumber }}</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="date" class="block font-medium text-gray-700">Date: {{ reservation.date }}</label>
        </div>
        <div class="mb-4">
          <label for="time" class="block font-medium text-gray-700">Time: {{ reservation.selectedTime }}</label>
        </div>
        <div class="mb-4">
          <label for="people" class="block font-medium text-gray-700">Number of People: {{ reservation.people }}</label>
        </div>
        <div class="mt-4 flex justify-end">
          <button @click="closeForm" class="bg-red text-white py-2 px-4 rounded mr-2">Cancel</button>
          <button type="submit" class="bg-green text-white py-2 px-4 rounded">Confirm</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';

export default defineComponent({
    props: {
      tableNumber: Number,
      onClose: Function,
    },
    setup(props) {
      const reservation = ref({

        date: '',
        selectedTime: '',
        people: '',
        id: '1'
      });
      const showForm = ref(true);

      axios.get('http://localhost:3000/reservation')
        .then((response) => {
          reservation.value.date = response.data.date;
          reservation.value.selectedTime = response.data.selectedTime;
          reservation.value.people = response.data.people;
          showForm.value = true;
        })
        .catch((error) => {
          window.alert(error);
        });

      const closeForm = () => {
        showForm.value = false;
        window.location.reload();
      };

      const submitForm = () => {
        axios.post('http://localhost:3000/confirmed_reservation', reservation.value)
        .then((response) => {
          window.alert('Reservation confirmed.');
        })
        .catch((error) => {
          window.alert(error);
        });      
      };

      return {
        showForm,
        reservation,
        closeForm,
        submitForm
      };
    },
});
</script>
