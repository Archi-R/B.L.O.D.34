
<template>
    <q-page class="flex flex-center">
    <h1>Gulfstream</h1>
    <p>Azuré voyage le long du Gulf Stream, découvrant les mystères de cette puissante circulation océanique qui influence le climat mondial.
        Il prend conscience de l'importance de préserver cet équilibre fragile.
        Notre homard voyageant au travers du monde fit un arrêt au bord d'une plage, il découvrit une loutre nommée Gus.
        Cette loutre parlait beaucoup et évoqua à un moment ses inquiétudes sur les courants marins. Il parla d'un courant important pour son environnement, le Gulfstream et de la peur de sa disparition.
        Azuré intéressé lui demanda pourquoi disparaîtrait-il et Gus répondit : "
        Ces actions pourraient mettre en péril mon espèce à cause des changements de température drastiques qu'elles provoqueraient, la seule solution que je vois est de diminuer la pollution afin de ne pas provoquer la disparition de ce dernier".
        Au travers de cette discussion, Azuré compris ces enjeux et leur importance.
    </p>


    <router-link to="/Histoire/Acidification">
        <q-btn color="white" text-color="black" label="Lors de ses voyages il constata la présence de carapaces trouées"></q-btn>
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

    <router-link to="/Histoire/Introduction">
        <q-btn color="white" text-color="black" label="Retour au début de l'histoire"></q-btn>
    </router-link>
        
    </q-page>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Chemin-Gulfstream',
  components: {
    
  }
});
</script>