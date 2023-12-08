<template>
    <q-page class="flex flex-center">
        
        
        <h1>Acidification</h1> 
        
        <p> 
            En explorant des eaux plus profondes, Azuré ressent les effets de l'acidification des océans.
            Il observe la détérioration des coquilles et carapaces, alertant sur les conséquences de cette menace invisible.
            Bernard, un ermite seul sur son rocher : "Je ne me sens plus en sécurité, ma coquille est toute trouée"
        </p>
        <div>
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
      name: 'Chemin-Acidification',
      components: {
      }
    });
    </script>
    
    