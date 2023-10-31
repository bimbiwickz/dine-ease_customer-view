<!-- <template>
  <div class="py-4">
    <NavBar></NavBar>
    <div class="px-8">
      <h4 class="bg-white w-full h-20 rounded-lg shadow-sm pt-6 pl-8 flex font-medium text-xl text-green mt-24">
        <span class="mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </span>
        Cart
      </h4>
    </div>
    <div class="flex">
      <div class="m-4 py-4 w-2/3">
        <CartCard
          v-for="food in computedFilteredFoods"
          :key="food.id"
          :title="food.title"
          :type="food.name"
          :price="food.price"
          :image="food.image"
          @removeFromCart="removeFromCart(food)"
        />
      </div>
      <div class="m-4 py-16 px-8 w-1/3">
        <TotalCard
          :totalPrice="calculateTotalPrice()"
          :totalItems="cartItems.length"
        ></TotalCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CartCard from '../utils/cart-card.vue';
import SearchBar from '../utils/baseSearchBar.vue';
import NavBar from '../utils/navBar-user.vue';
import TotalCard from '../utils/total-card.vue';
import { computed, ref } from 'vue';
import axios from 'axios';
import { useConfirm } from 'vue3-confirm-dialog'
import { inject } from 'vue';



export default {
  name: 'CartView',
  components: {
    CartCard,
    SearchBar,
    NavBar,
    TotalCard,
  },
  setup() {
    const confirm = useConfirm();
    return { confirm };  // return the confirm function so it can be used in methods
  },
  data() {
    return {
      foods: [],
      filter: '',
      selectedFilter: '',
      searchQuery: '',
      cartItems: [], // Store the cart items here
    };
  },
  computed: {
    computedFilteredFoods() {
      if (this.selectedFilter === 'Main Dishes') {
        return this.foods.filter(food => this.mainDishes.includes(food.title));
      } else if (this.selectedFilter === 'Desserts') {
        return this.foods.filter(food => this.desserts.includes(food.title));
      }
      return this.foods;
    },
  },
  methods: {
    applyFilter() {
      if (this.selectedFilter === 'Main Dishes') {
        this.filter = 'Pizza, Burger, Pasta, Sushi';
      } else if (this.selectedFilter === 'Desserts') {
        this.filter = 'Curry, Steak, Salad, Sandwich';
      } else {
        this.filter = '';
      }
    },
    applySearch() {
      this.searchQuery = this.searchQuery.trim();
    },
    fetchData() {
      axios
        .get('http://localhost:3000/menu')
        .then(response => {
          this.foods = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    addToCart(food) {
      this.cartItems.push(food);
    },
    calculateTotalPrice() {
      return this.cartItems.reduce((total, item) => total + item.price * item.count, 0);
    },
    removeFromCart(food) {
  const confirm = inject('@zapadale/vue3-confirm-dialog');
  confirm({
    title: 'Confirm your action',
    message: 'Do you want to remove this item from your cart?',
    button: {
      no: 'No',
      yes: 'Yes'
    },
    callback: (confirm) => {
      if (confirm) {
        const index = this.cartItems.indexOf(food);
        if (index > -1) {
          this.cartItems.splice(index, 1);
          alert('Item removed from cart successfully!');
        }
      }
    }
  });
}


  },
  created() {
    const urlParams = new URLSearchParams(window.location.search);
    this.filter = urlParams.get('filter') || '';
    this.fetchData();
  },
  
};
</script> -->
<script lang="ts">
import CartCard from '../utils/cart-card.vue';
import SearchBar from '../utils/baseSearchBar.vue';
import NavBar from '../utils/navBar-user.vue';
import TotalCard from '../utils/total-card.vue';
// import { ShoppingBagIcon } from '@heroicons/vue/outline'
import { computed, ref } from 'vue';
import axios from 'axios';

export default {
  name: 'CartView',
  components: {
    CartCard,
    SearchBar,
    NavBar,
    TotalCard,
    // ShoppingBagIcon
  },
  data() {
    return {
      foods: [],
      filter: '',
      selectedFilter: '', // Initially no filter selected
      searchQuery: '',
      pageItems: ['All Categories', 'Main Dishes', 'Desserts', 'Beverages', 'Alchohol'],
      mainDishes: ['Pizza', 'Burger', 'Pasta', 'Sushi'],
      desserts: ['Curry', 'Steak', 'Salad', 'Sandwich']
    };
  },
  computed: {
    computedFilteredFoods() {
      if (this.selectedFilter === 'Main Dishes') {
        return this.foods.filter(food => this.mainDishes.includes(food.title));
      } else if (this.selectedFilter === 'Desserts') {
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
      } else if (this.selectedFilter === 'Desserts') {
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
    fetchData() {
      axios
        .get('http://localhost:3000/menu')
        .then(response => {
          this.foods = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    }
  },
  created() {
    const urlParams = new URLSearchParams(window.location.search);
    this.filter = urlParams.get('filter') || '';
    this.fetchData();
  }
}
</script>


<template>
    <div class="py-4">
      <NavBar></NavBar>
      <div class="px-8">
        <h4 class="bg-white w-full h-20 rounded-lg shadow-sm pt-6 pl-8 flex font-medium text-xl text-green mt-24">
          Items you picked
        </h4>
      </div>
      <div class="flex">
        <div class="m-4 py-4 w-2/3">
          <CartCard
            v-for="food in computedFilteredFoods"
            :key="food.id"
            :title="food.title"
            :type="food.name"
            :price="food.price"
            :image="food.image"
          ></CartCard>
        </div>
        <div class="m-4 py-16 px-8 w-1/3">
          <TotalCard
            :totalPrice="totalPrice"
            :totalItems="totalItems"
          ></TotalCard>
        </div>
      </div>
    </div>
  </template>
  
