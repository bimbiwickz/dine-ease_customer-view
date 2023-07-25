<template>
    <div class="sign-up-box">
        <div class="sign-up-left">
            <div class="logo">
                <img src="../assets/dine ease logo color.png" alt="">
            </div>
            <div class="sign-up-form">
                <h1>Register</h1>
                <label for="reg-form">Name</label>
                <input type="text">
                <label for="reg-form">Email</label>
                <input type="text">
                <label for="reg-form">Contact Number</label>
                <input type="text">
                <label for="reg-form">Password</label>
                <input type="text">
                <label for="reg-form">Confirm Password</label>
                <input type="text">
                <input type="button" value="Register">
                <p>Already have an account? <a href="#">Login</a></p>
                <div class="or">
                    <hr>
                    <p>OR</p>
                    <hr>
                </div>
                <button>
                    <img src="../assets/google.png" alt="">
                    <p>Continue with Google</p>
                </button>
            </div>
        </div>
        <div class="sign-up-right">
            
        </div>
    </div>
    <div>
        <h1>{{ title }}</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SignUp',
    data() {
        return {
            title: 'Sign Up Page'
        };
    }
});
</script>