<template>
  <v-container>
    <h2 class="ma-12 pt-12">Ajouter un fournisseur</h2>
    <form @submit.prevent="submit" class="ma-12">
      <v-text-field
          v-model="name.value.value"
          :counter="10"
          :error-messages="name.errorMessage.value"
          label="Name"
      ></v-text-field>

      <v-text-field
          v-model="latitude.value.value"
          :counter="10"
          :error-messages="latitude.errorMessage.value"
          label="Latitude"
      ></v-text-field>

      <v-text-field
          v-model="longitude.value.value"
          :counter="10"
          :error-messages="longitude.errorMessage.value"
          label="Longitude"
      ></v-text-field>

      <v-select
          v-model="select.value.value"
          :error-messages="select.errorMessage.value"
          :items="items"
          label="Produit disponible ?"
      ></v-select>

      <v-btn
          class="me-4"
          type="submit"
      >
        submit
      </v-btn>

      <v-btn @click="handleReset">
        clear
      </v-btn>
    </form>
  </v-container>
</template>

<script setup>
import {ref} from 'vue'
import {useField, useForm} from 'vee-validate'
import * as yup from 'yup';
import axios from "axios";

const validationSchema = yup.object({
  name: yup.string().required('Name is required').min(2, 'Name needs to be at least 2 characters.'),
  latitude: yup.string().required('Latitude is required').min(1, 'latitude is required'),
  longitude: yup.string().required('Longitude is required').min(1, 'longitude is required'),
  select: yup.string().required('Please select an item.'),
});

const {handleSubmit, handleReset} = useForm({
  validationSchema,
});

const name = useField('name')
const select = useField('select')
const latitude = useField('latitude')
const longitude = useField('longitude')


const items = ref([
  'Disponible',
  'Indisponible',
])

const submit = handleSubmit(values => {
  const status = values.select === 'Disponible' ? true : false;
  axios.post('https://suppliers.depembroke.fr/api/suppliers', {
    name: values.name,
    checkedAt: new Date(),
    status: status,
    latitude: values.latitude,
    longitude: values.longitude
  })
      .then(response => {
        console.log('Réponse du serveur:', response.data);
        handleReset();
      })
      .catch(error => {
        console.error('Erreur lors de l\'envoi:', error.response.data);
      });
})
</script>