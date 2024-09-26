<template>
  <div class="container">
    <h1>Carte des fournisseurs</h1>
  </div>
  <div class="map-container">
    <LMap :zoom="zoom" :center="[center[0].latitude, center[0].longitude]" style="height: 600px; width: 100%;">
      <LTileLayer :url=url></LTileLayer>
      <LMarker v-for="supplier in suppliers" :lat-lng="[supplier.latitude, supplier.longitude]"
               :key="supplier.id"></LMarker>
    </LMap>
  </div>
  <ErrorLoading :error="error" :loading="loading"></ErrorLoading>
</template>

<script>
import ErrorLoading from "@/components/ErrorLoading.vue";
import {LMap, LMarker, LTileLayer} from "@vue-leaflet/vue-leaflet";
import axios from "axios";
import {useRoute} from "vue-router";

export default {
  name: "SuppliersMap",
  components: {
    ErrorLoading,
    LMarker,
    LMap,
    LTileLayer,
  },
  data() {
    return {
      zoom: 6,
      center: null,
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      suppliers: null,
      error: null,
      loading: true,
      id: Number(useRoute().params.id),
    };
  },
  created() {
    axios
        .get("https://suppliers.depembroke.fr/api/suppliers")
        .then(response => {
          this.suppliers = response.data.data
              .map(supplier => ({
                latitude: supplier.latitude,
                longitude: supplier.longitude
              }));
          this.center = response.data.data
              .filter(supplier => supplier.id === this.id)
              .map(supplier => ({
                id: supplier.id,
                latitude: supplier.latitude,
                longitude: supplier.longitude
              }));
        })
        .catch(error => this.error = "Erreur dans le chargement des fournisseurs" + error.message)
        .finally(() => {
          this.loading = false;
        })
  }
};
</script>

<style scoped>

</style>