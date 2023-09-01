<style>
    @import '@/assets/main.css';
</style>
<template>
    <div class="container items-center mx-auto bg-green-500 pl-72 pt-24 pb-12">
      <div class="container w-3/4 max-h-max bg-white content-center py-8 px-8 rounded-3xl flex flex-row ">
        <div class="sign-up-left w-1/2 flex flex-col items-center">
          <div class="logo pr-48">
            <img class="w-32 h-32" src="../assets/dine ease logo color.png" alt="">
          </div>
          <div class="sign-up-form w-2/3 ">
            <h1 class="font-sans text-3xl text-center font-semibold pb-4 ">Register</h1>
            <label for="reg-form" class="text-gray-700 pt-3 font-medium text-sm">Name</label><br>
            <input type="text" class="w-full border-lgray border-2 rounded-md p-1 hover:border-green"><br>
            <label for="reg-form" class="text-gray-700 pt-3 font-medium text-sm">Email</label><br>
            <input type="text" class="w-full border-lgray border-2 rounded-md p-1 hover:border-green"><br>
            <label for="reg-form" class="text-gray-700 pt-3 font-medium text-sm">Mobile</label><br>
            <input type="text" class="w-full border-lgray border-2 rounded-md p-1 hover:border-green"><br>
            <label for="reg-form" class="text-gray-700 pt-3 font-medium text-sm">Password</label><br>
            <input type="password" class="w-full border-lgray border-2 rounded-md p-1 hover:border-green"><br>
            <label for="reg-form" class="text-gray-700 pt-3 font-medium text-sm">Confirm Password</label><br>
            <input type="password" class="w-full border-lgray border-2 rounded-md p-1 hover:border-green"><br>
            <input type="button" value="Register" class="w-full  font-semibold py-2 px-4 cursor-pointer rounded-md my-4   bg-green pb-2 pt-2.5 text-normal leading-normal text-white hover:text-lgreen transition duration-150 ease-in-out hover:bg-hover-green  focus:bg-green active:bg-green">
            <p class="text-black font-light flex justify-center text-sm ">Already have an account? &nbsp; <a href="#" class="text-green">Login</a></p>
          <div class="sign-up-form w-2/3">
            <h1 class="font-sans text-3xl text-center font-semibold pb-4">Register</h1>
            <label for="name" class="text-gray-700 pt-3 font-medium text-sm">Name</label><br>
            <input 
                v-model="formData.name" 
                type="text"     
                id="name" 
                :class="{
                'w-full border-lgray border-2 rounded-md p-1 hover:border-green': true,
                'border-red': errors.name
                }"><br>
                <p v-if="errors.name" class="text-red font-medium text-sm pb-2">
                {{ errors.name }}
                </p>
            <label for="email" class="text-gray-700 pt-3 font-medium text-sm">Email</label><br>
            <input 
                v-model="formData.email" 
                type="text" 
                id="email" 
                :class="{
                'w-full border-lgray border-2 rounded-md p-1 hover:border-green': true,
                'border-red': errors.email
                }"><br>
                <p v-if="errors.email" class="text-red font-medium text-sm pb-2">
                {{ errors.email }}
                </p>
            <label for="mobile" class="text-gray-700 pt-3 font-medium text-sm">Mobile</label><br>
            <input 
                v-model="formData.mobile" 
                type="text" 
                id="mobile" 
                :class="{
                'w-full border-lgray border-2 rounded-md p-1 hover:border-green': true,
                'border-red': errors.mobile
                }"><br>
                <p v-if="errors.mobile" class="text-red font-medium text-sm pb-2">
                {{ errors.mobile }}
                </p>
            <label for="password" class="text-gray-700 pt-3 font-medium text-sm">Password</label><br>
            <input 
                v-model="formData.password" 
                type="password" 
                id="password" 
                :class="{
                'w-full border-lgray border-2 rounded-md p-1 hover:border-green': true,
                'border-red': errors.password
                }"><br>
                <p v-if="errors.password" class="text-red font-medium text-sm pb-2">
                {{ errors.password }}
                </p>
            <label for="confirm-password" class="text-gray-700 pt-3 font-medium text-sm">Confirm Password</label><br>
            <input 
                v-model="formData.confirmPassword" 
                type="password" 
                id="confirm-password" 
                :class="{
                'w-full border-lgray border-2 rounded-md p-1 hover:border-green': true,
                'border-red': errors.confirmPassword
                }"><br>
                <p v-if="errors.confirmPassword" class="text-red font-medium text-sm pb-2">
                {{ errors.confirmPassword }}
                </p>
            <button 
                type="button" 
                value="Register" 
                @click="signupUser()" 
                class="w-full font-semibold py-2 px-4 cursor-pointer rounded-md my-4 bg-green pb-2 pt-2.5 text-normal leading-normal text-white hover:text-lgreen transition duration-150 ease-in-out hover:bg-hover-green focus:bg-green active:bg-green">
                Register</button>
            <p class="text-black font-light flex justify-center text-sm">Already have an account? <a href="/login" class="text-green">Login</a></p>
            <div class="or flex items-center my-4">
                <hr class="flex-grow border-gray-400">
                <p class="mx-4 text-gray-700 text-sm">OR</p>
                <hr class="flex-grow border-gray-400">
            </div>
            <button class="flex justify-center border-2 border-green p-2 rounded">
                <img class="w-1/12" src="../assets/google.png" alt="">
                <p class="ml-2 text-sm">Continue with Google</p>
            </button>
        </div>
        </div>
        <div class="sign-up-right w-1/2" >
          <!-- Add content for the right side if needed -->
          <div id="carouselExampleIndicators" class="relative" data-te-carousel-init data-te-carousel-slide>
                <!--Carousel indicators-->
                <div class="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0" data-te-carousel-indicators>
                    <button type="button" data-te-target="#carouselExampleIndicators"
                    data-te-slide-to="0"
                    data-te-carousel-active
                    class="mx-[5px] box-content h-[5px] w-[5px] rounded- flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[200ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-current="true"
                    aria-label="Slide 1"></button>
                    <button
                    type="button"
                    data-te-target="#carouselExampleIndicators"
                    data-te-slide-to="1"
                    class="mx-[5px] box-content h-[5px] w-[5px] rounded flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[200ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-label="Slide 2"></button>
                    <button
                    type="button"
                    data-te-target="#carouselExampleIndicators"
                    data-te-slide-to="2"
                    class="mx-[5px] box-content h-[5px] w-[5px] rounded flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[200ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-label="Slide 3"></button>
                </div>

                <!--Carousel items-->
                <div class="relative w-full after:clear-both after:block after:content-['']">
                    <!--First item-->
                    <div
                    class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item
                    data-te-carousel-active>
                    <img
                        src="../assets/images/1.png"
                        class="block w-full h-max "
                        alt="Wild Landscape" />
                    </div>
                    <!--Second item-->
                    <div
                    class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item>
                    <img
                        src="../assets/images/2.png"
                        class="block w-full"
                        alt="Camera" />
                    </div>
                    <!--Third item-->
                    <div
                    class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item>
                    <img
                        src="../assets/images/3.png"
                        class="block w-full"
                        alt="Exotic Fruits" />
                    </div>
                </div>
            </div>
        </div>
      </div>
      <!-- Loding screen start -->
      <div
          v-if="loading"
          class="fixed inset-0 flex flex-col items-center justify-center z-[9999] bg-black bg-opacity-75 text-white"
        >
          <p class="text-lg">Please Wait...</p>
          <div class="mt-4">
            <div class="animate-spin rounded-full h-10 w-10 border-t-4 border-blue"></div> <!-- Loading spinner -->
          </div>
        </div>
        <!-- Loding screen end -->
    </div>
  </template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SignUp',
    data() {
        return {
            title: 'Sign Up Page',
            formData: {
                name: '',
                email: '',
                mobile: '',
                password: '',
                confirmPassword: '',
            },
            errors: {
            name: '',
            email: '',
            mobile: '',
            password: '',
            confirmPassword: '',
            }as Record<string, string>, // Explicitly type the properties,
            loading: false
        };
    },
    methods: {
        async signupUser() {
        this.resetValidationErrors(); // Reset error messages before validation
        const isValid = this.validateForm(); // Validate the form

        if (!isValid) {
            return; // Don't proceed if validation fails
        }

        console.log(this.formData.email, this.formData.password);
        try {
            // Set loading to true
            this.loading = true;

            const response = await fetch('https://dineease-api.azurewebsites.net/api/user', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: 'username',
                name: this.formData.name,
                address: 'address',
                phone: this.formData.mobile,
                email: this.formData.email,
                authentication: {
                password: this.formData.password,
                },
            }),
            });

            // Reset loading state
            this.loading = false;

            if (response.status === 201) {
                console.log('Signup successful, handle accordingly');
                this.navigateToHome();
            } else if (response.status === 400) {
            // Handle 400 status code
                const responseBody = await response.json();
                this.errors.email = 'Email already exists';
                this.errors.password = '';
                this.errors.confirmPassword = '';
                this.formData.password = ''; // Clear the password field
                this.formData.confirmPassword = ''; // Clear the confirm password field
                console.log('Signup failed, handle error', response.status);
            } else {
                console.log('Signup failed, handle error', response.status);
            }
        } catch (error) {
            console.log('Handle error (e.g., display error message)', error);
        }
    },
    // Validate the form and update error messages
    validateForm() {
        let isValid = true;

        if (!this.formData.name) {
        this.errors.name = 'Name is required';
        isValid = false;
        }

        if (!this.formData.email) {
        this.errors.email = 'Email is required';
        isValid = false;
        } else if (!this.isValidEmail(this.formData.email)) {
        this.errors.email = 'Invalid email format';
        isValid = false;
        }

        if (!this.formData.mobile) {
        this.errors.mobile = 'Mobile is required';
        isValid = false;
        }

        if (!this.formData.password) {
        this.errors.password = 'Password is required';
        isValid = false;
        }

        if (!this.formData.confirmPassword) {
        this.errors.confirmPassword = 'Confirm Password is required';
        isValid = false;
        } else if (this.formData.password !== this.formData.confirmPassword) {
        this.errors.confirmPassword = 'Passwords do not match';
        isValid = false;
        }

        return isValid;
    },

    // Check if the email is in a valid format
    isValidEmail(email: string): boolean {
    // Implement your email validation logic here
    // For simplicity, a basic check is shown below
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
    },

    // Reset validation errors
    resetValidationErrors() {
        for (const field in this.errors) {
        this.errors[field] = '';
        }
    },

    // ... existing methods ...
    navigateToHome() {
      window.location.href = '/Home'; // Change the URL to match your home.vue route
    }
    },
});
import { Carousel, initTE } from "tw-elements";

initTE({ Carousel });

export { Carousel };
</script>