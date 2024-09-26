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
import ErrorLoading from "@/components/ErrorLoading.vue";
import {useStore} from "@/stores/myStore.js";
import {computed, onMounted, ref, watch} from "vue";

export default {
  name: "SuppliersList",
  methods: {format},
  components: {ErrorLoading, Supplier},
  setup() {
    const supplierStore = useStore();
    const selected = ref("Tous les fournisseurs");
    let suppliersCopy = ref(null);
    onMounted(() => {
      supplierStore.fetchSuppliers();
    });

    watch(selected, () => {
      filteredSelector();
      console.log(selected.value);
    });

    const filteredSelector = () => {
      if (selected.value === "Tous les fournisseurs") {
        suppliersCopy.value = null
        return supplierStore.suppliers;
      } else {
        suppliersCopy.value = supplierStore.suppliers.filter(supplier => supplier.status === 1)
      }
    }

    return {
      suppliers: computed(() => supplierStore.suppliers),
      loading: computed(() => supplierStore.loading),
      error: computed(() => supplierStore.error),
      suppliersCopy,
      items: ["Tous les fournisseurs", "Produits en stock"],
      selected,
    };
  }
};
</script>

<style scoped>

</style>