<script>
export default {
  data() {
    return {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus consectetur libero a ultricies?',
      number:0,
      answer:'Nulla facilisi',
      // answers:[
      //   { id: 0, text: "Answer 0" },
      //   { id: 1, text: "Answer 1" },
      //   { id: 2, text: "Answer 2" },
      //   { id: 3, text: "Answer 3" }
      // ],
    }
  }
}
</script>

<template>
  <q-card flat bordered>
    <q-card-section class="number">
      <div>question #{{number}}</div>
      <div class="question">{{question}}</div>
    </q-card-section>

    <q-card-section class="answers">

    </q-card-section>

  </q-card>
</template>