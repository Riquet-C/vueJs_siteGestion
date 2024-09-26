<script>
import {format} from "timeago.js";
import ErrorLoading from "@/components/ErrorLoading.vue";
import Supplier from "@/components/Supplier.vue";
import axios from "axios";
import {useRoute} from "vue-router";
import Info from "@/components/info.vue";
import Reseller from "@/components/Reseller.vue";

export default {
  name: "SupplierInfo",
  methods: {format},
  components: {Reseller, Info, ErrorLoading, Supplier},
  data() {
    return {
      suppliers: null,
      resellers: null,
      error: null,
      loading: true,
      id: Number(useRoute().params.id),
    }
  },
  created() {
    axios
        .get("https://suppliers.depembroke.fr/api/suppliers")
        .then(response => {
          this.suppliers = response.data.data
              .filter(supplier => supplier.id === this.id)
              .map(supplier => ({
                id: supplier.id,
                name: supplier.name,
                status: supplier.status,
                checkedAt: supplier.checkedAt,
                resellers: supplier.resellers,
              }));
          this.resellers = response.data.data
              .filter(supplier => supplier.id === this.id)
              .map(supplier => ({
                resellers: supplier.resellers.map(reseller => ({
                  id: reseller.id,
                  name: reseller.name,
                  description: reseller.description,
                }))
              }))
          console.log(this.suppliers)
          console.log(this.resellers)
        })
        .catch(error => this.error = error.message)
        .finally(() => {
          this.loading = false;
        })
  }
}
</script>

<template>
  <info v-for="supplier in suppliers"
        :name="supplier.name"
        :checked-at="supplier.checkedAt"
        :status="supplier.status"
        :id="supplier.id"
        :resellers="supplier.resellers">
  </info>
</template>

<style scoped>

</style>