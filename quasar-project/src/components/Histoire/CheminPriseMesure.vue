<template>
    <q-page class="flex flex-center">
        <h1>Prise Mesure</h1>
        <p class="texte">C'est alors que notre cher homard croise un voilier qu'il connait déjà bien : c'est le Tara.
            Il sait que ce sont des humains qui font des recherches scientifiques pour défendre l'environnement.
            Quelques jours plus tard, Azuré fait la rencontre de scientifiques marins travaillant à installer des capteurs près du récif de corail où il se trouve, pour surveiller les changements et prendre des mesures visant à sauvegarder l'écosystème.
            Azuré devient un messager, transmettant ces informations cruciales aux autres habitants des océans.
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

        <router-link to="/Histoire/Perturbations">
            <q-btn color="white" text-color="black" label="Il constata que l'environnement n'etait pas celui dont il se souvenait" style="width: 120%; height: 40px;"></q-btn>
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
      name: 'Chemin-Prise-Mesure',
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