<template>
    <q-parallax :height="2400" :speed="1">
            <template v-slot:media>
                <img src="../../public/icons/planet.jpg" class="layer"/>
            </template> 

            <div class="description">
              <h2>Présentation</h2>
              <p class="texte">Qui sommes nous ?</p>
              <br>
              <p class="texte" >Nous sommes des étudiants en 4ème et 3ème année d'école d'ingénieurs, à
                l'ENSIBS.
                Le développement d'application web n'est pas notre domaine de prédilection
                mais c'est avec le plus grand des plaisirs que notre petite équipe de 9 personnes 
                s'est lancée dans le défi de la Nuit de l'Info.

                Nous n'avons pas de grandes attentes en ce qui le contenu et la forme de ce site mais
                nous avons mis tout notre coeur  l'ouvrage.
              </p>
            </div>

            <div class="presentation" :offset="50">
              <div class="grid-container">
                <div class="grid-item">
                  <h3>Cerzen</h3>
                  <img class="picture" src="../../public/icons/pp/alan.png" alt="Image 1">
                </div>

                <div class="grid-item">
                  <h3>Archi</h3>
                  <img class="picture" src="../../public/icons/pp/archi.png" alt="Image 2">
                </div>

                <div class="grid-item">
                  <h3>Colibry</h3>
                  <img class="picture" src="../../public/icons/pp/colibry.png" alt="Image 3">
                </div>

                <div class="grid-item">
                  <h3>Cyrers</h3>
                  <img class="picture" src="../../public/icons/pp/Cyrers.png" alt="Image 4">
                </div>

                <div class="grid-item">
                  <h3>Dryloxx</h3>
                  <img class="picture" src="../../public/icons/pp/Dryloxx.png" alt="Image 5">
                </div>

                <div class="grid-item">
                  <h3>Fyne</h3>
                  <img class="picture" src="../../public/icons/pp/fyne.png" alt="Image 6">
                </div>

                <div class="grid-item">
                  <h3>Hypo</h3>
                  <img class="picture" src="../../public/icons/pp/hypo.png" alt="Image 7">
                </div>

                <div class="grid-item">
                  <h3>Kazeno</h3>
                  <img class="picture" src="../../public/icons/pp/kaze.png" alt="Image 8">
                </div>

                <div class="grid-item">
                  <h3>Zeph</h3>
                  <img class="picture" src="../../public/icons/pp/zeph.png" alt="Image 9">
                </div>
              </div>
            </div>
            
    </q-parallax>
  </template>
   
  <script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'Presentez-nousFront',
      
  });
  </script>

<style>
.presentation {
  margin-top: 20px;
  text-align: center;
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0.5rem 0.5rem 1rem rgb(0, 0, 0);
}

.picture{
  border-radius: 10px;
}
.description.texte{
  font-size: 25px;
}

.description{
  max-width: 55%;
  text-align: center;
  justify-content: space-between;
  padding: 20px;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0.5rem 0.5rem 1rem rgb(0, 0, 0);
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 20px; 
}

.grid-item {
  text-align: center;
}

.grid-item img {
  max-width: 100%; 
}

</style>
  