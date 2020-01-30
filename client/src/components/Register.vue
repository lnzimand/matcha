<template>
  <div>
    <h1>Register</h1>
    <input type="text" v-model="fname" name="fname" placeholder="First Name"><br>
    <input type="text" v-model="surname" name="surname" placeholder="Surname"><br>
    <input type="text" v-model="email" name="email" placeholder="Email"><br>
    <input type="password" name="password" placeholder="Password"><br>
    <input type="password" name="confirmPassword" placeholder="Confirm Password"><br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import authenticationService from '@/services/authenticationService'
export default {
  data () {
    return {
      fname: '',
      surname: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    async register () {
      const response = await authenticationService.register({
        email: this.email,
        fname: this.fname,
        surname: this.surname,
        password: this.password,
        confirmPassword: this.confirmPassword
      })
      console.log(response.data)
    }
  }
}
</script>
