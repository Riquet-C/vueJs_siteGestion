
<script>
  import FormContact from "@/components/FormContact.vue";

  export default {
    components: {FormContact},
  props: {
  isOpen: {
  type: Boolean,
  default: false,
}
},
  watch: {
  isOpen: {
  immediate: true,
  handler(val) {
  this.dialog = val;
}
}
},
  data() {
  return {
  dialog: this.isOpen,
};
},
  methods: {
  closeDialog() {
  this.$emit("close");
}
}
};
</script>

<template>
  <v-dialog v-model="dialog" max-width="600">
    <v-card>
      <v-card-title>
        <span class="headline">Contactez-nous</span>
      </v-card-title>
      <v-card-text>

<FormContact></FormContact>

      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" @click="closeDialog">Fermer</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>

</style>