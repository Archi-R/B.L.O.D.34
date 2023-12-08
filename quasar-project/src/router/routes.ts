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
      { path: 'Lobster', component: () => import('pages/lobster.vue')},
      { path: 'Questions', component: () => import('pages/Questions.vue')},
      { path: 'Presentez-nous', component: () => import('pages/Presentez-nous.vue')},
      { path: 'Histoire', component: () => import('pages/HistoireLobster.vue')},
    ]
  },
    {
      path: '/Histoire',
      component : () => import('layouts/MainLayout.vue'),
      children: [
        { path: '', component: () => import('pages/HistoireLobster.vue')},
        { path : 'Introduction', component: () => import('components/Histoire/Introduction.vue')},
        { path : 'Gulfstream', component: () => import('components/Histoire/CheminGulfstream.vue')},
        { path : 'Acidification', component: () => import('components/Histoire/CheminAcidification.vue')},
        { path : 'Dechet', component: () => import('components/Histoire/CheminDechet.vue')},
        { path : 'Eolienne', component: () => import('components/Histoire/CheminEolienne.vue')},
        { path : 'Petrole', component: () => import('components/Histoire/CheminDeversementPetrole.vue')},
        { path : 'Epave', component: () => import('components/Histoire/CheminEpave.vue')},
        { path : 'Perturbations', component: () => import('components/Histoire/CheminPerturbation.vue')},
        { path : 'PriseMesure', component: () => import('components/Histoire/CheminPriseMesure.vue')},
      ] 
    },
      {
      path:'/api/questions/:id',// RECUP ID DU COMPONENT
      component:()=>import("layouts/MainLayout.vue"),//????
      children: [{path: '', component: () => import('pages/Question.vue')}]
    }
];

export default routes;
