// router.js
import { createRouter, createWebHistory } from 'vue-router';

import Arbitro from '../components/Arbitros.vue';
import Competencias from '../components/Competencias.vue';
import Equipos from '../components/Equipos.vue';
import Inicio from '../components/Inicio.vue';
import Jugadores from '../components/Jugadores.vue';
import Partidos from '../components/Partidos.vue';
import Perfil from '../components/Perfil.vue';
import Resultados from '../components/Resultados.vue';
import TablaDePosiciones from '../components/Tabla_de_posiciones.vue';
import InformacionJu from '../components/informacionJu.vue';
import Resultadosequip from '@/components/resultadosequip.vue';
import TablaCompleta from '@/components/Tabla_completa.vue';
import Login from '@/components/Login.vue'; // Asegura que esta ruta exista

const routes = [
  { path: '/Jugadores', name: 'Jugadores', component: Jugadores, meta: { requiresAuth: true } },
  { path: '/Inicio', name: 'Inicio', component: Inicio, meta: { requiresAuth: true } },
  { path: '/Arbitros', name: 'Arbitros', component: Arbitro, meta: { requiresAuth: true } },
  { path: '/Competencias', name: 'Competencias', component: Competencias, meta: { requiresAuth: true } },
  { path: '/Equipos', name: 'Equipos', component: Equipos, meta: { requiresAuth: true } },
  { path: '/Partidos', name: 'Partidos', component: Partidos, meta: { requiresAuth: true } },
  { path: '/Perfil', name: 'Perfil', component: Perfil, meta: { requiresAuth: true } },
  { path: '/Resultados', name: 'Resultados', component: Resultados, meta: { requiresAuth: true } },
  { path: '/Tabla-posiciones', name: 'Tabla-posiciones', component: TablaDePosiciones, meta: { requiresAuth: true } },
  { path: '/informacion-ju', name: 'InformacionJugador', component: InformacionJu, meta: { requiresAuth: true } },
  { path: '/resultadosequip', name: 'Resultadosequip', component: Resultadosequip, meta: { requiresAuth: true } },
  { path: '/tabla-completa', name: 'TablaCompleta', component: TablaCompleta, meta: { requiresAuth: true } },
  { path: '/login', name: 'login', component: Login },
];

const router = createRouter({
  history: createWebHistory('/'), // Forzar '/' para evitar problemas en Railway
  routes
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('loggedIn');

  if (to.name === 'login') {
    next();
  } else if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;