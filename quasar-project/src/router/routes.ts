import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [

// Main page of the site,
  {
    path: '/',
    component : () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Home.vue')}]
  },

  {
    path:'/Ecureuil',
    component:()=>import("layouts/MainLayout.vue"),
    children: [{path: '', component: () => import('pages/Ecureuil.vue')}]
  },

  {
    path:'/Lobster',
    component:()=>import("layouts/MainLayout.vue"),
    children: [{path: '', component: () => import('pages/Lobster.vue')}]
  },

  {
    path:'/Presentez-nous',
    component:()=>import("layouts/MainLayout.vue"),
    children: [{path: '', component: () => import('pages/Presentez-nous.vue')}]
  },

  {
    path:'/Sources',
    component:()=>import("layouts/MainLayout.vue"),
    children: [{path: '', component: () => import('pages/Sources.vue')}]
  },

  // Redirection vers la page erreur lorsque'on ne trouve pas la page
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
