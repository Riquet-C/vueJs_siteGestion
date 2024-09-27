<template>
  <div class="container">
    <h1>Carte des fournisseurs</h1>
  </div>
  <div class="map-container">
    <LMap :zoom="zoom" :center="[center[0].latitude, center[0].longitude]" style="height: 600px; width: 100%;">
      <LTileLayer :url=url></LTileLayer>
      <LMarker v-for="supplier in suppliers" :lat-lng="[supplier.latitude, supplier.longitude]"
               :key="supplier.id">
        <l-popup>
          <h1>{{ supplier.name }}</h1>
          <h3 v-if="supplier.status">Produit en stock</h3>
          <h3 v-else style="color: #c0504d">Produit en rupture</h3>
          <p>Mise à jour le: {{ supplier.checkedAt }}</p>
        </l-popup>
      </LMarker>
    </LMap>
  </div>
  <ErrorLoading :error="error" :loading="loading">
  </ErrorLoading>
</template>

<script>
import ErrorLoading from "@/components/ErrorLoading.vue";
import {LMap, LMarker, LPopup, LTileLayer} from "@vue-leaflet/vue-leaflet";
import {useRoute} from "vue-router";
import {useStore} from "@/stores/myStore.js";
import {computed, onMounted, ref} from "vue";

export default {
  name: "SuppliersMap",
  components: {
    LPopup,
    ErrorLoading,
    LMarker,
    LMap,
    LTileLayer,
  },
  setup() {
    const supplierStore = useStore();
    let center = ref([45, 30]);
    let id = Number(useRoute().params.id);
    onMounted(() => {
      supplierStore.fetchSuppliers();
    });
    return {
      suppliers: computed(() => supplierStore.suppliers),
      loading: computed(() => supplierStore.loading),
      error: computed(() => supplierStore.error),
      zoom: 6,
      center: computed(() => {
        return supplierStore.suppliers
            .filter(supplier => supplier.id === id)
            .map(supplier => ({
              id: supplier.id,
              latitude: supplier.latitude,
              longitude: supplier.longitude
            }));
      }),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    };
  }
};
</script>
