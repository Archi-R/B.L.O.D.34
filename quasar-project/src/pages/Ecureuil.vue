<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="max-width: 400px">
      <div class="text-h5 text-center q-mb-md">Bienvenue au QCM!</div>

      <!-- Espace pour le texte explicatif -->
      <div class="q-mb-md">
        <p>Ce QCM va tester vos connaissances sur différents sujets. Chaque question a plusieurs choix, mais une seule réponse correcte. Bonne chance !</p>
      </div>

      <!-- Espace pour l'image -->
      <transition name="fade-slide">
        <div class="q-mb-md woosh" key="woosh" v-if="isVisible">
          <img src="../../public/icons/squirrel.png" alt="Image descriptive" style="width: 100%; height: auto;">
        </div>
      </transition>

      <div class="trigger" vue-observe-visibility="handleVisibility">
        <q-btn label="trigger" color="primary" @click="handleVisibility" />
      </div>

      <!-- Bouton Démarrer -->

      <q-btn flat @click="$router.push('/EQuestions')">Démarrer le questionnaire</q-btn>
    </div>
  </q-page>
</template>


<style>
.fade-slide-enter-active,
.fade-slide-leave-active
{
  transform: translateX(-100%);
  transition: transform 0.5s , opacity 0.5s;
}

.fade-slide-enter,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  transition: opacity 0.5s, transform 0.5s;

}
</style>


<script lang="ts">
import VueObserveVisibility from 'vue-observe-visibility';
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
  directives:{
    'observe-visibility': VueObserveVisibility as any
  }
});
</script>

<!-- .woosh{
}

.slide-enter-active,
.slide-leave-active {
  transform: translateX(-310%);
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-310%);
}

</style>


<script lang="ts">
import VueObserveVisibility from 'vue-observe-visibility';
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
  directives:{
    'observe-visibility': VueObserveVisibility as any
  }
});
</script> -->
