<script>
export default {
  data() {
    return {
      products: [
        {
          name: "Spiruline en Poudre",
          description: "100% pure spiruline, idéale pour les smoothies et les jus.",
          image: "https://imgs.search.brave.com/VCUQ8gNY2OEcjhNX5uVeBgyQ_FE4beTooy4_8wJ5xJ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDF2aERTTUhwOEwu/anBn",
        },
        {
          name: "Spiruline en Tablettes",
          description: "Facile à prendre, pour une cure quotidienne.",
          image: "https://imgs.search.brave.com/UMWms6d44B5mwk6yCSnHJyfQN4Cb80vo0XA_w7AAp-o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJhbmNlLXNwaXJ1/bGluZS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTgvMDUv/c3BpcnVsaW5lLTEw/MC1nZWx1bGVzLTMu/anBn",
        },
        {
          name: "Spiruline Bio",
          description: "Certifiée biologique, respectant les standards les plus élevés.",
          image: "https://imgs.search.brave.com/As9oYjAmfWuxbQRsewk_2h_G7MMtLjxavQGlBEKxV7k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bmF0ZXNpcy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MTAvZy1zcGlydWxp/bmUtYmlvLTkwLXYw/Mi02MDB4NzU3LTEu/anBn",
        },
      ],
    };
  },
  methods: {
    viewProduct(product) {
      alert(`Détails du produit : ${product.name}`);
    },
  },
};
</script>

<template>
    <v-app>
      <v-main>
        <v-container fluid class="fill-height d-flex align-center justify-center hero-section">
          <v-row class="text-center">
            <v-col>
              <h1 class="display-2 font-weight-bold white--text">Bienfaits de la Spiruline</h1>
              <p class="white--text">Découvrez les vertus d'une algue naturelle pleine de nutriments</p>
              <v-col>
                <v-btn color="teal-darken-4">
                  <router-link class="router-link" to="/suppliers" >Voir la liste de nos fournisseurs</router-link>
                </v-btn>
              </v-col>
              <v-col>
              <v-btn color="teal-darken-4">
                <router-link class="router-link" to="/map">Voir la carte</router-link>
              </v-btn>
              </v-col>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row class="my-12 text-center">
            <v-col cols="12">
              <h2 class="mb-4">Pourquoi Choisir Notre Spiruline?</h2>
              <p>Notre spiruline est cultivée dans des conditions naturelles, sans pesticides ni OGM. Profitez d'une qualité supérieure qui vous apporte tous les nutriments essentiels pour rester en forme et en bonne santé.</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col v-for="(product, index) in products" :key="index" cols="12" sm="6" md="4">
              <v-card>
                <v-img :src="product.image" height="200px"></v-img>
                <v-card-title>{{ product.name }}</v-card-title>
                <v-card-subtitle>{{ product.description }}</v-card-subtitle>
                <v-card-actions>
                  <v-btn color="teal-darken-4" @click="viewProduct(product)">Voir produit</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row class="text-center">
            <v-col cols="12">
              <h2>Contactez-nous</h2>
              <p>Vous avez des questions ? N'hésitez pas à nous contacter via notre formulaire ou appelez-nous directement !</p>
              <v-btn large color="teal-darken-4">Nous contacter</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-main>

    </v-app>
</template>

<style>
.hero-section {
  background-image: url('https://imgs.search.brave.com/FsaW_P9LxvP0i8KmMO7-RO0fITRoYfhtD2mm4_3_wpY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGF2aWVjbGFpcmUu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzAxL2RlY291/dnJlei1sYS1zcGly/dWxpbmUuanBnLndl/YnA');
  background-size: cover;
  color: white;
  background-position: center;
  height: 400px;
}

.router-link {
  text-decoration: none;
  color: white;
}
</style>