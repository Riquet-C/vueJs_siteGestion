import { createApp } from 'vue'
import './assets/main.css'
import 'leaflet/dist/leaflet.css';
import router from './router/router.js'

import App from './App.vue'
import '@mdi/font/css/materialdesignicons.css';


import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';


const vuetify = createVuetify({
    components,
    directives,
});

createApp(App)
    .use(vuetify)
    .use(router)
    .mount('#app')
