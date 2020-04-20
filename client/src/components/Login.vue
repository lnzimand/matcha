<template>
  <v-container>
    <v-flex xs6 offset-xs3>
      <v-form>
        <v-container fluid>
          <v-toolbar flat dense class="blue">
            <v-toolbar-title>
              Login
            </v-toolbar-title>
          </v-toolbar>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="username"
                label="Username"
                single-line
                solo
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                type="password"
                v-model="password"
                label="Password"
                single-line
                solo
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" sm="6">
              <span class="red--text" v-html="error"></span>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-btn class="blue" @click="login">Login</v-btn>
          </v-row>
        </v-container>
      </v-form>
    </v-flex>
  </v-container>
</template>
<script>
import authenticationService from '@/services/authenticationService'

export default {
  data () {
    return {
      username: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await authenticationService.login({
          username: this.username,
          password: this.password
        })
        this.$store.dispatch('setUser', response.data.user)
        this.$store.dispatch('setLoggedIN', response.data.loggedIn)
      } catch (error) {
        console.log(error)
        this.error = error.response.data.error
      }
    }
  }
}
</script>
<style scoped>
  .v-input {
    height: 50px;
  }
</style>
