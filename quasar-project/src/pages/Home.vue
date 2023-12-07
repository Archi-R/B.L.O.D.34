<template>
    <q-page class="flex flex-center">

        <q-parallax :height="2000" :speed="1">
      
            <template v-slot:media>
            </template>

            <h1 class="text-white">La Beuteu</h1>

    
        </q-parallax>

        
        <div class="presentation">
            <h2>Présentation</h2>
                <div class="pres-txt">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Scelerisque felis imperdiet proin fermentum leo vel orci porta non. 
                        Pretium fusce id velit ut tortor pretium. 
                        Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet. 
                        Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo. 
                        Molestie ac feugiat sed lectus vestibulum. Massa enim nec dui nunc mattis enim. 
                        Consequat semper viverra nam libero justo laoreet sit amet. 
                        Elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi. 
                        Neque sodales ut etiam sit amet nisl purus in mollis. 
                        Suspendisse sed nisi lacus sed viverra tellus in hac habitasse.
                    </p>
            </div>
        </div>
        
        <div class="character-details">
            <h2>Personnages</h2>
            
            <div class="characters-container">
                <div class="squirrel-character-box">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Scelerisque felis imperdiet proin fermentum leo vel orci porta non. 
                Pretium fusce id velit ut tortor pretium. 
                Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet. 
                Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo. 
                Molestie ac feugiat sed lectus vestibulum. Massa enim nec dui nunc mattis enim. 
                Consequat semper viverra nam libero justo laoreet sit amet. 
                Elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi. 
                Neque sodales ut etiam sit amet nisl purus in mollis. 
                Suspendisse sed nisi lacus sed viverra tellus in hac habitasse.
                </p>
            </div>

            
            <div class="lobster-character-box">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Scelerisque felis imperdiet proin fermentum leo vel orci porta non. 
                Pretium fusce id velit ut tortor pretium. 
                Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet. 
                Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo. 
                Molestie ac feugiat sed lectus vestibulum. Massa enim nec dui nunc mattis enim. 
                Consequat semper viverra nam libero justo laoreet sit amet. 
                Elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi. 
                Neque sodales ut etiam sit amet nisl purus in mollis. 
                Suspendisse sed nisi lacus sed viverra tellus in hac habitasse.
                </p>
            </div>
            </div> 
        </div>

    <div class="characters-image">
      <img src=/quasar-project/public/icons/squirrel.jpg>
      <img src=/quasar-project/public/icons/blue-lobster.jpg>
    </div>

        
    </q-page> 

    <q-layout view="lHh Lpr fff">
        <q-btn flat @click="$router.push('/Lobster')">Lobster</q-btn>
        <q-btn flat @click="$router.push('/Ecureuil')">Ecureuil</q-btn>
    </q-layout>
 
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeFront',
    
});
</script>

<style>

/* Présentation */

.presentation {
    display: flex;
    flex-direction: column;
    background-color: black;
    max-width: 80%;
    border-radius: 1rem;
}

.presentation h2 {
    color: white;
    text-align: center;
    margin: 0;
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.presentation .pres-txt p{
    color: white;
    text-align: center;
    margin: 0;
    padding: 1rem;
    /* justify the text */
    text-align: justify;
}

/* Personnages */

.character-details {
    display: flex;
    flex-direction: column;
    background-color: black;
    max-width: 80%;
    border-radius: 1rem;
}

.character-details h2 {
    color: white;
    text-align: center;
    margin: 0;
    padding-top: 1rem;
    padding-bottom: 1rem;
}

/* characters- */

</style>
