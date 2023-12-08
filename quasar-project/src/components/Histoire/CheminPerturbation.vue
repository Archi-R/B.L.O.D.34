<template>
    <q-page class="flex flex-center">
        <h1>Perturbation</h1>
        <p>Azuré est témoin de la perturbation de son propre environnement à mesure que les activités humaines continuent de modifier son habitat naturel.
            Il s'efforce de trouver un équilibre entre la cohabitation et la préservation de son monde sous-marin.
            À travers ces événements, Azuré le lobster bleu devient le héros d'une histoire qui souligne l'urgence de préserver nos océans et explore les différentes facettes de la relation complexe entre les humains et les écosystèmes marins.
        </p>
        <div>
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

        <router-link to="/Histoire/PriseMesure">
            <q-btn color="white" text-color="black" label="Mesures"></q-btn>
        </router-link>

        <router-link to="/Histoire/Introduction">
            <q-btn color="white" text-color="black" label="Retour au début de l'histoire"></q-btn>
        </router-link>
        </div>
        
    </q-page>
    
    </template>
    
    
    <script lang="ts">
    import { defineComponent } from 'vue'
    export default defineComponent({
      name: 'Chemin-Perturbation',
      components: {
      }
    });
    </script>
    