<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="max-width: 400px">
      <div class="text-h5 text-center q-mb-md">Bienvenue au QCM!</div>

      <!-- Espace pour le texte explicatif -->
      <div class="q-mb-md">
        <p>Ce QCM va tester vos connaissances sur différents sujets. Chaque question a plusieurs choix, mais une seule réponse correcte. Bonne chance !</p>
      </div>

      <!-- Espace pour l'image -->
      <div class="q-mb-md">
        <img src="lien_vers_votre_image.jpg" alt="Image descriptive" style="width: 100%; height: auto;">
      </div>

      <!-- Bouton Démarrer -->
      <q-btn label="Démarrer" color="primary" @click="startQuiz" />
    </div>
  </q-page>
</template>


<style>
/* Ajoutez ici des styles supplémentaires si nécessaire */
</style>


<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'EcureuilFront',
  methods: {
    startQuiz() {
      // Logique pour démarrer le QCM
      // Par exemple, naviguer vers une autre page ou changer l'état du composant
      console.log("Démarrage du QCM");
    }
  }
});
</script>
