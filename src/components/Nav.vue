<template>
  <v-app-bar prominent>
    <v-app-bar-nav-icon aria-label="Menu" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <v-toolbar-title>
      <router-link class="something" to="/">Spiruline Shop</router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-icon aria-label="theme sombre" class="pa-12" v-if="theme.global.current.value.dark" icon="mdi-weather-night" @click="toggleTheme"></v-icon>
    <v-icon aria-label="theme clair" class="pa-12" v-else icon="mdi-white-balance-sunny" @click="toggleTheme"></v-icon>

  </v-app-bar>

  <v-navigation-drawer
      v-model="drawer"
      :location="$vuetify.display.mobile ? 'bottom' : undefined"
      temporary>
    <v-list role="list">
      <v-list-item hover role="listitem">
        <router-link aria-label="voir la liste" class="router-link" to="/suppliers">Voir la liste</router-link>
      </v-list-item>
      <v-list-item hover role="listitem">
        <router-link aria-label="voir la carte" class="router-link" to="/map">Voir la carte</router-link>
      </v-list-item>
      <v-list-item hover role="listitem">
        <router-link aria-label="Ajouter un fournisseur" class="router-link" to="/addSupplier">Ajouter un fournisseur</router-link>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    model: true,
  })
}
</script>

<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<style scoped>
.something {
  text-decoration: none;
  color: rgba(var(--v-theme-on-something), 0.9)
}
.router-link {
  text-decoration: none;
  color: #68a59a;
  transition: color 0.3s ease;
}
.v-list-item:hover .router-link {
  color: #223737;
}
</style>
