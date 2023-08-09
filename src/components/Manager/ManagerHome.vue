<style>
    @import '@/assets/main.css';
</style>

<template>
    <div class="grid grid-cols-3 gap-4 p-4">
        <div class="shadow p-4 rounded-lg">
        <div class="grid grid-cols-1 p-4 shadow rounded-lg bg-white">
            <div class="flex flex-col items-center justify-center">
                <div class="text-5xl text-primary font-semibold mb-0 justify-items-center">{{currentTime}}</div>
                <div class="text-l text-primary tracking-wide">{{currentDate}}</div>
            </div>
        </div>

        <div class="flex p">
            <div class="py-4 text-black font-bold">Reservation Shedule</div>
        </div>
            <ul class="overflow-y-scroll h-3/5 pr-4">
                <li v-for="(reserve, index) in reserves" :key="reserve.id">
                    <div class="flex flex-row shadow px-4 py-4 mb-2 rounded-md bg-white">
                        <div class="w-20 h-20 py-5 bg-primary items-center align-middle text-white font-bold rounded-md text-center text-4xl">{{reserve.tableNo}}</div>
                        <div class="flex flex-col pl-3 text-sm gap-0.5">
                            <div class="p-0">{{reserve.startEnd}}</div>
                            <div class="font-bold">{{reserve.custName}}</div>
                            <button :class="{ 'w-40 bg-white text-primary border border-1 border-primary rounded-md py-2 font-bold': !reserve.isClicked, 'w-40 bg-second text-white rounded-md py-2 font-bold': reserve.isClicked }" @click="toggleColor(index)">
                                {{ reserve.buttonText }}
                            </button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="shadow rounded-lg">
            <div class="shadow p-4 pt-1 rounded-lg">
            
            <div class="flex p">
                <div class="py-4 text-black font-bold">Accepted Orders</div>
            </div>
                <ul class="overflow-y-scroll h-3/5 pr-4">
                    <li v-for="(reserve, index) in reserves" :key="reserve.id">
                        <div class="flex flex-row shadow px-4 py-4 mb-2 rounded-md bg-white">
                            <div class="w-20 h-20 py-5 bg-primary items-center align-middle text-white font-bold rounded-md text-center text-4xl">{{reserve.tableNo}}</div>
                            <div class="flex flex-col pl-3 text-sm gap-0.5">
                                <div class="p-0">{{reserve.startEnd}}</div>
                                <div class="font-bold">{{reserve.custName}}</div>
                                <button :class="{ 'w-40 bg-white text-primary border border-1 border-primary rounded-md py-2 font-bold': !reserve.isClicked, 'w-40 bg-second text-white rounded-md py-2 font-bold': reserve.isClicked }" @click="toggleColor(index)">
                                    {{ reserve.buttonText }}
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="shadow rounded-lg">01

        </div>

    </div>
</template>
  
  



<script lang="ts">

import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'ManagerHome',
        data() {
            return {
                //title: 'Dashboard | Manager',
                currentTime: "",
                currentDate: "",
                currentDay: "",
                currentMonth: "",
                //isClicked: false,
                //buttonText: "Not Arrived",
                reserves: [
                    { id: 1, tableNo: '04', custName: 'Bimsara Wickramarathne', startEnd: '08.00PM - 10.00PM', isClicked: false, buttonText: 'Not Arrived' },
                    { id: 2, tableNo: '10', custName: 'Vinoli Rubasinghe', startEnd: '09.00PM - 11.00PM', isClicked: false, buttonText: 'Not Arrived'  },
                    { id: 3, tableNo: '09', custName: 'Induwara Pathirana', startEnd: '10.00PM - 12.00AM', isClicked: false, buttonText: 'Not Arrived'  },
                    { id: 4, tableNo: '06', custName: 'Induwara Pathirana', startEnd: '10.00PM - 12.00AM', isClicked: false, buttonText: 'Not Arrived'  },
                    { id: 5, tableNo: '03', custName: 'Induwara Pathirana', startEnd: '10.00PM - 12.00AM', isClicked: false, buttonText: 'Not Arrived'  },
                    // Add more items here...
                ],
            };
        },
        created() {
            this.getCurrentDateTime();
            setInterval(this.getCurrentDateTime, 1000); // Update every 1 second (1000 ms)
        },
        methods: {
            getCurrentDateTime() {
            const date = new Date();
            
            // Get the current date and time in text format
            this.currentDate = date.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            });
            this.currentTime = date.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                //second: 'numeric',
                hour12: true,
            });
            
            // Get the current day and month separately
            this.currentDay = date.toLocaleDateString('en-US', { weekday: 'long' });
            this.currentMonth = date.toLocaleDateString('en-US', { month: 'long' });
            },

            toggleColor(index: number) {
                this.reserves[index].isClicked = !this.reserves[index].isClicked;
                this.reserves[index].buttonText = this.reserves[index].isClicked ? 'Arrived' : 'Not Arrived';

                // Change the button text after the first click
                // if (this.isClicked) {
                //     this.buttonText = "Arrived";
                // } else {
                //     this.buttonText = "Not Arrived";
                // }

            },
        }
    });
import { Carousel, initTE } from "tw-elements";

initTE({ Carousel });

export { Carousel };
</script>

