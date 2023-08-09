<template>
    <div>
      <input v-model="username" placeholder="Username">
      <input type="password" v-model="password" placeholder="Password">
      <button @click="login">Login</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      login() {
        // Simulate a successful login with user roles
        if (this.username === 'user' && this.password === 'password') {
          const role = 'user'; // Change the role based on your use case
          localStorage.setItem('loggedIn', 'true');
          localStorage.setItem('userRole', role);
          this.$router.push('/dashboard'); // Redirect to dashboard based on role
        } else if (this.username === 'admin' && this.password === 'adminpassword') {
          const role = 'admin'; // Change the role based on your use case
          localStorage.setItem('loggedIn', 'true');
          localStorage.setItem('userRole', role);
          this.$router.push('/admin'); // Redirect to admin page based on role
        } else {
          alert('Login failed');
        }
      },
    },
  };
  </script>
  