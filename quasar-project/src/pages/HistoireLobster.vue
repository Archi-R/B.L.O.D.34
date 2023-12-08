<template>
    <q-page class="flex flex-center">
        <IntroductionTest />
    </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IntroductionTest from 'components/Histoire/Introduction.vue';




export default defineComponent({ 
    name: 'Histoire-page',
    components: {
        IntroductionTest,
    },

  
});
</script>


