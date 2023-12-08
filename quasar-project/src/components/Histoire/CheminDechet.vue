<template>
    <q-page class="flex flex-center">
        <h1>Dechets</h1>
        <p>Ainsi lorsque notre homard se dirigea vers les fond marins, il rencontra une crevette nageant dans les déchets, il lui demanda : "Depuis quand est-ce comme cela ?", elle répondit : "Ça ne fait qu'empirer".<br>
            Notre homard réfléchit donc à comment ces problèmes pourraient être réglés et se rappela des initiatives pour nettoyer les plages.<br>
            Après ceci, Azuré se dirigea vers d'autres aventures.<br>
            En se déplaçant vers des profondeurs plus importantes, Azuré est témoin du déversement irresponsable de déchets depuis la surface.<br>
            Il ressent les effets néfastes sur son environnement et s'efforce de sensibiliser les autres habitants des océans.<br>
            A une tortue mangeant un sac plastique :"Arrête, ce n'est pas une méduse, ces sacs plastiques nous pourissent la vie.<br>
            Heureusement, ces gens nous sauvent la vie."<br>
            Ce sont des bateaux dépollueurs qui ramassent les déchets.<br>
            "En plus, leurs filets sont conçus de manière à ce que l'on ne se coince pas dedans.<br>
            Ce sont les héros qui empèchent la formation d'un 8e continent."<br>
        </p>
    
        <router-link to="/Histoire/Acidification">
            <q-btn color="white" text-color="black" label="Lors de ses voyages il constata la présence de carapaces trouées"></q-btn>
        </router-link>
            
        <router-link to="/Histoire/Gulfstream">
            <q-btn color="white" text-color="black" label="Les flots de mer chauds le guidaient vers de nouveaux horizons"></q-btn>
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
      name: 'Chemin-Dechet',
      components: {
        
      }
    });
    </script>
    