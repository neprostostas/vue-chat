import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import router from "@/router/routes";
import {createPinia} from 'pinia';
const pinia = createPinia()

createApp(App).use(Quasar, quasarUserOptions).use(pinia).use(router).mount('#app')
