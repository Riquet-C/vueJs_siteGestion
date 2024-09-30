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
      <supplier v-if="!suppliersCopy" v-for="supplier in displayedSuppliers"
                :key="supplier.id"
                :name="supplier.name"
                :status="supplier.status"
                :id="supplier.id"
                :checked-at="format(supplier.checkedAt)"
                :image="`https://picsum.photos/200?random=${supplier.id}`">
      </supplier>
    </v-row>
    <div class="text-center">
      <v-pagination
          v-model="page"
          :length="suppliers.length/6"
          :records="25"
          :per-page="6"
          circle
      ></v-pagination>
    </div>
  </v-container>
  <ErrorLoading :error="error" :loading="loading"></ErrorLoading>
</template>

<script>
import Supplier from "@/components/Supplier.vue";
import {format} from 'timeago.js';
import ErrorLoading from "@/components/ErrorLoading.vue";
import {useStore} from "@/stores/myStore.js";
import {computed, onMounted, ref} from "vue";
import Pagination from 'v-pagination-3';

export default {
  name: "SuppliersList",
  methods: {format},
  components: {ErrorLoading, Supplier, Pagination},
  setup() {
    const supplierStore = useStore();
    const selected = ref("Tous les fournisseurs");
    let suppliersCopy = ref(null);
    const page = ref(1);
    const perPage = 6;

    onMounted(() => {
      supplierStore.fetchSuppliers();
    });

    const filteredSuppliers = computed(() => {
      if (selected.value === "Tous les fournisseurs") {
        suppliersCopy.value = null
        return supplierStore.suppliers;
      } else {
        return supplierStore.suppliers.filter(supplier => supplier.status === 1);
      }
    })

    const paginate = (suppliers) => {
      const start = (page.value - 1) * perPage;
      return suppliers.slice(start, start + perPage);
    };

    const displayedSuppliers = computed(() => {
      return paginate(filteredSuppliers.value);
    });

    return {
      suppliers: computed(() => supplierStore.suppliers),
      loading: computed(() => supplierStore.loading),
      error: computed(() => supplierStore.error),
      suppliersCopy,
      items: ["Tous les fournisseurs", "Produits en stock"],
      selected,
      page,
      displayedSuppliers
    };
  }
};
</script>
