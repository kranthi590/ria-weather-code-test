import { createApp } from 'vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import store from './store';
import vuetify from "./plugins/vuetify.js";

// Vue.config.productionTip = false

createApp(App)
    .use(vuetify)
    .use(store)
    .mount("#app");

