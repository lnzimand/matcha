<template>
  <v-container>
    <v-flex xs6 offset-xs3>
      <v-form>
        <v-container fluid>
          <v-toolbar flat dense class="blue">
            <v-toolbar-title>
              Register
            </v-toolbar-title>
          </v-toolbar>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                :rules="[rules.required]"
                v-model="firstname"
                label="First Name"
                single-line
                solo
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                :rules="[rules.required]"
                v-model="lastname"
                label="Last Name"
                single-line
                solo
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                :rules="[rules.required]"
                v-model="username"
                label="Username"
                single-line
                solo
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                :rules="[rules.required]"
                v-model="mail"
                type="email"
                label="Email"
                single-line
                solo
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                :rules="[rules.required, rules.min]"
                type="password"
                v-model="password"
                label="Password"
                hint="At least 4 characters"
                single-line
                solo
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                :rules="[rules.required, rules.pMatch]"
                type="password"
                v-model="confirmPassword"
                label="Confirm Password"
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
            <v-btn class="blue" @click="register">Register</v-btn>
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
      firstname: '',
      lastname: '',
      username: '',
      mail: '',
      password: '',
      confirmPassword: '',
      error: null,
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 4 || 'Min 4 characters',
        pMatch: () => this.password === this.confirmPassword || 'Password don\'t match'
      }
    }
  },
  methods: {
    async register () {
      try {
        const response = await authenticationService.register({
          mail: this.mail,
          firstname: this.firstname,
          lastname: this.lastname,
          username: this.username,
          password: this.password,
          confirmPassword: this.confirmPassword
        })
        this.$store.dispatch('setUser', response.data.user)
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
