<template>
  <v-container>
  <v-row>
    <v-col class="mt-12">
      <v-sheet class="pa-4 mt-12" elevation="1" >
       <p>Carte  des fournisseurs </p>
      </v-sheet>
    </v-col>
  </v-row>
  </v-container>
  <v-container>
    <LMap :zoom="zoom" :center="center" style="height: 600px; width: 100%;">
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
    <ErrorLoading :error="error" :loading="loading">
    </ErrorLoading>
  </v-container>
</template>

<script>
import {LMap, LMarker, LTileLayer, LPopup} from "@vue-leaflet/vue-leaflet";
import ErrorLoading from "@/components/ErrorLoading.vue";
import {useStore} from "@/stores/myStore.js";
import {computed, onMounted, ref} from "vue";

export default {
  name: "SuppliersMap",
  components: {
    ErrorLoading,
    LMarker,
    LMap,
    LTileLayer,
    LPopup
  },
  setup() {
    const supplierStore = useStore();
    let center = ref([45, 30]);
    onMounted(() => {
      supplierStore.fetchSuppliers();
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
              center.value = [position.coords.latitude, position.coords.longitude]
            }
        )
      } else {
        center.value = [45, 48]
      }
    });
    return {
      suppliers: computed(() => supplierStore.suppliers),
      loading: computed(() => supplierStore.loading),
      error: computed(() => supplierStore.error),
      zoom: 6,
      center,
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    };
  }
};
</script>

