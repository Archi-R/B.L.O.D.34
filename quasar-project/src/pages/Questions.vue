<template>
  <q-page class="flex flex-center">
    <div>
      <!-- Carte pour la question -->
      <div class="testCard">
        <div class="question">Lorem Ipsum hoooot keuval</div>

        <div class="answers">
          <input type="radio" class="answer1"> <label for="answer1">Lorem</label> <img src="../../public/icons/traverser.png" class="correctness"><br>
          <input type="radio" class="answer2"> <label for="answer2">Ipsum</label> <img src="../../public/icons/traverser.png" class="correctness"><br>
          <input type="radio" class="answer3"> <label for="answer3">hoooot</label> <img src="../../public/icons/verifier.png" class="correctness"><br>
          <input type="radio" class="answer4"> <label for="answer4">keuval</label> <img src="../../public/icons/traverser.png" class="correctness"><br>
        </div>

        <div class="button-next"><img class="img-next" src="../../public/icons/suivant.png"></div>
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
.testCard {
  background-color: var(--q-secondary);
  width: 25rem;
  height: 20rem;
  border-radius: 2rem;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  position: relative;
}
.question {
  color: #F5F5F5;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
}
.button-next {
  position: absolute;
  height: 3rem;
  width: 3rem;
  bottom: 0.5rem;
  right: 0.5rem;
}
.img-next {
  width: 3rem;
  height: 3rem;
  position: absolute;
}
.img-next:hover {
  cursor: pointer;
}
.img-next:active {
  transform: scale(0.9);
}
.answers {
  margin-top: 1rem;
  color: #F5F5F5;
  font-size: 1rem;
}
.answer1, .answer2, .answer3, .answer4 {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
.correctness {
  width: 1rem;
  height: 1rem;
  margin-left: 0.5rem;
  visibility: hidden;
}
</style>
