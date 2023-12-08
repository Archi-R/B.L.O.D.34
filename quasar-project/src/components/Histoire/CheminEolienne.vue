<template>
    <q-page class="flex flex-center">
        <h1>Eolienne</h1>
        <p> Ainsi lorsque celui-ci se dirigeat vers les profondeurs il découvrit le pilonne d'une éolienne.
            Intrigué il observa pendant un temps le mouvement des pales, celle-ci lui était étrangère néamoins sont mouvement était intéressant.
            Il s'interessa alors aux divers habitants qui se logeaient le long des accoches de l'eolienne.
            Un éperlan dans un banc : "Nous sommes perdus, avec cette dalle de béton et sans notre maison nous ne savons plus où nous cacher ! En plus, ces pales nous font perdre tous nos repères."
            Une solution novatrice consiste en une base trouée simulant un récif coralien, offrant un habitat propice à la vie marine.
        </p>
    
        

        <router-link to="/Histoire/Acidification">
            <q-btn color="white" text-color="black" label="Lors de ses voyages il constata la présence de carapaces trouées"></q-btn>
        </router-link>
            
        <router-link to="/Histoire/Gulfstream">
            <q-btn color="white" text-color="black" label="Les flots de mer chauds le guidaient vers de nouveaux horizons"></q-btn>
        </router-link>
    
        <router-link to="/Histoire/Dechet">
            <q-btn color="white" text-color="black" label="Lors de ses aventures, il a vu des bancs d'objets flottants qui bloquaient la lumière"></q-btn>
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
            <q-btn color="white" text-color="black" label="Réchauffement"></q-btn>
        </router-link>

        <router-link to="/Histoire/Introduction">
            <q-btn color="white" text-color="black" label="Retour au début de l'histoire"></q-btn>
        </router-link>
            
        
    </q-page>
    
    </template>
    
    
    <script lang="ts">
    import { defineComponent } from 'vue'
    export default defineComponent({
      name: 'Chemin-Eolienne',
      components: {
      }
    });
    </script>
    