<template>
  <div class="container">
    <h1>Carte des fournisseurs</h1>
  </div>
  <div class="map-container">
    <LMap :zoom="zoom" :center="center" style="height: 400px; width: 100%;">
      <LTileLayer :url=url></LTileLayer>
      <LMarker v-for="supplier in suppliers" :lat-lng="[supplier.latitude, supplier.longitude]"
               :key="supplier.id"></LMarker>

    </LMap>
  </div>
  <ErrorLoading :error="error" :loading="loading"></ErrorLoading>
</template>

<script>
import {LMap, LMarker, LTileLayer} from "@vue-leaflet/vue-leaflet";
import axios from 'axios';
import ErrorLoading from "@/components/ErrorLoading.vue";

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
      zoom: 5,
      center: [46.5322, 2.9482],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      suppliers: null,
      error: null,
      loading: true,
    };
  },
  created() {
    axios
        .get("https://suppliers.depembroke.fr/api/suppliers")
        .then(response => {
          this.suppliers = response.data.data.map(supplier => ({
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
