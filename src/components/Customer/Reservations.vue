<template>
    <div class="bg-gradient">
    <StaticNavbar/>
   
    <!-- <div class="bg-radial-gradient" style="background:radial-gradient(circle, #0e7723, #0b6210) ;"> -->
   
  
    
    <div class=" top-20 justify-center items-center bg-green-100 h-screen justify-around pt-20	">
        
        <div class="flex flex-row justify-around">
            <div class="grid grid-cols-3 gap-x-4 gap-y-8 mb-4">
                <a @click="showReservationForm(1)" class="tooltip-link">
                    <img class="w-full h-38 object-cover " src="src/assets/images/table1.png" />
                    <span class="absolute top-2 left-2 bg-white text-green-600 p-1 rounded">1</span>
                </a>
                <a @click="showReservationForm(2)" class="tooltip-link">
                    <img class="w-full h-38 object-cover " src="src/assets/images/table1.png" />
                    <span class="absolute top-2 left-2 bg-white text-green-600 p-1 rounded">2</span>
                </a>
                <a @click="showReservationForm(3)" class="tooltip-link">
                    <img class="w-full h-38 object-cover " src="src/assets/images/table1.png" />
                    <span class="absolute top-2 left-2 bg-white text-green-600 p-1 rounded">3</span>
                </a>
                <a @click="showReservationForm(4)" class="tooltip-link">
                    <img class="w-full h-38 object-cover " src="src/assets/images/table1.png" />
                    <span class="absolute top-2 left-2 bg-white text-green-600 p-1 rounded">4</span>
                </a>
                <a @click="showReservationForm(5)" class="tooltip-link">
                    <img class="w-full h-38 object-cover " src="src/assets/images/table1.png" />
                    <span class="absolute top-2 left-2 bg-white text-green-600 p-1 rounded">5</span>
                </a>
                <a @click="showReservationForm(6)" class="tooltip-link">
                    <img class="w-full h-38 object-cover " src="src/assets/images/table1.png" />
                    <span class="absolute top-2 left-2 bg-white text-green-600 p-1 rounded">6</span>
                </a>
            </div>
            <div class="">
                <a @click="showReservationForm(7)" class="tooltip-link">
                    <img class="w-full h-38 object-cover " src="src/assets/images/table4.png" />
                    <span class="absolute top-2 left-2 bg-white text-green-600 p-1 rounded">7</span>
                </a>
                
            </div>
        </div>
        <div class="flex flex-row mt-8 justify-around ">
            <div class="">
                <img class="w-50 h-38 object-cover" src="src/assets/images/table3.png" />
                <span class="absolute top-2 left-2 bg-white text-green-600 p-1 rounded">4</span>
            </div>
            
            <div class="gap-10 columns-4 rows-1 mr-8">
                <div class="">
                  <img class="" src="src/assets/images/table2.png" />
                  <span class="absolute top-2 left-2 bg-white text-green-600 p-1 rounded">8</span>
                </div>
                <img class="" src="src/assets/images/table2.png" />
                <img class="" src="src/assets/images/table2.png" />
                <img class="" src="src/assets/images/table2.png" />
            
            </div>
        </div>
        
    </div>
</div>

   
<ReservationForm v-if="showForm" :tableNumber="selectedTable" @closeForm="closeForm" />
   
   </template>
   <script lang="ts">
       import { defineComponent } from 'vue';
       import StaticNavbar from '../NavBar/StaticNavbar.vue';
       import ReservationForm from './ReservationForm.vue';
       //import {useModal} from "jenesius-vue-modal";
       //import WidgeTestModal from "./test.vue";

       export default defineComponent({
           components: {
       StaticNavbar,
       ReservationForm
        },
        data() {
        return {
            selectedTable: null,
            showForm: false,
        };
        },
        methods: {
            showReservationForm(tableNumber) {
            this.selectedTable = tableNumber;
            this.showForm = true;
            },
            closeForm() {
            this.selectedTable = null;
            this.showForm = false;
            },
        },
//     setup() {
//     const { openModal } = useModal();
//     openModal(WidgeTestModal, {
//         title: "Hello World!"
//     });

//     // Function to open the modal when called
//     const openReservationModal = () => {
//       openModal(ReservationForm, props); // Replace ReservationForm with your actual modal component
//     };

//     return {
//       openReservationModal,
//     };
//   },
   
//    data() {
//     return {
//       showPopup: false,
//     };
//   },
//   methods: {
//     showForm(imageName: string) {
//       // Show the popup form
//       this.showPopup = true;
//     },
//     closePopup() {
//       // Close the popup form
      
//       this.showPopup = false;
//     },
//   },
});
   </script>
   <style scoped>
   /* Import global styles */
   @import './src/assets/main.css';
   .bg-gradient {
  background: radial-gradient(circle, #0e7723, #0b6210);
}
.tooltip-link {
  position: relative;
  display: inline-block;
}

.tooltip-link::before {
  content: "Reserve this table";
  position: absolute;
  bottom: 7.5rem; /* Adjust this value to control tooltip position */
  left: 75%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.75);
  color: green;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: bold;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.tooltip-link:hover::before {
  opacity: 1;
}
</style>
   
   
   
   
   
   
<!-- <template>
    <div>
      <UserNavbar />
    </div>
    <div class="bg-radial-gradient">
      <div
        v-for="table in tables"
        :key="table.id"
        class="relative mx-4 my-4"
        :style="{ 'grid-column': table.gridColumn, 'grid-row': table.gridRow }"
      >
        <div class="table-shape">
          <div
            v-for="seating in table.seats"
            :key="seating.id"
            class="seating"
            :class="seating.styleClass"
          ></div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import UserNavbar from '../NavBar/UserNavbar.vue';
  
  export default defineComponent({
    components: {
      UserNavbar,
    },
    data() {
      return {
        tables: [
          { id: 1, gridColumn: '1 / span 2', gridRow: '1', seats: [{ id: 1, styleClass: 'horizontal-seating' }] },
          { id: 2, gridColumn: '3 / span 2', gridRow: '1', seats: [{ id: 2, styleClass: 'horizontal-seating' }] },
          { id: 3, gridColumn: '5 / span 2', gridRow: '1', seats: [{ id: 3, styleClass: 'horizontal-seating' }] },
          { id: 4, gridColumn: '1 / span 1', gridRow: '2 / span 2', seats: [{ id: 4, styleClass: 'vertical-seating' }] },
          { id: 5, gridColumn: '2 / span 1', gridRow: '2 / span 2', seats: [{ id: 5, styleClass: 'vertical-seating' }] },
          { id: 6, gridColumn: '3 / span 2', gridRow: '2 / span 2', seats: [{ id: 6, styleClass: 'vertical-seating' }] },
          { id: 7, gridColumn: '5 / span 1', gridRow: '2 / span 2', seats: [{ id: 7, styleClass: 'vertical-seating' }] },
        ],
      };
    },
  });
  </script>
  
  <style scoped>
  /* Import global styles */
  @import './src/assets/main.css';
  
  </style> -->
