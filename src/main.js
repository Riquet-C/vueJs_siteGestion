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
import {createPinia} from "pinia";


const vuetify = createVuetify({
    components,
    directives,
});

createApp(App)
    .use(vuetify)
    .use(createPinia())
    .use(router)
    .mount('#app')
