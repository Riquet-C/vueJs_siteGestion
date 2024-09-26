<template>
  <v-container>
    <v-row>
      <v-col class="mt-12">
        <v-sheet class="pa-4 mt-12" elevation="1">
          <p>Listes des fournisseurs</p>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-select
            label="Filtrer les fournisseurs"
            :items="items"
            v-model="selected"
            outlined
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
  <v-container>
    <v-row>
      <supplier v-if="!suppliersCopy" v-for="supplier in suppliers"
                :key="supplier.id"
                :name="supplier.name"
                :status="supplier.status"
                :id="supplier.id"
                :checked-at="format(supplier.checkedAt)"
                :image="`https://picsum.photos/200?random=${supplier.id}`">
      </supplier>
      <supplier v-else v-for="supplier in suppliersCopy"
                :key="supplier.id"
                :name="supplier.name"
                :status="supplier.status"
                :id="supplier.id"
                :checked-at="format(supplier.checkedAt)"
                :image="`https://picsum.photos/200?random=${supplier.id}`">
      </supplier>
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
  methods: {
    format,
    filteredSelector() {
      if (this.selected === "Tous les fournisseurs") {
        this.suppliersCopy = null
        return this.suppliers;
      } else {
        this.suppliersCopy = this.suppliers.filter(supplier => supplier.status === 1)
      }
    }
  },
  components: {ErrorLoading, Supplier},
  data() {
    return {
      suppliers: null,
      error: null,
      loading: true,
      suppliersCopy: null,
      items: ["Tous les fournisseurs", "Produits en stock"],
      selected: "Tous les fournisseurs"
    }
  },
  watch: {
    selected() {
      this.filteredSelector()
    },
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
        })
        .catch(error => this.error = error.message)
        .finally(() => {
          this.loading = false;
        })
  },
};
</script>

<style scoped>

</style>