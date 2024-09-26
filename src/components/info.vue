<script>
import Reseller from "@/components/Reseller.vue";

export default {
  name: "info",
  components: {Reseller},
  props: {
    name: String,
    status: Number,
    checkedAt: String,
    id: Number,
    resellers: Array,
  }
}
</script>

<template>
  <div class="container">
  <h1>{{ name }}</h1>
  <h3 v-if="status">Produit en stock</h3>
  <h3 v-else style="color: #c0504d">Produit en rupture</h3>
  <p>Mise à jour le: {{ checkedAt.toLocaleString() }}</p>
  </div>
  <v-container>
    <v-row>
  <reseller v-for="reseller in resellers"
  :name="reseller.name"
  :description="reseller.description">
  </reseller>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>