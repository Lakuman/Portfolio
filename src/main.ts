import './assets/main.css'
import { createApp } from 'vue';
import App from './App.vue';
import i18n from "./i18n"; // Import du fichier i18n

const app = createApp(App);

app.use(i18n); // Ajout de i18n à l'application
app.mount('#app');
