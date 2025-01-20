import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from './pluggins/axios'; // Asegúrate de que la ruta sea correcta
import '@fortawesome/fontawesome-free/css/all.css';

const app = createApp(App);

app.config.globalProperties.$axios = axios; // Agrega Axios a la instancia global

app.use(router).mount('#app');
