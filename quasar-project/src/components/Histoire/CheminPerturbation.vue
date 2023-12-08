<template>
    <q-page class="flex flex-center">
        <h1>Perturbation de l'environnement</h1>
        <p class="texte">Azuré est témoin de la perturbation de son propre environnement à mesure que les activités humaines continuent de modifier son habitat naturel.
            Il s'efforce de trouver un équilibre entre la cohabitation et la préservation de son monde sous-marin.
            À travers ces événements, Azuré le lobster bleu devient le héros d'une histoire qui souligne l'urgence de préserver nos océans et explore les différentes facettes de la relation complexe entre les humains et les écosystèmes marins.
        </p>
        <div class="choix">
        <router-link to="/Histoire/Acidification">
            <q-btn color="white" text-color="black" label="Lors de ses voyages il constata la présence de carapaces trouées"  style="width: 120%; height: 40px;"></q-btn>
        </router-link>
            
        <router-link to="/Histoire/Gulfstream">
            <q-btn color="white" text-color="black" label="Les flots de mer chauds le guidaient vers de nouveaux horizons" style="width: 120%; height: 40px;"></q-btn>
        </router-link>
    
        <router-link to="/Histoire/Dechet">
            <q-btn color="white" text-color="black" label="Lors de ses aventures, il a vu des bancs d'objets flottants qui bloquaient la lumière" style="width: 120%; height: 40px;"></q-btn>
        </router-link>
    
        <router-link to="/Histoire/Eolienne">
            <q-btn color="white" text-color="black" label="Il se propage dans les tréfonds de l'océan" style="width: 120%; height: 40px;"></q-btn>
        </router-link>
    
        <router-link to="/Histoire/Petrole">
            <q-btn color="white" text-color="black" label="De grandes étendues sombres bouchent la lumière" style="width: 120%; height: 40px;"></q-btn>
        </router-link>
    
        <router-link to="/Histoire/Epave">
            <q-btn color="white" text-color="black" label="Il se dirigea vers des mers plus froides" style="width: 120%; height: 40px;"></q-btn>
        </router-link>

        <router-link to="/Histoire/PriseMesure">
            <q-btn color="white" text-color="black" label="La température environnante lui semble plus élevée qu'elle ne devrait l'être" style="width: 120%; height: 40px;"></q-btn>
        </router-link>

        <router-link to="/Histoire/Introduction">
            <q-btn color="white" text-color="black" label="Retour au début de l'histoire" style="width: 120%; height: 40px;"></q-btn>
        </router-link>
        </div>
        
    </q-page>
    
    </template>
    
    
    <script lang="ts">
    import { defineComponent } from 'vue'
    export default defineComponent({
      name: 'Chemin-Perturbation',
      
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