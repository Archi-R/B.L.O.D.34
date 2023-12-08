<template>
    <q-page class="flex flex-center">
        <h1>Prise Mesure</h1>
        <p>C'est alors que notre cher homard croise un voilier qu'il connait déjà bien : c'est le Tara.<br>
            Il sait que ce sont des humains qui font des recherches scientifiques pour défendre l'environnement.<br>
            Quelques jours plus tard, Azuré fait la rencontre de scientifiques marins travaillant à installer des capteurs près du récif de corail où il se trouve, pour surveiller les changements et prendre des mesures visant à sauvegarder l'écosystème.<br>
            Azuré devient un messager, transmettant ces informations cruciales aux autres habitants des océans.<br>
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
    
        <router-link to="/Histoire/Eolienne">
            <q-btn color="white" text-color="black" label="Il se propage dans les tréfonds de l'océan"></q-btn>
        </router-link>
    
        <router-link to="/Histoire/Petrole">
            <q-btn color="white" text-color="black" label="De grandes étendues sombres bouchent la lumière"></q-btn>
        </router-link>
    
        <router-link to="/Histoire/Epave">
            <q-btn color="white" text-color="black" label="Il se dirigea vers des mers plus froides"></q-btn>
        </router-link>*

        <router-link to="/Histoire/Perturbations">
            <q-btn color="white" text-color="black" label="Perturbations"></q-btn>
        </router-link>

        <router-link to="/Histoire/Introduction">
            <q-btn color="white" text-color="black" label="Retour au début de l'histoire"></q-btn>
        </router-link>
            
    </q-page>
    
    </template>
    
    
    <script lang="ts">
    import { defineComponent } from 'vue'
    export default defineComponent({
      name: 'Chemin-Prise-Mesure',
      components: {
      }
    });
    </script>
    