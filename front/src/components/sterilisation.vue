<template>
    <div class="main">
        <div class="gCol">
            <div class="card">
                <img alt="icon" src="../assets/stérilisation.png" style="float: right; width: 120px; margin: 20px;"/>
                <p style="text-align: left">
                    RAPPEL : On a trop souvent tendance à considérer nos animaux comme des personnes, or ce n’est pas le cas :
                </p>
                <ul style="text-align: left">
                    <li>
                        Ils ne fonctionnent pas comme nous et n’ont pas du tout les mêmes préoccupations ni le même ressenti sur les choses de la vie.
                    </li>
                    <li>
                        Une chatte est guidée par son instinct animal et ses hormones : en dehors des périodes de chaleur, tout intérêt reproducteur disparaît :
                    </li>
                    <li>
                        Une chatte n’a pas « envie » d’avoir des petits. Il est donc faux de croire qu’il est bon pour son équilibre mental d’avoir fait une portée.
                    </li>
                    <li>
                        La stérilisation ne « diminue » pas une chatte, cela ne la mutile pas, elle ne s’en rend pas compte.
                    </li>
                    <li>
                        Autre idée reçue : faire une portée n’augmente pas l’espérance de vie d’une chatte, au contraire.
                    </li>
                    <li>
                        Une chatte n’a pas besoin de faire une portée pour être en bonne santé ni pour être heureuse.
                    </li>
                </ul>
            </div>
            <div class="card">
                <h3 style="color: darkgreen;">Intérêts</h3>
                <img alt="illustration" src="http://www.chat-alors.fr/wp-content/uploads/2018/09/illustration-avantages-sterilisation-femelle.jpg" style="float: right; width: 300px"/>
                <ul style="text-align: left">
                    <li>La suppression des chaleurs et des comportements sexuels :

                        Finies les bagarres en période de chaleurs dont ils reviennent infestés de parasites, griffés et porteurs d’abcès. Avec la fin des chaleurs chez les femelles disparaît également le concert de miaulements graves et rauques pour attirer les mâles du secteur.. Finies aussi les fugues pendant lesquelles ils vadrouillent sur les routes au risque de se faire écraser.</li>
                    <li>Diminution du risque de maladies de l’appareil reproducteur : cancer des testicules chez le mâle, des ovaires ou mammaire chez la femelle.

                        Ces maladies font souffrir et nécessitent des traitements lourds et onéreux sans garantie de résultat.</li>
                    <li>La diminution du risque de tumeurs mammaires</li>
                    <li>La diminution du risque de pathologies utérines (pyromètre, métrite…)</li>
                    <li>La diminution du risque de transmission du virus du sida félin (transmis principalement par les morsures, griffures et les rapports sexuels) pour lequel il n’existe aucun vaccin, et de la leucose.</li>
                    <li>La suppression du risque de gestation non désirée (de nombreux chatons, plusieurs fois par an…)</li>
                    <li>Un chat mâle castré est plus calme, son territoire moins étendu. Il a tendance à limiter son marquage urinaire (très odorant !) et les griffades.</li>
                </ul><br/><br/>
                <p style="text-align: left">
                    Bien plus qu’un acte simple de suppression des chaleurs, la stérilisation est donc bien un acte important de prévention médicale.
<br/><br/>
                    Il est important de noter que le risque d’apparition de tumeurs mammaires est d’autant plus faible que la stérilisation est réalisée tôt (l’idéal étant avant les 1ères chaleurs).</p>
                <p style="text-align: left">
                    Notez bien que la contraception médicale (pilule en cachet ou injection de contraceptif) n’empêche pas les maladies citées ci-dessus. Au contraire, elle provoque un dérèglement hormonal et des pathologies graves peuvent apparaître plus rapidement. Faire stériliser une chatte avant ses premières chaleurs c’est lui éviter de graves maladies.
                </p>
            </div>
            <div class="card">
                <h3 style="color: darkred">Inconvénients</h3>
                <ul style="text-align: left">
                    <li>La stérilisation ne présente que peu d’inconvénients. Le seul véritable réside dans une augmentation de l’appétit de la chatte après la stérilisation. Cela peut donc induire une prise de poids si l’on ne surveille pas son alimentation.</li>

                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Adoption'
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .main {
        position: relative;
        width: 70%;
        margin-left: 15%;
        padding-top: 100px;
    }
    .gCol {
        display: inline-block;
        width: 100%;
        margin: 10px;
    }
    .dCol {
        display: inline-block;
        width: calc(30% - 20px);
        float: right;
        margin: 10px;
    }
    .card {
        position: relative;
        background-color: rgba(230, 230, 230, 0.9);
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
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
        top: -25px;
        left: 0px;
        height: calc(100% - 20px);
        width: calc(100% - 20px);
        padding: 10px;
        color: white;
        vertical-align: middle;
    }
</style>
