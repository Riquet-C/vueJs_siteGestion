<script>
import {defineComponent} from "vue";
import NavBar from "@/components/Nav.vue";

export default defineComponent({
  components: {NavBar}
})
</script>

<template>
  <v-app>
  <header>
<NavBar></NavBar>
  </header>
  <main>
  </main>
  <router-view></router-view>
  </v-app>
</template>

<style>

</style>