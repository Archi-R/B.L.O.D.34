import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [

// Main page of the site,
  {
    path: '/',
    component : () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue')},
      { path: 'Ecureuil', component: () => import('pages/Ecureuil.vue')},
      { path: 'Lobster', component: () => import('pages/Lobster.vue')},
      { path: 'Questions', component: () => import('pages/Questions.vue')},
    ]
  },

  {
    path:'/api/questions/:id',// RECUP ID DU COMPONENT
    component:()=>import("layouts/MainLayout.vue"),//????
    children: [{path: '', component: () => import('pages/Question.vue')}]
  }
];

export default routes;
