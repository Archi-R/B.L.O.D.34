<template>
    <q-page class="flex flex-center">
        <div class="whole">
        <h1>Epave</h1>
        <p class="texte">
            Azuré tombe sur une épave immergée, abritant une diversité de vie marine.
        Il explore les débris et observe comment ces structures peuvent devenir des habitats improbables pour les créatures marines.
        Lors de ses voyages Azuré tomba un jour sur une épave de ce qui lui semblait être un énorme mur de fer.
        Celui-ci vu alors une école de poisson qui sortait non loin de la où il regardait.
        Se dirigeant vers cette ouverture il découvrit alors toute une vie marine qui se trouvait logée dans cet espace qui n'avait rien de naturel.
        Lors de cette exploration il s'est approché d'une salle; de cette salle émanait une eau des plus déplaisante.
        En effet l'eau dans laquelle il se trouvait était contaminée par de l'artillerie se trouvant dans une autre pièce.
        Cette artillerie était majoritairement composée de plomb. Après avoir découvert cette eau il s'éloigna autant que possible de cette pièce.
        Il semblerait que même si ces épaves peuvent être source d'habitat pour les habitants de l'eau certaines d'entre elles poseront des problèmes tôt ou tard.
        Avec de la chance les humains finiront par s'occuper des épaves qu'ils ont éparpillé sur les sols marins avant que les plus problématiques ne soient source d'un empoisonnement général de la faune et la flore environnantes.
        </p>
        </div>

        <div class="choix">
        <router-link to="/Histoire/Acidification">
            <q-btn color="white" text-color="black" label="Lors de ses voyages il constata la présence de carapaces trouées" style="width: 120%; height: 40px;"></q-btn>
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
    
        <router-link to="/Histoire/Perturbations">
            <q-btn color="white" text-color="black" label="Il constata que l'environnement n'etait pas celui dont il se souvenait" style="width: 120%; height: 40px;"></q-btn>
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
      name: 'Chemin-Epave',
      
    });
</script>
    
<style>
.whole{
    display:flex;
    flex-direction: column;
    align-items: center;
    max-width: 85%;
}
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