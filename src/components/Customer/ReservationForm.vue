<template>
    <div v-if="showPopup" class="popup-overlay">
      <div class="popup-content">
        <!-- Your form elements go here -->
        
            <h2 class="text-xl font-semibold mb-4">Make a Reservation</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label class="block text-sm font-medium text-gray-700">Date</label>
          <input v-model="reservation.date" type="date" class="mt-1 p-2 border rounded w-full" required />
        </div>
        <div class="mb-3">
          <label class="block text-sm font-medium text-gray-700">Time</label>
          <input v-model="reservation.time" type="time" class="mt-1 p-2 border rounded w-full" required />
        </div>
        <div class="mb-3">
          <label class="block text-sm font-medium text-gray-700">Number of People</label>
          <input v-model.number="reservation.numPeople" type="number" class="mt-1 p-2 border rounded w-full" required />
        </div>
        <div class="flex justify-end">
          <button type="button" @click="closePopup" class="mr-2 px-4 py-2 border rounded text-gray-600">Cancel</button>
          <button type="submit" class="px-4 py-2 bg-green-500 text-white rounded">Confirm</button>
        </div>
        </form>
        <button class="close-button" @click="closePopup">Close</button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    showPopup: Boolean,
  },
  data() {
    return {
      reservation: {
        date: '',
        time: '',
        numPeople: 1,
      },
    };
  },
  methods: {
    submitForm() {
      // You can perform actions like sending the reservation details to a server here
      // After that, close the popup
      this.closePopup();
    },
    closePopup() {
      // Emit an event to the parent component to close the popup
      this.$emit('close');
    },
  },
});
  </script>
  
  <style scoped>
  .popup-overlay {
    /* Position the popup in the center of the screen */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
  }
  
  .popup-content {
    /* Style the popup content */
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  }
  
  .close-button {
    /* Style the close button */
    margin-top: 10px;
  }
  </style>
  