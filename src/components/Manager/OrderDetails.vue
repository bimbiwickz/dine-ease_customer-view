<style>
    @import '@/assets/main.css';
</style>

<template>
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
    
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
    props: {
        orderDetails: Object, // Pass the order details as a prop
    },
    orders: [
        { orderId: 1903, name:'', price: ''},
    ]
});

import { Carousel, initTE } from "tw-elements";

initTE({ Carousel });

export { Carousel };
</script>