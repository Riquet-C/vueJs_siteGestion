<template>
      <v-app-bar prominent>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Spiruline Shop</v-toolbar-title>

        <v-spacer></v-spacer>


        <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
      </v-app-bar>

      <v-navigation-drawer
          v-model="drawer"
          :location="$vuetify.display.mobile ? 'bottom' : undefined"
          temporary
      >
        <v-list>
          <v-list-item>
            <router-link class="router-link" to="/suppliers" >Voir la liste</router-link>
          </v-list-item>
          <v-list-item>
            <router-link class="router-link" to="/map">Voir la carte</router-link>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
  })
}
</script>

<style>
.router-link {
  text-decoration: none; /* Supprime le soulignement */
  color: inherit; /* Prend la couleur du texte parent */
}
</style>