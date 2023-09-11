<template>
  <div class="container items-center mx-auto bg-green-500 pl-12 md:pl-24 lg:pl-32 xl:pl-72 pt-12 pb-12">
    <div class="container max-h-max bg-white content-center py-8 px-8 rounded-3xl flex flex-row">
      <div class="sign-up-left flex flex-col items-center">
        <div class="logo pr-48 mx-auto">
          <img class="w-32 h-32" src="../assets/dine-ease-logo-color.png" alt="" />
        </div>
        <div class="sign-up-form w-2/3">
          <h2 class="text-center text-2xl text-gray-800 font-bold">Login</h2>
          <form class="mt-8">
            <div>
              <label for="email" class="text-sm font-bold text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                class="w-full border-b-2 border-gray-400 py-2 text-lg text-gray-800 mt-1 focus:outline-none focus:border-green-500"
                placeholder="Enter your email"
              />
            </div>
            <div class="mt-6">
              <label for="password" class="text-sm font-bold text-gray-600">Password</label>
              <input
                type="password"
                id="password"
                class="w-full border-b-2 border-gray-400 py-2 text-lg text-gray-800 mt-1 focus:outline-none focus:border-green-500"
                placeholder="Enter your password"
              />
            </div>
            <div class="mt-6">
              <button
                type="submit"
                class="w-full py-3 bg-green-500 rounded-md text-white font-bold text-lg focus:outline-none hover:bg-green-600"
              >
                Log In
              </button>
            </div>
            <div class="flex items-center justify-center mt-6">
              <span class="text-gray-600">Have not registered yet?</span>
              <a href="#" class="text-green-500 ml-2 font-bold hover:text-green-700">Sign up</a>
            </div>
            <div class="flex items-center justify-center mt-6">
              <span class="text-gray-600">Or log in with</span>
              <button
                type="button"
                class="ml-2 bg-white border border-gray-300 rounded-md p-2 hover:bg-gray-100 focus:outline-none"
              >
                <img class="w-5 h-5" src="../assets/google-icon.png" alt="Google" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="sign-up-right">
        <!-- Content for the right side of the login window -->
      </div>
    </div>
  </div>
</template>

<style>
/* Add any additional styles you need */
</style>


<script lang="ts">
import { defineComponent } from 'vue'
// import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'LogIn',
  data() {
    return {
      title: 'Log In Page',
      email: '',
      password: '',
      showError: false, // Track if error should be shown
      errorMessage: '', // Store the error message
      loading: false,
      userID: null, // Initialize userID as null
    }
  },
  methods: {
    async loginUser() {
      console.log(this.email, this.password);
      try {
        if (!this.email || !this.password) {
          // Display error messages for empty fields
          this.showError = true;
          // this.errorMessage = '';
          return; // Stop further execution
        }

        // Reset error state and clear error message
        this.showError = false;
        this.errorMessage = '';

        // Set loading to true
        this.loading = true;

        const response = await fetch(
          'https://dineease-api.azurewebsites.net/api/auth',
          {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: this.email,
              password: this.password
            })
          }
        );
        // Reset loading state
        this.loading = false;

        if (response.status === 202) {
          console.log('Login successful, handle accordingly');
          // Reset error state and clear error message
          this.showError = false;
          this.errorMessage = '';
          const responseData = await response.json();
          this.userID = responseData.userID; // Modify this line
          this.$router.push('/managerhome'); 
        } else if (response.status === 401) {
          // Display error message and turn input boxes red
          this.showError = true;
          this.errorMessage = 'Email or password is incorrect';
        } else {
          console.log('Login failed, handle error', response.status);
        }
      } catch (error) {
        console.log('Handle error (e.g., display error message)', error);
      }
},

    navigateToHome() {
      window.location.href = '/Home'; // Change the URL to match your home.vue route
    }
  }
})
import { Carousel, initTE } from 'tw-elements'

initTE({ Carousel })

export { Carousel }
</script>
