<template>
    <q-page class="flex flex-center">

        <q-parallax :height="2000" :speed="1">
            <template v-slot:media> 
                <div class="parallax-container">
                    <img src="../../public/icons/ocean.jpg" class="layer1" />
                    <img src="../../public/icons/foret.jpg" class="layer2" />
                </div>
 
            </template>
        
            <div class="presentation">
                <h2>Présentation</h2>
                    <div class="pres-txt">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Scelerisque felis imperdiet proin fermentum leo vel orci porta non. 
                            Pretium fusce id velit ut tortor pretium. 
                            Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet. 
                            Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo. 
                            Molestie ac feugiat sed lectus vestibulum. Massa enim nec dui nunc mattis enim. 
                            Consequat semper viverra nam libero justo laoreet sit amet. 
                            Elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi. 
                            Neque sodales ut etiam sit amet nisl purus in mollis. 
                            Suspendisse sed nisi lacus sed viverra tellus in hac habitasse.
                        </p>
                </div>
            </div>
            
            <div class="character-details">
                <h2>Personnages</h2>
                
                <div class="characters-container">
                    <p>
                        Azuré est un petit homard bleu, sensible à la cause écologique et d'une curiosité insatiable.
                        Azuré est un fervent défenseur de la vie marine, il s'implique activement dans des actions visant à sensibiliser les autres habitants des océans sur l'importance de préserver leur habitat naturel.
                        Que ce soit en sensibilisant d'autres homards et poissons sur la pollution plastique ou en encourageant la préservation des récifs coralliens,
                        Azuré est toujours prêt à agir pour la protection des écosystèmes marins fragiles.
                    </p>

                    <p>
                        Ekirey est un petit écureuil, fervent partisan des énergies renouvelables dans la forêt.
                        Il se consacre à promouvoir l'utilisation d'énergies propres et durables parmi ses compagnons de la vie sauvage.
                        Toujours à l'avant-garde des nouvelles technologies, Ekirey explore et expérimente des moyens novateurs pour utiliser les ressources naturelles de manière responsable.
                    </p>
                </div> 
            </div>

            <div class="characters-image">
                <div class="column">
                    <router-link to="/Histoire">
                        <h1>Azuré</h1>
                        <img src="../../public/icons/lobster.png" alt="Lobster" class="lobster_img">
                    </router-link>
                </div>
                <div class="column">
                    <router-link to="/Ecureuil">
                        <h1>Ekirey</h1>
                        <img src="../../public/icons/squirrel.png" alt="Squirrel" class="squirrel_img">
                    </router-link>
                </div>   
            </div>

        </q-parallax>
 
    </q-page> 
 
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'HomeFront',
});
</script>

<style>

/* Parallax */

.parallax-container {
    position: relative;
    width: 100%;
    height: 100%;
}

/* Présentation */

.presentation {
    display: flex;
    flex-direction: column;
    background-color: white;
    max-width: 80%;
    border-radius: 1rem;
    box-shadow: 0.5rem 0.5rem 1rem rgb(0, 0, 0);
}

.presentation h2 {
    color: var(--q-dark);
    text-align: center;
    margin: 0;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-weight: bold;
}

.presentation .pres-txt p{
    color: var(--q-dark);
    text-align: center;
    margin: 0;
    padding: 1rem;
    /* justify the text */
    text-align: justify;
    font-size: 1.2rem;
}

/* Personnages */

.character-details {
    display: flex;
    flex-direction: column;
    background-color: white;
    max-width: 80%;
    border-radius: 1rem;
    margin-top: 1rem;
    box-shadow: 0.5rem 0.5rem 1rem rgb(0, 0, 0);
}

.character-details h2 {
    color: var(--q-dark);
    text-align: center;
    margin: 0;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-weight: bold;
}

.characters-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 1rem;
}

.characters-container p {
    color: var(--q-dark);
    text-align: center;
    margin: 0;
    padding: 1rem;
    text-align: justify;
    font-size: 1.2rem;
}

/* Images des personnages */

.characters-image {
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
    max-width: 80%;
    background-color: white;
    border-radius: 1rem;
    padding: 0.5rem;
    box-shadow: 0.5rem 0.5rem 1rem rgb(0, 0, 0);
}

.characters-image .column {
    float: left;
    width: 50%;
    padding: 0.5rem;
}

.characters-image .column h1 {
    text-align: center;
    margin: 0;
    padding: 0.5rem;
    font-size: 4rem;
    font-weight: bold;
}

.characters-image .column img {
    display: block;
    margin-left: auto;
    margin-right: auto;
}


.characters-image .lobster_img {
    width: 70%;
    height: 70%;
    /* center the image */
    margin-left: auto;
    margin-right: auto;
}

.characters-image .squirrel_img {
    width: 70%;
    height: 70%;
    /* center the image */
    margin-left: auto;
    margin-right: auto;
}

.characters-image .column:hover {
    background-color: var(--q-primary);
    color: white;
    border-radius: 1rem;
}

.characters-image .column:hover h1 {
    color: white;
}


.characters-image a {
    text-decoration: none;
    color: var(--q-dark);
}


</style>
