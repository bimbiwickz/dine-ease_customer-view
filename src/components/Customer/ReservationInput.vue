<template>
    <div class="reserve-button flex flex-col items-center">
        <div class="txt py-5 text-primary text-lg">
            <h2>Looking for a Reservation?</h2>
        </div>
        <div class="inputs flex flex-row items-center justify-between">
            <div class="select-date">
                <input type="date" class="w-full rounded-md p-1 hover:border-green focus:outline-none focus:ring-1 focus:ring-green focus:border-transparent" placeholder="Select Date" required/>
            </div>
            <div class="select-time">
                <!-- <input type="time" id="time"  class="mt-1 p-2 border rounded w-18" placeholder="Select time" required /> -->
                <select v-model="selectedTime" class="w-full border-2 rounded-lg p-1 hover:border-green focus:outline-none focus:ring-1 focus:ring-green focus:border-transparent">
                    <option value="">Select time</option>
                    <option v-for="timeSlot in timeSlots" :value="timeSlot">{{ timeSlot }}</option>
                </select>

            </div>
            <div class="select-people">
                <input type="number" id="people"  class="w-full rounded-md p-1 hover:border-green focus:outline-none focus:ring-1 focus:ring-green focus:border-transparent" placeholder="No. of people" required />
            </div>
            <div class="reserve-button">
                <button type="submit" class="bg-green text-white py-2 px-4 rounded-lg">Reserve</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        data() {
            return {
                currentDate: new Date().toISOString().substr(0, 10),
                timeSlots: [],
                selectedTime: ''
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
        }
    };
</script>

<style>
    input[type="date"]::before {
        color: #999999;
        content: attr(placeholder);
    }
    input[type="date"] {
        color: #ffffff;
    }
    input[type="date"]:focus,input[type="date"]:valid {
        color: #4F5052;
    }
    input[type="date"]:focus::before,
    input[type="date"]:valid::before {
        content: "" !important;
    }
</style>
