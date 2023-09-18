<script lang="ts">
import FoodCard from '../utils/food-card.vue';
import Image1 from '../../assets/images/jason-leung-poI7DelFiVA-unsplash (1).jpg';
import { computed } from 'vue';

export default {
  name: 'MenuView',
  components: {
    FoodCard
  },
  data() {
    return {
      foods: [
        { id: 1, title: 'Pizza', name: 'Magarita', price: 'Rs 1000.00', image: Image1 },
        { id: 2, title: 'Burger', name: 'Veggie', price: '\\\$8', image: Image1 },
        { id: 3, title: 'Pasta', name: 'Cheese', price: '\\\$12', image: Image1 },
        { id: 4, title: 'Salad', name: 'Chicken', price: '\\\$7', image: Image1 },
        { id: 5, title: 'Steak', name: 'Beef', price: '\\\$15', image: Image1 },
        { id: 6, title: 'Sandwich', name: 'Ham', price: '\\\$5', image: Image1 },
        { id: 7, title: 'Taco', name: 'Fish', price: '\\\$10', image: Image1 },
        { id: 8, title: 'Sushi', name: 'Salmon', price: '\\\$20', image: Image1 },
        { id: 9, title: 'Ramen', name: 'Pork', price: '\\\$12', image: Image1 },
        { id: 10, title: 'Curry', name: 'Chicken', price: '\\\$14', image: Image1 }
      ],
      filter: '',
      selectedFilter: '', // Initially no filter selected
    };
  },
  computed: {
    computedFilteredFoods() {
      if (this.filter) {
        return this.foods.filter(food => food.name.toLowerCase() === this.filter.toLowerCase());
      }
      return this.foods;
    }
  },
  methods: {
    applyFilter() {
      if (this.selectedFilter === '') {
        // If no filter selected, show all foods
        this.filter = '';
      } else {
        // Filter the foods based on the selected filter
        this.filter = this.selectedFilter.toLowerCase();
      }
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
    <div class="filter-container">
      <label for="filter">Filter:</label>
      <select id="filter" v-model="selectedFilter" @change="applyFilter">
        <option value="">All</option>
        <option value="beef">Beef</option>
        <option value="chicken">Chicken</option>
        <option value="vegetarian">Vegetarian</option>
      </select>
    </div>
    <pg-title class="py-4 flex justify-center text-xl text-green">
        Choose your favorites to have!
    </pg-title>
    <container class="container flex flex-row flex-wrap p-4 xs:p-0 justify-center">
      <div class="grid lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2">
        <FoodCard
          v-for="food in computedFilteredFoods"
          :key="food.id"
          :title="food.title"
          :type="food.name"
          :price="food.price"
          :image="food.image"
        />
      </div>
    </container>
  </div>
</template>
