<script setup lang="ts">
import title_2 from "../landing_page_components/second_main_title.vue"
import page_footer from "../landing_page_components/footer.vue";
const components = {
  title_2,
  page_footer
};
</script>
<template>
    <div>
        <title_2 title_2="Our Menu"/>
      <div class="flex justify-end p-4 rounded-lg items-center">
        <a href="/customer/CartView"><button class="bg-[#007400] hover:bg-gray-500 text-white py-2 px-4 rounded-lg">Go to the cart</button></a>
      </div>
  
      <menu-item
        v-for="item in menuItems"
        :key="item.id"
        :image-src="item.imageSrc"
        :item-name="item.name"
        :price="item.price"
        :type="item.type"
      ></menu-item>
    </div>

    <page_footer/>
  </template>
  
  <script lang="ts">
  import MenuItem from './MenuItem.vue';
  export default {
    components: {
      MenuItem
    },
    data() {
      return {
        menuItems: [
          {
            id: 1,
            imageSrc: 'https://bing.com/th?id=OSK.4265399d17816e86e691710f63433e4b',
            name: 'Pollo alla Marengo',
            price: '$4400',
            type: 'Pescatarian'
          },
          {
            id: 2,
            imageSrc: 'https://veganinthefreezer.com/wp-content/uploads/2020/08/Spicy-roasted-new-Potatoes-1200-sq-possiblr-feature-sp.jpg',
            name: 'Spicy Mexican potatoes',
            price: '$4400',
            type: 'Italian'
          },
          {
            id: 3,
            imageSrc: 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/shaikh.khalid7-gmail.com/Chicken_Momos_Recipe_Delicious_Steamed_Chicken_Dumplings.jpg',
            name: 'Chicken momo',
            price: '$4400',
            type:'Asian'
          },
          // Add more items here
        ]
      };
    }
  };
  </script>
  