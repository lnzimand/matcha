<template>
  <v-sheet
    height="400"
    class="overflow-hidden"
    style="position: relative;"
  >
    <v-container class="fill-height">
      <v-row
        align="center"
        justify="center"
      >
        <v-btn
          color="blue"
          dark
          @click.stop="drawer = !drawer"
        >
          Welcome
        </v-btn>
      </v-row>
    </v-container>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Matcha</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-content>
            <v-list-item-title>
              <!-- <span> -->
                <router-link :to="item.name">
                  {{ item.title }}
              </router-link>
              <!-- </span> -->
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-sheet>
</template>

<script>
export default {
  data () {
    return {
      drawer: null,
      items: [
        { title: 'Register', name: 'register' },
        { title: 'Login', name: 'login' },
        { title: 'About', name: 'about' }
      ],
      methods: {
        navigateTo (route) {
          this.$router.push(route)
        }
      }
    }
  }
}
</script>
