<template>
  <div class="container">
    <h1>Listes des fournisseurs</h1>
  </div>
  <v-container>
    <v-row>
      <supplier v-for="supplier in suppliers" :key="supplier.id" :name="supplier.name" :status="supplier.status" :id="supplier.id">
                :checked-at="format(supplier.checkedAt)"></supplier>
    </v-row>
  </v-container>
  <ErrorLoading :error="error" :loading="loading"></ErrorLoading>
</template>

<script>

import Supplier from "@/components/Supplier.vue";
import {format} from 'timeago.js';
import axios from "axios";
import ErrorLoading from "@/components/ErrorLoading.vue";

export default {
  name: "SuppliersList",
  methods: {format},
  components: {ErrorLoading, Supplier},
  data() {
    return {
      suppliers: null,
      error: null,
      loading: true,
    }
  },
  created() {
    axios
        .get("https://suppliers.depembroke.fr/api/suppliers")
        .then(response => {
          this.suppliers = response.data.data.map(supplier => ({
            id: supplier.id,
            name: supplier.name,
            status: supplier.status,
            checkedAt: supplier.checkedAt,
          }));
          console.log(this.suppliers)
        })
        .catch(error => this.error = error.message)
        .finally(() => {
          this.loading = false;
        })
  }
};

</script>

<style scoped>

</style>