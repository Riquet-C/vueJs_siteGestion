<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Liste des fournisseurs</h1>
        <ErrorLoading :error="error" :loading="loading" />
      </v-col>
    </v-row>
    <v-row>
      <supplier
          v-for="supplier in suppliers"
          :key="supplier.id"
          :name="supplier.name"
          :status="supplier.status"
          :id="supplier.id"
          :checked-at="format(supplier.checkedAt)"
          :image="`https://picsum.photos/200?random=${supplier.id}`"
      />
    </v-row>
  </v-container>
</template>

<script>
import { useStore } from '@/stores/myStore.js';
import {computed, onMounted} from 'vue';
import Supplier from '@/components/Supplier.vue';
import ErrorLoading from '@/components/ErrorLoading.vue';
import {format} from "timeago.js";

export default {
  name: 'SuppliersList',
  methods: {format},
  components: { Supplier, ErrorLoading },
  setup() {
    const supplierStore = useStore();

    onMounted(() => {
      supplierStore.fetchSuppliers();
    });

    return {
      suppliers: computed(() => supplierStore.suppliers),
      loading: computed(() => supplierStore.loading),
      error: computed(() => supplierStore.error)
    };
  },
};
</script>

<style scoped>
</style>
