import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [

// Main page of the site,
{
  path: '/',
  component : () => import('layouts/MainLayout.vue'),
  children: [
    { path: '/', component: () => import('pages/Home.vue')},
    { path: 'questions', component: () => import('pages/QuestionsPage.vue') },
    { path: 'Ecureuil', component: () => import('pages/Ecureuil.vue')},
    { path: 'Lobster', component: () => import('pages/Lobster.vue')},
    { path: 'Questions', component: () => import('pages/Questions.vue')},
    
  ]
},
  // dans le cas ou on ne trouve pas la page
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },

];

export default routes;
