<script lang="ts">
import FoodCard from '../utils/food-card.vue';
import SearchBar from '../utils/baseSearchBar.vue';
import NavBar from '../utils/navBar-user.vue';
import Image1 from '../../assets/images/jason-leung-poI7DelFiVA-unsplash (1).jpg';
import { computed } from 'vue';

export default {
  name: 'MenuView',
  components: {
    FoodCard,
    SearchBar,
    NavBar
  },
  data() {
    return {
      foods: [
        { id: 1, title: 'Pizza', name: 'Magarita', price: 'Rs 1000.00', image: Image1 },
        { id: 2, title: 'Burger', name: 'Vegitarian', price: '\\\$8', image: Image1 },
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
    <SearchBar
    :items="pageItems"
    @select="selectedFilter = $event"
    ></SearchBar>
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
