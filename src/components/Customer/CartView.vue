<script setup lang="ts">
import title_2 from "../landing_page_components/second_main_title.vue";
import page_footer from "../landing_page_components/footer.vue";
import nav_bar from "../NavBar/StaticNavBar.vue"
const components = {
  title_2,
  page_footer
};
</script>
<template>
    <nav_bar></nav_bar>
    <title_2 title_2="Meal Cart"/>

    <div class="h-screen bg-gray-300">
   <div class="py-12 w-full">
       
   
   <div class="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg  md:max-w-5xl ">
       <div class="md:flex ">
           <div class="w-full p-4 px-5 py-5">
               <form action="/submit-order" method="post">

               <div class="md:grid md:grid-cols-2 gap-2 ">
                   <div class="col-span-2 p-5">
                       

                       <!-- <h1 class="text-xl font-medium ">Shopping Cart</h1> -->

                       <div class="flex justify-between items-center mt-6 pt-6 text-black">
                           <div class="flex  items-center">
                               <img src="https://th.bing.com/th/id/R.686eea5b785d964e9c6f5aa622ec8db6?rik=I2e8p9gFjfaHeg&riu=http%3a%2f%2frecipedose.com%2fwp-content%2fuploads%2f2013%2f03%2fChicken-momos.jpg&ehk=P8WqN4eTADZLNRHw%2f58ok2K00IOoMqab1qmn9DrSLIw%3d&risl=1&pid=ImgRaw&r=0" width="60" class="rounded-full ">

                               <div class="flex flex-col ml-3">
                                   <span class="md:text-md font-medium">Chicken momo</span>
                                   <span class="text-xs font-light text-gray-400">#41551</span>
                                   
                               </div>

                               
                           </div>

                           <div class="flex justify-center items-center ">
                               
                               <div class="pr-8 flex ">
                                   <span class="font-semibold">-</span>
                                   <input type="number" class="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2" value="1">
                                   <span class="font-semibold">+</span>
                               </div>

                               <div class="pr-8 ">
                                   
                                   <span class="text-xs font-medium">$10.50</span>
                               </div>
                               <div>
                                   <i class="fa fa-close text-xs font-medium"></i>
                               </div>

                           </div>
                           
                       </div>









                       <div class="flex justify-between items-center pt-6 mt-6 border-t text-black">
                           <div class="flex  items-center">
                               <img src="https://veganinthefreezer.com/wp-content/uploads/2020/08/Spicy-roasted-new-Potatoes-1200-sq-possiblr-feature-sp.jpg" width="60" class="rounded-full ">

                               <div class="flex flex-col ml-3 ">
                                   <span class="text-md font-medium w-auto ">Spicy Mexican potatoes</span>
                                   <span class="text-xs font-light text-gray-400">#66999</span>
                                   
                               </div>

                               
                           </div>

                           <div class="flex justify-center items-center ">
                               
                               <div class="pr-8 flex">
                                   <span class="font-semibold">-</span>
                                   <input type="number" class="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2" value="1">
                                   <span class="font-semibold">+</span>
                               </div>

                               <div class="pr-8">
                                   
                                   <span class="text-xs font-medium">$10.50</span>
                               </div>
                               <div>
                                   <i class="fa fa-close text-xs font-medium"></i>
                               </div>

                           </div>
                           
                       </div>
                   










                       <div class="flex justify-between items-center mt-6 pt-6 border-t text-black">
                           <div class="flex  items-center">
                               <img src="https://bing.com/th?id=OSK.4265399d17816e86e691710f63433e4b" width="60" class="rounded-full ">

                               <div class="flex flex-col ml-3 ">
                                   <span class="text-md font-medium">Pollo alla Marengo</span>
                                   <span class="text-xs font-light text-gray-400">#86577</span>
                                   
                               </div>

                               
                           </div>

                           <div class="flex justify-center items-center">
                               
                               <div class="pr-8 flex">
                                   <span class="font-semibold" >-</span>
                                   <input id="custom-number-input" type="number" class="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-3" value="1">
                                   <span class="font-semibold ">+</span>
                               </div>

                               <div class="pr-8">
                                   
                                   <span class="text-xs font-medium">$10.50</span>
                               </div>
                               <div>
                                   <i class="fa fa-close text-xs font-medium"></i>
                               </div>

                           </div>
                           
                       </div>



                       <div class="flex justify-between items-center mt-6 pt-6 border-t"> 
                        <a href="/customer/MenuView">
                           <div class="flex items-center">
                               <i class="fa fa-arrow-left text-sm pr-2"></i>
                               <span class="text-md  font-medium text-[#007400]">Back to menu</span>
                           </div>
                        </a>
                           <div class="flex justify-center items-end">
                               <span class="text-sm font-medium text-gray-400 mr-1">Subtotal:</span>
                               <span class="text-lg font-bold text-gray-800 "> $24.90</span>
                               
                           </div>
                           
                       </div>

                   </div>


                   

                   
               </div>
           </form>
               
              
          </div>
       </div>
       <div class="flex justify-between p-4 rounded-lg">
           <a href="/customer/CartView">
               <button class="bg-[#007400] hover:bg-gray-500 text-white py-2 px-4 rounded-lg">
                   Conform Order
               </button>
           </a>
           <a href="/customer/CheckoutView">
               <button class="bg-[#007400] hover:bg-gray-500 text-white py-2 px-4 rounded-lg">
                   Checkout
               </button>
           </a>
       </div>

       <!-- <div class="flex justify-end p-4 rounded-lg items-center">
           <a href="./card"><button class="bg-[#007400] hover:bg-gray-500 text-white py-2 px-4 rounded-lg">Checkout</button></a>
       </div> -->
   </div>
   </div>
   
</div>



<page_footer/>
   
</template>

<style>
.word{
 font-family: 'Lato', sans-serif;
}

/* Hide the default arrow buttons */
input[type="number"]::-webkit-inner-spin-button,
   input[type="number"]::-webkit-outer-spin-button {
     -webkit-appearance: none;
     margin: 0;
   }

   /* Hide the input's spin buttons in Firefox */
   input[type="number"] {
     -moz-appearance: textfield;
   }

   /* Style the custom increment and decrement buttons */
   .increment, .decrement {
     display: inline-block;
     cursor: pointer;
     padding: 0.2em 0.4em;
     font-weight: bold;
     border: 1px solid #ccc;
     border-radius: 0.25rem;
   }
</style>

