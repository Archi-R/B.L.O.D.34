<template class="main">
  <q-page class="flex flex-center">
    <div class="background-with-filter">
    <!-- Carte pour la question -->
    <div class="top">
      <div class="testCard" v-if="questions.length > 0" id="carte">
        <div class="question">{{ questions[currentQuestionIndex].question }}</div>

        <div class="answers">
          <div v-for="(answer, index) in questions[currentQuestionIndex].choices" :key="index">
            <input type="radio" :id="'answer' + index" :name="'question' + currentQuestionIndex" :disabled="showExplanation" @click="selectAnswer(index)">
            <label :for="'answer' + index">{{ answer }}</label>
            <img v-if="showExplanation && index === questions[currentQuestionIndex].answer" src="/icons/verifier.png" class="correctness">
            <img v-else-if="showExplanation && index === selectedAnswerIndex && index !== questions[currentQuestionIndex].answer" src="/icons/traverser.png" class="correctness">
          </div>
        </div>

        <div class="button-next" @click="loadexplication">
          <img class="img-next" src="../../public/icons/suivant.png">
        </div>
      </div>

      <div class="top-right">
          <!-- Div pour l'image -->
        <div class="q-mb-md" id="imageEK">
          <img class="ekirey" :src="'../../public/icons/EK' + (currentQuestionIndex + 1) + '.png'">
        </div>

        <!-- Div pour les informations -->
        <div class="q-mb-md" id="infos" v-if="showExplanation">
          {{ questions[currentQuestionIndex].explanation }}
        </div>
      </div>
    </div>
      <!-- Div pour le bouton Suivant -->
      <div class="q-mb-md" id="btn_suiv" v-if="showExplanation">
        <q-btn label="Suivant" @click="loadNextQuestion" style="border: 2px solid white;"/>
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
      questions: [] as any[],// Les questions seront chargées ici
      showExplanation: false,
      selectedAnswerIndex: -1
    };
  },

  methods: {
    selectAnswer(index : number) {
        this.selectedAnswerIndex = index;
    },
    loadNextQuestion() {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
        this.showExplanation = false;
        this.selectedAnswerIndex = -1;
      } else {
        // Gérer la fin du quiz ici
        alert('Fin du quiz');
      }
    },

    loadexplication() {
      this.showExplanation = true;
      // logique qui affiche le texte d'explication
      // et le bouton
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
.main {
  display: flex;
  justify-content: center;
  align-items: center;
}
.testCard {
  background-color: var(--q-secondary);
  width: 25rem;
  height: 20rem;
  border-radius: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  position: relative;
  top: 0.5rem;
}
.question {
  color: #F5F5F5;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
}
#infos{
  color: #F5F5F5;
  font-size: 1rem;
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
  width: 1em; /* Taille de l'icône */
  height: 1em; /* Taille de l'icône */
  vertical-align: middle; /* Alignement avec le texte */
}

.background-with-filter {
  width: 100%;
  height: 90vh;
  overflow: auto;
}
#btn_suiv {
  margin-top: 2rem;
  margin-right: 3rem;
  color: white;
  font-size: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.top {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: line;
}
#infos {
  margin-top: 2rem;
  margin-left: 3rem;
  margin-right: 3rem;
  color: white;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
#imageEK {
  margin-top: 2rem;
  margin-left: 3rem;
  margin-right: 3rem;
  color: white;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
}
#imageEK img{
  height: 20rem;
  width: 20rem;
}
.top-right {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60%;
  margin-left: 3rem;
}
/*
@media only screen and (max-width: 620px) {
  For mobile phones {
    .question, #imageEK, #infos, #btn_suiv {
      width: 100%;
      // responsive imcomplet
    }
  }
}*/
.background-with-filter::before {
  /* background-color:#e5e5e5; */
  background: url("../../public/icons/TreeBackground.jpg") center/cover no-repeat;
  z-index: -1;
  filter: brightness(50%);
  -webkit-filter: brightness(50%);
  text-align: center;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
