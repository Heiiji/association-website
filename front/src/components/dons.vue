<template>
    <div class="main">
        <div class="card">
            <p>L’association n’est pas un refuge et n’est pas dotée aujourd’hui d’infrastructures nous permettant de continuer le processus d’adoption tel qu’auparavant. Toutefois, vous avez la possibilité d’adopter un chat ou un chaton sous contrat associatif en consultant la rubrique d’informations locales d’associations de Vendée ci-dessous.

                Une participation financière  de seulement 60 € pour les frais d’adoption engagés  est demandée pour un animal testé Fiv et leucose(+ 6 mois) , stérilisé, vacciné, identifié.</p>
            <h3 style="margin-top: 40px">Faire un don <span style="color: black; font-size: 0.5em;">(deductible des impots)</span> :</h3>
            <ul>
                <li>Devenir famille d'accueil
                    <p style="margin-left:100px">Renseignements à l’adresse de l’association ou bien lors de vos visites aux vide greniers</p>
                </li>
                <li>Bénévolat
                    <p style="margin-left:100px">Ce n’est pas un travail journalier dont nous avons besoin, mais une aide ponctuelle.

                        Notamment pour la préparation des vides greniers, la mise en place, l’étiquetage, le nettoyage des objets, la mise en cartons.

                        Quelques heures aux moments voulus.. Et vous serez prévenu à l’avance des dates.
                        Nous avons aussi besoin pour la socialisation des chatons de gens pouvant venir s’en occuper, éventuellement de familles d’accueil dans les moments d’affluence..

                        Renseignez-vous, rejoignez-nous, d’avance merci !

                        N’hésitez pas, il n’y a pas de grande ou petite aide, une heure de temps en temps, cela nous va très bien !</p>
                </li>
                <div style="text-align: center">
                    <img alt="sensibilisation" src="http://www.chat-alors.fr/wp-content/uploads/2018/09/banniere-benevolat-pour-site-web1.jpg" width="500" style="display: inline-block"/>
                </div>
                <li>Legs
                    <p style="margin-left:100px">Vous n’avez pas ou plus de famille, plutôt que de grossir les caisses de l’état, vous pouvez donner à une association comme la notre sans aucun frais de succession :

                        Faire un legs ou une donation. En contre partie, nous nous occuperons, si vous en avez,  de vos animaux après votre départ.</p></li>
                <li>
                    Donation par chèque
                    <p style="margin-left:100px">à l’adresse de l’association ou bien lors de vos visites aux vide greniers</p>
                </li>
                <li>Donation en espèces
                    <p style="margin-left:100px">à déposer lors des vide greniers</p></li>
                <li>Donation via paypal<br/>
                    <img style="margin-left: 100px; margin-top: 10px" alt="paypal" src="https://pouruneautreeconomie.fr/wp-content/uploads/2017/05/paypal-avis.png" width="100" />
                </li>
            </ul>
            <p>Ouverture de l'association (85 route de Beauvoir / Pont Habert 85300 Sallertaine) : <br/> Mardi et Mercredi, entre 14H30 et 17H30 ou sur Rendez-vous.</p>
            <h3 style="margin-top: 100px">Un grand merci par avance de la part de tous nos petits félins ainsi que de tous les membres de l’association  </h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Aide'
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    li {
        margin: 10px;
    }
    .main {
        position: relative;
        width: 70%;
        margin-left: 15%;
        padding-top: 100px;
    }
    .gCol {
        display: inline-block;
        width: calc(70% - 20px);
        margin: 10px;
    }
    .dCol {
        display: inline-block;
        width: calc(30% - 20px);
        float: right;
        margin: 10px;
    }
    .card {
        background-color: rgba(230, 230, 230, 0.9);
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        border-radius: 5px;
        padding: 20px;
        margin: 10px;
        text-align: left;
    }
    .select {
        display: inline-block;
        width: 250px;
        height: 250px;
        position: relative;
        cursor: pointer;
        margin: 10px;
    }
    .select h3 {
        display: none;
    }
    .select:hover h3 {
        background: rgba(0, 0, 0, 0.3);
        display: inline-block;
        position: absolute;
        top: -20px;
        left: 0px;
        height: calc(100% - 20px);
        width: calc(100% - 20px);
        padding: 10px;
        color: white;
        vertical-align: middle;
    }
</style>
