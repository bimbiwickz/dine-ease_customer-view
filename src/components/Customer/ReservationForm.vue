<template>
    <div v-if="showForm" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-6 rounded shadow-md w-80">
        <h2 class="text-lg font-semibold mb-4">Reserve Table {{ tableNumber }}</h2>
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label for="date" class="block font-medium text-gray-700">Date</label>
            <input type="date" id="date" v-model="reservation.date" class="mt-1 p-2 border rounded w-full" required />
          </div>
          <div class="mb-4">
            <label for="time" class="block font-medium text-gray-700">Time</label>
            <input type="time" id="time" v-model="reservation.time" class="mt-1 p-2 border rounded w-full" required />
          </div>
          <div class="mb-4">
            <label for="people" class="block font-medium text-gray-700">Number of People</label>
            <input type="number" id="people" v-model="reservation.people" class="mt-1 p-2 border rounded w-full" required />
          </div>
          <div class="mt-4 flex justify-end">
            <button @click="closeForm" class="bg-red text-white py-2 px-4 rounded mr-2">Cancel</button>
            <button type="submit" class="bg-green text-white py-2 px-4 rounded">Reserve</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import loginUser from '../login.vue';

  export default defineComponent({
    props: {
      tableNumber: Number,
      onClose: Function,
    },
    setup(props) {
      const showForm = ref(true);
      const reservation = ref({
        userID: loginUser.userID,
        date: '',
        time: '',
        reservationDatetime: '',
        people: 1,
        tableNo: props.tableNumber, // Initialize with the passed tableNo
      });

      const submitForm = async () => {
        try {
          // Combine date and time into a single datetime value
          const reservationDatetime = new Date(
            `${reservation.value.date} ${reservation.value.time}`
          );

          // Send the combined datetime value to the backend
          const response = await fetch('https://dineease-api.azurewebsites.net/api/reservation', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              reservationDatetime: reservationDatetime,
              people: reservation.value.people,
              tableNo: reservation.value.tableNo,
            }),
          });
          window.location.reload();
          // Handle response as before
        } catch (error) {
          console.error('Error creating reservation:', error);
        }
      };

  
      const closeForm = () => {
        showForm.value = false;
        //props.onClose();
        window.location.reload();
      };
  
      return {
        showForm,
        reservation,
        submitForm,
        closeForm,
      };
    },
  });
  </script>
  
  <!-- <style scoped>
  input[type="date"], input[type="time"], input[type="number"] {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
  }
  
  button {
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
  }
  
  .bg-red-500 {
    background-color: #f56565;
  }
  
  .bg-green-500 {
    background-color: #48bb78;
  }
  
  .text-white {
    color: white;
  }
  
  .py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  
  .px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .rounded {
    border-radius: 0.25rem;
  }
  </style> -->
  