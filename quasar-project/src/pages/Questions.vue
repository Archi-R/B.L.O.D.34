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
import axios from 'axios';

export default defineComponent({
  name: 'QuestionPage',

  data() {
    return {
      currentQuestionIndex: 0,
      questions: [] as any[]// Les questions seront chargées ici
    };
  },

  methods: {
    loadNextQuestion() {
      // Incrémenter l'index de la question actuelle
      // Charger la question suivante
      // Gérer la fin du quiz si toutes les questions ont été posées
    },

    async fetchQuestions() {
      try {
        const response = await axios.get('http://localhost:3000/questions'); // Remplacez par l'URL de votre API
        this.questions = response.data;
      } catch (error) {
        console.error('Erreur lors de la récupération des questions:', error);
        alert('Erreur lors de la récupération des questions');
      }
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
