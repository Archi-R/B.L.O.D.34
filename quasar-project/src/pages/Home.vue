<template>
    <q-page class="flex flex-center">

        <q-parallax :height="2000" :speed="1">
      
            <template v-slot:media>
                <img src="https://cdn.quasar.dev/img/parallax2.jpg" />
                <img src="https://cdn.quasar.dev/img/parallax2.jpg" />
            </template>

            <h1 class="text-white">La Beuteu</h1>

    
        </q-parallax>

        
        <div class="presentation">
            <h2>Présentation</h2>

            <div class="white-box">
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
        </div>
        
        <div class="character-details">
            <h2 class="text-white">Personnages</h2>
            
            <div class="squirrel">
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
            
            <div class="lobster">
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

<!-- 
<style>
  .q-parallax__content {
    background-color: white;
    max-width: 80%;
    padding: 0 20px;
    border-radius: .5rem;
    box-shadow: 0 0 10px rgba(0,0,0,.5);
  }

</style>

-->