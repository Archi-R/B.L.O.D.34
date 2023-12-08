<template>
<q-page class="flex flex-center">
    <h1>Introduction</h1>
    <p class="texte">Au cœur d'un récif corallien jadis vibrant de couleurs chatoyantes, se déployait un spectacle autrefois éblouissant. Des coraux, témoins silencieux de la vie marine, s'effaçaient peu à peu dans l'éclat terne du blanchissement. Le lobster bleu, nommé Azuré, déambulait dans cet écosystème fragile, sa carapace éclatante contrastant tristement avec le déclin qui l'entourait. Ses antennes ondulaient avec une grâce mélancolique alors qu'il explorait les recoins désertés de son domaine autrefois luxuriant.
        
        Alors qu'il se baladait le long de son récif il rencontra un poisson perroquet, celui-ci lui dit : "tu sais il fut un temps les coraux étaient bien plus goûtus qu'aujourd'hui. Maintenant il ne sont que fades et friables", "Pourquoi donc?" demanda alors le Homard, "Les coraux, ils se meurent" lui indiqua le poisson perroquet."
        Azuré continua alors son chemin en quête de compréhension de ce qui se passait autour de lui.
        Plus il s'éloignait du récif plus celui-ci lui lui semblais en effet fade et mourrant.
        Il se disait bien qu'il serait bien de faire quelque chose pour pallier à cela mais rien ne lui venait.
         Finalement il en venna à la décision qu'il lui fallais faire le tour des océan et des mers afin de peut être arriver à un début de solution. 
    </p>
    

        
    <div class="choix">       
    <router-link to="/Histoire/Acidification">
        <q-btn color="white" text-color="black" label="Lors de ses voyages il constata la présence de carapaces trouées"></q-btn>
    </router-link>
        
    <router-link to="/Histoire/Gulfstream">
        <q-btn color="white" text-color="black" label="Les flots de mer chauds le guidaient vers de nouveaux horizons"></q-btn>
    </router-link>

    <router-link to="/Histoire/Dechet">
        <q-btn color="white" text-color="black" label="Lors de ses aventures, il a vu des bancs d'objets flottants qui bloquaient la lumière"></q-btn>
    </router-link>

    <router-link to="/Histoire/Eolienne">
        <q-btn color="white" text-color="black" label="Il se propage dans les tréfonds de l'océan"></q-btn>
    </router-link>

    <router-link to="/Histoire/Petrole">
        <q-btn color="white" text-color="black" label="De grandes étendues sombres bouchent la lumière"></q-btn>
    </router-link>

    <router-link to="/Histoire/Epave">
        <q-btn color="white" text-color="black" label="Il se dirigea vers des mers plus froides"></q-btn>
    </router-link>

    <router-link to="/Histoire/Perturbations">
        <q-btn color="white" text-color="black" label="Perturbations"></q-btn>
    </router-link>

    <router-link to="/Histoire/PriseMesure">
        <q-btn color="white" text-color="black" label="Mesures"></q-btn>
    </router-link>
    </div>   
    
        

    
</q-page>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Introduction-Test',
});
</script>

<style>
.choix {
    display:flex;
    flex-direction: column;
}

.choix q-btn {
    background-color :none;
    box-shadow : none;
    border-width:
}

q-btn {
    background-color:none; 
    box-shadow:none;
    border-width:0px;
}

.texte{
    max-width : 85%;
    font-size : 1.5em;
}
</style>