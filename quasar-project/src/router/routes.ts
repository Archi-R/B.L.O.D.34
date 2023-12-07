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
  }
];

export default routes;
