<template>
    <q-parallax :height="2400" :speed="1">
            <template v-slot:media>
                <img src="../../public/icons/planet.jpg" class="layer"/>
            </template> 

            <div class="description">
              <h2>Sources</h2>
              <ul>Liste des liens utilisés</ul>
              <li> <a href="https://www.statistiques.developpement-durable.gouv.fr/edition-numerique/chiffres-cles-du-climat-2022/6-emissions-de-co2-hors-utcatf#:~:text=En%202019%2C%20les%20%C3%A9missions%20de,19%20%25%20pour%20le%20gaz%20naturel.">https://www.statistiques.developpement-durable.gouv.fr/edition-numerique/chiffres-cles-du-climat-2022/6-emissions-de-co2-hors-utcatf#:~:text=En%202019%2C%20les%20%C3%A9missions%20de,19%20%25%20pour%20le%20gaz%20naturel.</a> </li>
              <li><a href="https://www.greenpeace.fr/impact-environnemental-solaire/">https://www.greenpeace.fr/impact-environnemental-solaire/</a></li>
              <li> <a href="https://www.irena.org/publications/2021/Jun/Renewable-Power-Generation-Costs-2020-Summary-FR">https://www.irena.org/publications/2021/Jun/Renewable-Power-Generation-Costs-2020-Summary-FR</a></li>
              <li><a href="https://www.irena.org/News/pressreleases/2023/Aug/Renewables-Competitiveness-Accelerates-Despite-Cost-Inflation-FR">https://www.irena.org/News/pressreleases/2023/Aug/Renewables-Competitiveness-Accelerates-Despite-Cost-Inflation-FR</a></li>
              <li><a href="https://agir.wwf.fr/urgence-climat/causes/">https://agir.wwf.fr/urgence-climat/causes/</a></li>
              <li><a href="https://news.un.org/fr/story/2022/05/1120202">https://news.un.org/fr/story/2022/05/1120202"</a></li>
              <li><a href="https://climat.be/changements-climatiques/changements-observes/rapports-du-giec/2023-rapport-de-synthese">https://climat.be/changements-climatiques/changements-observes/rapports-du-giec/2023-rapport-de-synthese</a></li>
              <li><a href="https://www.futura-sciences.com/planete/actualites/oceanographie-oceans-bientot-satures-dioxyde-carbone-11859/">https://www.futura-sciences.com/planete/actualites/oceanographie-oceans-bientot-satures-dioxyde-carbone-11859/</a></li>
              <li><a href="https://www.orano.group/fr/decodage/bonnes-raisons-nucleaire-contre-rechauffement-climatique">https://www.orano.group/fr/decodage/bonnes-raisons-nucleaire-contre-rechauffement-climatique</a></li>
              <li><a href="https://www.greenpeace.fr/nucleaire-solution-climat/">https://www.greenpeace.fr/nucleaire-solution-climat/</a></li>
              <li><a href="https://www.virta.global/fr/blog/voitures-electriques-et-pollution-vrai-du-faux">https://www.virta.global/fr/blog/voitures-electriques-et-pollution-vrai-du-faux</a></li>
            </div>
            
    </q-parallax>
  </template>
   
  <script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'SourcesFront',
      
  });
  </script>

<style>



.description.texte{
  font-size: 25px;
}

.description{
  max-width: 70%;
  text-align: center;
  justify-content: space-between;
  padding: 20px;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0.5rem 0.5rem 1rem rgb(0, 0, 0);
}

ul {
    font-size: 1.5em;
}

li {
    text-align: left;
    font-size: 1.3em;
    margin-bottom: 20px;
}

</style>
  