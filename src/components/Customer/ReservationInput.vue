<template>
    <div class="reserve-button flex flex-col items-left space-y-4">
        <div class="txt py-5 text-black text-3xl font-bold">
            <h2>Looking for a Reservation?</h2>
        </div>
        <div class="inputs flex flex-row items-center space-x-4">
            <div class="select-date">
                <input v-model="date" type="date" :min="minDate" :max="maxDate" class="px-4 py-2 rounded mt-1 w-36 h-10 focus:outline-none focus:border-primary-500" placeholder="Select Date" required/>
            </div>
            <div class="select-time">
                <select v-model="selectedTime" class="px-4 py-2 rounded mt-1 w-36 h-10 focus:outline-none focus:border-primary-500">
                    <option value="">Select time slot</option>
                    <option v-for="timeSlot in timeSlots" :value="timeSlot">{{ timeSlot }}</option>
                </select>
            </div>
            <div class="select-people">
                <input v-model.number="people" type="number" id="people"  class="mt-1 p-2 border rounded w-28 h-10" placeholder="PAX" min="1" required />
            </div>
            <div class="reserve-button">
                <button :disabled="!date || !selectedTime || !people" @click="submitForm" class="bg-green text-white w-28 h-10 py-2 px-4 rounded">Reserve</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

export default defineComponent({
    data() {
        return {
            currentDate: new Date().toISOString().substr(0, 10),
            timeSlots: [],
            date: '',
            selectedTime: '',
            people: ''
        }
    },
    computed: {
        minDate() {
            const today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            let yyyy = today.getFullYear();

            return yyyy + '-' + mm + '-' + dd;
        },
        maxDate() {
            const today = new Date();
            today.setDate(today.getDate() + 3); // Add 3 days to today
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            let yyyy = today.getFullYear();

            return yyyy + '-' + mm + '-' + dd;
        }
    },
    created() {
        const startTime = new Date(); // Start time
        const endTime = new Date(); // End time

        startTime.setHours(16, 0, 0); // Set the start time to 9:00 AM
        endTime.setHours(23, 59, 0); // Set the end time to 5:00 PM

        const interval = 60; // Interval in minutes

        while (startTime < endTime) {
            const time = startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            this.timeSlots.push(time);
            startTime.setTime(startTime.getTime() + interval * 60 * 1000); // Add interval to the start time
        }
    },
    methods: {
        submitForm: async function() {
            if (this.date && this.selectedTime && this.people) {
                const data = { date: this.date, selectedTime: this.selectedTime, people: this.people };
                try {
                    const res = await axios.post('http://localhost:3000/reservation', data);
                    window.alert('Reservation added successfully: ');
                    this.$router.push({ name: 'reservations', params: { id: 1 }});
                } catch (error) {
                    window.alert(error);
                }
            } else {
                alert('Please fill in all fields.');
            }
        }
    }
});
</script>
