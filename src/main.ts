import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Quasar } from 'quasar';
import router from './router';
import quasarLang from 'quasar/lang/ru';
import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';
import './assets/scss/tailwind.css';
import App from './App.vue';


const pinia = createPinia();
const app = createApp(App);

app
  .use(Quasar, {
    plugins: {},
    lang: quasarLang,
  })
  .use(pinia)
  .use(router)
  .mount('#app');
