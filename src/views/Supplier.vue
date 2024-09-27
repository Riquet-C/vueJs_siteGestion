<script>
import {format} from "timeago.js";
import ErrorLoading from "@/components/ErrorLoading.vue";
import Supplier from "@/components/Supplier.vue";
import axios from "axios";
import {useRoute} from "vue-router";
import Info from "@/components/info.vue";
import Reseller from "@/components/Reseller.vue";
import {useStore} from "@/stores/myStore.js";
import {computed, onMounted, ref} from "vue";
import reseller from "@/components/Reseller.vue";

export default {
  name: "SupplierInfo",
  methods: {format},
  components: {Reseller, Info, ErrorLoading, Supplier},
  setup() {
    const supplierStore = useStore();
    let id = Number(useRoute().params.id);
    onMounted(() => {
      supplierStore.fetchSuppliers();
    });
    return {
      suppliers: computed(() => {
        return supplierStore.suppliers
            .filter(supplier => supplier.id === id)
            .map(supplier => ({
              id: supplier.id,
              name: supplier.name,
              status: supplier.status,
              checkedAt: supplier.checkedAt,
              resellers: supplier.resellers,
            }));
      }),
      resellers: computed(() => {
         return supplierStore.suppliers
              .map(reseller => ({
                id: reseller.id,
                name: reseller.name,
                description: reseller.description,
              }))
      }),
      loading: computed(() => supplierStore.loading),
      error: computed(() => supplierStore.error),
      zoom: 6,
      id,
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    }
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