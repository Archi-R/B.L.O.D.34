<template>
  <q-layout view="lHh Lpr fff" class="q-ma-none">
    <q-header>
      <q-toolbar class="primary">
        <q-toolbar-title>B.L.O.D.34</q-toolbar-title>
        <q-btn flat @click="$router.push('/')">Accueil</q-btn>
        <q-btn flat @click="$router.push('/Sources')">Sources</q-btn>
        <q-btn flat @click="$router.push('/Presentez-nous')">Présentez-nous !</q-btn>
        <!-- Bouton Thème avec menu déroulant -->
        <q-btn-dropdown
          flat
          label="Thème"
          v-model="selectedTheme"
          :options="themeOptions"
          emit-value
          map-options
          @input="changeTheme"
        />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
    <q-footer>
     <q-toolbar class="container">
        <div>
          <img class="logo" src="../../public/icons/logo.png" alt="">
          <!-- <q-btn flat @click="$router.push('/')">Accueil</q-btn>
          <q-btn flat @click="$router.push('/Sources')">Sources</q-btn>
          <q-btn flat @click="$router.push('/Presentez-nous')">Présentez-nous !</q-btn> -->
        </div>
        <div>
        <ul class="liste">
          <li>Archi</li>
          <li>Cerzen</li>
          <li>Colibry</li>
          <li>Cyrers</li>
          <li>DryloXx</li>
          <li>Fynewix</li>
          <li>Hypo</li>
          <li>Kazeno</li>
          <li>Zeph</li>
        </ul>
      </div>
     </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import {ref, createApp } from 'vue';
import KonamiCode from 'vue3-konami-code';


import QcmCard from '../components/QcmCard.vue'

export default {
  components:{
  },
  name: 'MainLayout',
  data() {
    return {

      selectedTheme: ref(),
      themeOptions: [
        { label: 'Par défaut', value: 'default' },
        { label: 'Sombre', value: 'dark' },
        // Ajoutez d'autres options de thème selon vos besoins
      ],
    };
  },
  methods: {
    changeTheme(theme:string) {
      // Utiliser Quasar's Theme API pour changer le thème

      // Recharger la page
      //this.$router.go(0);
    },
  },
  setup() {
    const app = createApp({});
    app.use(KonamiCode, { onKonamiCodeEntered: ()=>  window.location.href = 'https://www.youtube.com/watch?v=OgZzUJud3Q4' });
  },
};
</script>

<style>
.container{
  justify-content: space-between;
}

.liste{
  list-style-type: none;
  display:flex;
  flex-direction: row;
  justify-content: space-between;

}

.liste li {
  padding-left: 20px;
}

.logo{
  width: 6%;
}
</style>
