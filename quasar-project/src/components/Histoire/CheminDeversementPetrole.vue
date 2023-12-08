<template>
    <q-page class="flex flex-center">
        <h1>Deversement Petrole</h1>
        <p>Alors perché sur un rocher pour faire une sa sieste quotidienne, Azuré voit la nuit se lever, il ne comprend pas car il n'est que 7h.
            C'est ainsi qu'il décide de faire une petite reconnaissance en remontant à la surface.
            Là, un cauchemar l'attend.
            Azuré est confronté à une marée noire dévastatrice.
            Il se bat pour survivre dans une mer souillée tout en témoignant des effets dévastateurs du déversement de pétrole sur la faune et la flore marines.
            Notre cher homard voit alors "Momo", une mouette rieuse.
            Azuré lui demande alors : "Comment cela ce fait-il qu'autant de pétrole contamine l'océan ?".
            Il apprend alors que ça a été causé par le dégazage (débalastage) d'un pétrolier.
            Il essaie de comprendre alors comment ce serait possible de palier ce problème.
            Il répondit alors à Momo : "Est ce que ce serait possible de faire une loi internationale interdisant cette opération ?".
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
            
        </div>
    </q-page>
    
    </template>
    
    
    <script lang="ts">
    import { defineComponent } from 'vue'
    export default defineComponent({
      name: 'Chemin-Deversement-Petrole',
      components: {
      }
    });
    </script>
    