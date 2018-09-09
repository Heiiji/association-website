<template>
    <div class="main">
        <div class="gCol">
            <div class="card">
                <h3>Chats à adopter</h3>
                <div class="select" style="background: url('http://www.chat-alors.fr/wp-content/uploads/2018/06/DSC_0161.jpg') center; background-size: cover;">
                    <h3>Femelle née le 24 mai 2018</h3>
                </div>
                <div class="select" style="background: url('http://www.chat-alors.fr/wp-content/uploads/2018/06/DSC_0161.jpg') center; background-size: cover;">
                    <h3>Femelle née le 24 mai 2018</h3>
                </div>
                <div class="select" style="background: url('http://www.chat-alors.fr/wp-content/uploads/2018/06/DSC_0161.jpg') center; background-size: cover;">
                    <h3>Femelle née le 24 mai 2018</h3>
                </div>
                <div class="select" style="background: url('http://www.chat-alors.fr/wp-content/uploads/2018/06/DSC_0161.jpg') center; background-size: cover;">
                    <h3>Femelle née le 24 mai 2018</h3>
                </div>
                <div class="select" style="background: url('http://www.chat-alors.fr/wp-content/uploads/2018/06/DSC_0161.jpg') center; background-size: cover;">
                    <h3>Femelle née le 24 mai 2018</h3>
                </div>
            </div>
            <div class="card">
                <h3>Chats à réserver (non sevrés)</h3>
                <h3>Il n'y en a pas pour le moment</h3>
            </div>
        </div>
        <div class="dCol">
            <div class="card">
                <h3>information</h3>
                <p>Une participation financière  de seulement 60 € pour les frais d’adoption engagés  est demandée pour un animal testé Fiv et leucose(+ 6 mois) , stérilisé, vacciné, identifié.</p>
                <img style="width: 90%" alt="zooplus" src="http://www.chat-alors.fr/wp-content/uploads/2017/06/adoption-300x107.jpg" />
            </div>
            <div class="card">
                <h3>Contact</h3>
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
