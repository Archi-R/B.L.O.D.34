<template>
  <q-page class="flex flex-center">
    <div>
      gnjfdbvuifbiu
      <!-- Carte pour la question -->
      <div class="q-mb-md">
        <!-- Ici, vous afficherez la question actuelle -->
      </div>

      <!-- Div pour l'image -->
      <div class="q-mb-md">
        <!-- Ici, vous pouvez afficher une image liée à la question -->
      </div>

      <!-- Div pour les informations -->
      <div class="q-mb-md">
        <!-- Ici, vous pouvez afficher des informations supplémentaires ou des feedbacks -->
      </div>

      <!-- Div pour le bouton Suivant -->
      <div>
        <!--<q-btn label="Suivant" @click="loadNextQuestion" />-->
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'QuestionPage',

  data() {
    return {
      currentQuestionIndex: 0,
      questions: [] // Les questions seront chargées ici
    };
  },

  methods: {
    loadNextQuestion() {
      // Incrémenter l'index de la question actuelle
      // Charger la question suivante
      // Gérer la fin du quiz si toutes les questions ont été posées
    },

    fetchQuestions() {
      // Charger les questions depuis votre backend ou un fichier local
    }
  },

  mounted() {
    this.fetchQuestions();
  }
});
</script>

<style>
/* Votre CSS ici */
</style>
