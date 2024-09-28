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
          <h2>{{ name }}</h2>
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
          <v-btn color="teal-darken-4  ma-2">
            <router-link class="router-link" :to="`/supplier/${id}`">En savoir plus</router-link>
          </v-btn>
          <v-btn color="teal-darken-4 ma-2">
            <router-link class="router-link" :to="`/supplierMap/${id}`">See in Map</router-link>
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
.router-link {
  text-decoration: none; /* Supprime le soulignement */
  color: white; /* Prend la couleur du texte parent */
}

h2 {
  color: #00796B;
}

h3 {
  color: #80CBC4;
}
</style>