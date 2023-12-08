<template>
    <q-page class="flex flex-center">
      
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

    </q-page>
  </template>
  
  
  <style>
    .testCard {
        background-color: var(--q-secondary);
        width: 25rem;
        height: 20rem;
        border-radius: 2rem;
        display: flex;
        justify-content: top;
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
  
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'CardFront',
  });
  </script>