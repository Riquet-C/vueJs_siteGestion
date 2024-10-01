<script>
import emailjs from 'emailjs-com';

export default {
  name: "FormContact",
  data() {
    return {
      name: '',
      email: '',
      message: '',
      valid: false,
      snackbar: false,
      snackbarMessage: '',
    }
  },
  methods: {
    sendMail(){
      if (this.$refs.form.validate()) {
        const templateParams = {
          name: this.name,
          email: this.email,
          message: this.message,
        };

        emailjs.send(
            'service_zi0ahxr',        // Remplace par ton ID de service
            'template_4oy74jp',       // Remplace par ton ID de modèle
            templateParams,
            'lFXc507Uh5RYgBYbt'
        )
            .then((response) => {
              this.snackbarMessage = 'Email envoyé avec succès !';
              this.resetForm();
            }, (error) => {
              this.snackbarMessage = 'Échec de l\'envoi de l\'email. Veuillez réessayer.';
            })
            .finally(() => {
              this.snackbar = true;
            });
      }
    },
    resetForm() {
      this.name = '';
      this.email = '';
      this.message = '';
      this.$refs.form.reset();
    }
  }
}
</script>

<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
          v-model="name"
          :rules="[v => !!v || 'Le nom est requis']"
          label="Nom"
          required
      ></v-text-field>
      <v-text-field
          v-model="email"
          :rules="[v => !!v || 'L\'email est requis', v => /.+@.+/.test(v) || 'Email invalide']"
          label="Email"
          required
      ></v-text-field>
      <v-textarea
          v-model="message"
          :rules="[v => !!v || 'Le message est requis']"
          label="Message"
          required
      ></v-textarea>
      <v-btn :disabled="!valid" color="primary" @click="sendMail">Envoyer</v-btn>
    </v-form>
    <v-snackbar v-model="snackbar" :timeout="4000">
      {{ snackbarMessage }}
    </v-snackbar>
  </v-container>
</template>

<style scoped>

</style>