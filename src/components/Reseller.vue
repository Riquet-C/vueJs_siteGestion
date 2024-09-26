<script>
export default {
  name: "Reseller",
  props: {
    name: String,
    description: String,
  }
}
</script>

<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-col cols="12"  sm="6" md="4">
      <v-card
          class="mx-auto"
          max-width="500"
          v-bind="props"
      >
        <v-card-text>
          <h1>{{ name }}</h1>
          <p>{{ description }}</p>
        </v-card-text>

        <v-card-title>
          <span class="text-primary text-subtitle-2">64 Reviews</span>
        </v-card-title>

      </v-card>
    </v-col>
  </v-hover>
</template>

<style scoped>

</style>