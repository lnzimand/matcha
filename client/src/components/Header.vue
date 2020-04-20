<template>
    <VAppBar fixed dense color="blue">
        <v-toolbar-title class="mr-4">
            <span
              class="home"
              @click="navigateTo({name: 'root'})">
                 Matcha
            </span>
        </v-toolbar-title>
        <v-toolbar-items>
            <v-btn flat class="cyan" dark>Browse</v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn
            v-if="!$store.state.isUserLoggedIn"
            flat class="cyan" dark @click="navigateTo({name: 'login'})">Sign In</v-btn>
        </v-toolbar-items>
        <v-toolbar-items>
            <v-btn
            v-if="!$store.state.isUserLoggedIn"
            flat class="cyan" dark @click="navigateTo({name: 'register'})">Sign Up</v-btn>
        </v-toolbar-items>
    </VAppBar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
    .home {
        cursor: pointer;
    }

    .home:hover {
        color: aqua;
    }
</style>
