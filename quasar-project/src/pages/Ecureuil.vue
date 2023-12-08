<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="max-width: 400px">
      <div class="text-h5 text-center q-mb-md">Bienvenue au QCM!</div>

      <!-- Espace pour le texte explicatif -->
      <div class="q-mb-md">
        <p>Ce QCM va tester vos connaissances sur différents sujets. Chaque question a plusieurs choix, mais une seule réponse correcte. Bonne chance !</p>
      </div>

      <!-- Espace pour l'image -->
      <transition name="slide-fade">
        <div class="q-mb-md woosh" v-if="isVisible">
          <img src="../../public/icons/squirrel.png" alt="Image descriptive" style="width: 100%; height: auto;">
        </div>
      </transition>

      <div class="trigger" vue-observe-visibility="handleVisibility">
        <q-btn label="trigger" color="primary" @click="handleVisibility" />
      </div>

      <!-- Bouton Démarrer -->
      <q-btn label="Démarrer" color="primary" @click="startQuiz" />
    </div>
  </q-page>
</template>


<style>
  .slide-fade-enter-active {
    transition: all 0.8s ease-in-out;

  }

  .slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(-50px) ;
    opacity: 0;
  }
</style>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      isVisible:false as boolean
    }
  },
  name: 'EcureuilFront',
  methods: {
    handleVisibility(this: { isVisible: boolean }){
      this.isVisible = !this.isVisible;
    },
    startQuiz() {
      // Logique pour démarrer le QCM
      // Par exemple, naviguer vers une autre page ou changer l'état du composant
      console.log("Démarrage du QCM");
    }
  },
});
</script>

