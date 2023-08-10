<style>
    @import '@/assets/main.css';
</style>

<template>
    <div class="ml-40 mr-100 my-10">
        <div class="flex flex-row">
            <div class="basis-2/5 mr-5 rounded-md p-2">
                <div class="flex flex-col items-center justify-center bg-white rounded-md p-2 shadow-md">
                    <div class="text-5xl text-primary font-semibold mb-0 justify-items-center">{{currentTime}}</div>
                    <div class="text-l text-primary tracking-wide">{{currentDate}}</div>
                </div>
                <div class="bg-white rounded-md p-2 my-2 font-bold shadow-md">
                    Orders Queue
                    <ul class="overflow-y-scroll h-3/5 pr-4">
                        <li v-for="(reserve, index) in reserves" :key="reserve.id">
                            
                            <div class="flex flex-row shadow px-4 py-4 mb-2 rounded-md bg-white ease-in-out hover:bg-lyellow cursor-pointer" 
                            :class="{ 'bg-lyellow': reserve.isActive }"
                            @click="toggleActive(index)"
                            >
                                <div class="w-20 h-15 py-5 bg-primary items-center align-middle text-white font-bold rounded-md text-center text-2xl">{{reserve.tableNo}}</div>
                                <div class="flex flex-col pl-3 text-sm gap-0.5">
                                    <div class="p-0 font-bold">Order No: 1907</div>
                                    <div class="p-0">Chicken Rice & Curry, Sprite (Regular), Ice Cream 1 scp... see more</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="basis-3/5 ml-4">
                <!-- <OrderDetails :orderId="selectedOrderId" /> -->
                <ul class="overflow-y-scroll h-3/5 pr-4 w-2/3">
                    <div class="order-details bg-white w-1/2 h-full fixed top-0 right-0 overflow-y-scroll rounded-md">
                        <div class="text-3xl font-bold">Order No: 1907</div>
                        <div class="flex flex-row">
                            <div class="text-md text-gray  pr-2">Ordered at: </div> <div class="font-bold text-black">9.13PM</div>
                        </div>
                        <div class="flex flex-row">
                            <div class="text-md text-gray  pr-2">Ordered by: </div> <div class="font-bold text-black">Vinoli Rubasinghe</div>
                        </div>
                        <div class="mt-5 font-bold">Items ordered:</div>
                        <div class="flex flex-row">
                            <ul class="basis-2/3 list-disc pl-4 pl-10 pt-3 text-sm">
                                <li class="mb-2">Chicken Fried Rice</li>
                                <li class="mb-2">Sprite (Regular)</li>
                                <li class="mb-2">Vanilla Ice Cream Scp 1</li>
                                <li class="mb-2">Chocolate Ice Cream Scp 1</li>
                            </ul>
                            <ul class="basis-1/3 pt-3 text-sm">
                                <li class="mb-2">x1</li>
                                <li class="mb-2">x2</li>
                                <li class="mb-2">x1</li>
                                <li class="mb-2">x2</li>
                            </ul>
                        </div>
                        <div class="mt-5 font-bold">Additional Notes:</div>
                        <p class="text-sm">Please add more paper tissues and toothpicks.</p>
                        
                        <button class="justify-center bg-second mt-10 py-3 px-20 rounded-md shadow-lg text-white font-bold hover:shadow-xl">Accept Order</button>
                    </div>
                </ul>
                
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

//import OrderDetails from './OrderDetails.vue'


    export default defineComponent({
        name: 'ManagerHome',
        components: {
            //OrderDetails,
        },
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
                    { id: 1, tableNo: '04', custName: 'Bimsara Wickramarathne', startEnd: '08.00PM - 10.00PM', isClicked: false, buttonText: 'Not Arrived', isActive: false },
                    { id: 2, tableNo: '10', custName: 'Vinoli Rubasinghe', startEnd: '09.00PM - 11.00PM', isClicked: false, buttonText: 'Not Arrived', isActive: false  },
                    { id: 3, tableNo: '09', custName: 'Induwara Pathirana', startEnd: '10.00PM - 12.00AM', isClicked: false, buttonText: 'Not Arrived', isActive: false  },
                    { id: 4, tableNo: '06', custName: 'Induwara Pathirana', startEnd: '10.00PM - 12.00AM', isClicked: false, buttonText: 'Not Arrived', isActive: false  },
                    { id: 5, tableNo: '03', custName: 'Induwara Pathirana', startEnd: '10.00PM - 12.00AM', isClicked: false, buttonText: 'Not Arrived', isActive: false  },
                    // Add more items here...
                ],
                //selectedOrderIndex: null,
                
                
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
            toggleActive(index: number) {
                this.reserves.forEach((reserve, i) => {
                    if (i === index) {
                    reserve.isActive = !reserve.isActive;
                    } else {
                    reserve.isActive = false;
                    }
                });
            },
            
        }
    });
import { Carousel, initTE } from "tw-elements";

initTE({ Carousel });

export { Carousel };
</script>