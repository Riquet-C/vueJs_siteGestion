<template>
    <v-hover v-slot="{ isHovering, props }">
      <v-col cols="12"  sm="6" md="4">
      <v-card
          class="mx-auto"
          max-width="500"
          v-bind="props"
      >
        <v-img :src="image"></v-img>
        <v-card-text>
          <h1>{{ name }}</h1>
          <h3 v-if="status">Produit en stock</h3>
          <h3 v-else style="color: #c0504d">Produit en rupture</h3>
          <p>Mise à jour le: {{ checkedAt }}</p>
        </v-card-text>

        <v-card-title>
          <span class="text-primary text-subtitle-2">64 Reviews</span>
        </v-card-title>

        <v-overlay
            :model-value="!!isHovering"
            class="align-center justify-center"
            scrim="#036358"
            contained
        >
          <v-btn variant="flat">
            <router-link :to="`/supplier/${id}`">En savoir plus</router-link>
          </v-btn>
          <v-btn variant="flat">
            <router-link :to="`/supplierMap/${id}`">See in Map</router-link>
           </v-btn>
        </v-overlay>
      </v-card>
      </v-col>
    </v-hover>
</template>

<script>
export default {
  name: "Supplier",
  props: {
    name: String,
    status: Number,
    checkedAt: String,
    id: Number,
    image: String,
  }
}
</script>

<style scoped>
h1 {
  color: rgba(39, 14, 63, 0.55);
}

h3 {
  color: rgb(156, 117, 196);
}
</style>