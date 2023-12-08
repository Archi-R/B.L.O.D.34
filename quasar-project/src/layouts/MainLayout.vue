<template>
  <q-layout view="lHh Lpr fff">
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
        <q-btn flat @click="$router.push('/')">Accueil</q-btn>
        <q-btn flat @click="$router.push('/Sources')">Sources</q-btn>
        <q-btn flat @click="$router.push('/Presentez-nous')">Présentez-nous !</q-btn>
        <div>
        <ul class="liste">
          <li>Archi |&nbsp;</li>
          <li>Cerzen |&nbsp;</li>
          <li>Colibry |&nbsp;</li>
          <li>Cyrers |&nbsp;</li>
          <li>DryloXx |&nbsp;</li>
          <li>fynewix |&nbsp;</li>
          <li>hypo |&nbsp;</li>
          <li>Kaze no Uta |&nbsp;</li>
          <li>Zeph</li>

        </ul>
      </div>
     </q-toolbar>
    </q-footer>



  </q-layout>
</template>

<script lang="ts">
import {ref } from 'vue';
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
};
</script>

<style>
.container{
  justify-content: space-between;
}

.liste{
  width: 100%;
  list-style-type: none;
  display:flex;
  flex-direction: row;
  justify-content: space-between;

}
</style>
