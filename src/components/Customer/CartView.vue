<script lang="ts">
import axios from 'axios';
import CartCard from '../utils/cart-card.vue';
import NavBar from '../utils/navBar-user.vue';
import { computed } from 'vue';
import menuData from '../../sampleData/menu.json';
import TotalCard from '../utils/total-card.vue';


export default {
  name: 'MenuView',
  components: {
    CartCard,
    TotalCard,
    NavBar
  },
    data() {
        return {
        foods: menuData,
        filter: '',
        selectedFilter: '', // Initially no filter selected
        searchQuery: '',
        pageItems: ['All Categories','Main Dishes','Desserts','Beverages','Alchohol'],
        mainDishes: ['Pizza','Burger','Pasta','Sushi'],
        desserts: ['Curry', 'Steak', 'Salad', 'Sandwich']
        };
    },
    computed: {
        computedFilteredFoods() {
        if (this.selectedFilter === 'Main Dishes') {
            return this.foods.filter(food => this.mainDishes.includes(food.title));
        }else if (this.selectedFilter === 'Desserts') {
            return this.foods.filter(food => this.desserts.includes(food.title));
        }
        return this.foods;
        }
    },
    methods: {
        applyFilter() {
        if (this.selectedFilter === 'Main Dishes') {
            // If "Main Dishes" filter selected, show only specific foods
            this.filter = 'Pizza, Burger, Pasta, Sushi';
        }else if (this.selectedFilter === 'Desserts') {
            // If "Main Dishes" filter selected, show only specific foods
            this.filter = 'Curry, Steak, Salad, Sandwich';
        } else {
            // If no filter selected, show all foods
            this.filter = '';
        }
        },
        applySearch() {
        // Triggered when the search input value changes
        // Update the searchQuery property and recompute the filtered foods
        this.searchQuery = this.searchQuery.trim();
        },
    },
    created() {
        const urlParams = new URLSearchParams(window.location.search);
        this.filter = urlParams.get('filter') || '';
    }
}
</script>

<template>
    <div>
      <NavBar></NavBar>
      <div class="flex">
        <div class="m-4 p-16 w-2/3">
          <CartCard
            v-for="food in computedFilteredFoods"
            :key="food.id"
            :title="food.title"
            :type="food.name"
            :price="food.price"
            :image="food.image"
          ></CartCard>
        </div>
        <div class="m-4 p-16 w-1/3 bg-gray-200">
          <TotalCard
            :totalPrice="totalPrice"
            :totalItems="totalItems"
          ></TotalCard>
        </div>
      </div>
    </div>
  </template>
  
