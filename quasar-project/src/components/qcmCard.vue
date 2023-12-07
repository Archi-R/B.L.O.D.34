<script>
export default {
  data() {
    return {
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus consectetur libero a ultricies?',
        number:0,
        answer:"Nulla facilisi"
    }
  }
}
</script>

<template>
  <input v-model="text" placeholder="Type here">
  <p>{{ text }}</p>
</template>