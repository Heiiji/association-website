<template>
    <div>
        <div  v-if="overlay === true" class="overlay">
            <div v-on:click="goTo(0)" style="position: absolute; top: 0px; left: 0px; z-index: 11; width: 100%; height: 100%;"></div>
            <div style="position: relative; display: inline-block;">
                <v-btn v-on:click="goBack" class="prevBut" fab dark med color="primary">
                    <v-icon dark>arrow_back_ios</v-icon>
                </v-btn>
                <img :src="chats[selected].img" alt="maximze"/>
                <v-btn v-on:click="goNext" class="nextBut" fab dark med color="primary">
                    <v-icon dark>arrow_forward_ios</v-icon>
                </v-btn>
            </div>
            <p>{{ chats[selected].description }}</p>
        </div>
        <div class="main">
            <div class="gCol">
                <div class="card">
                    <h3>Chats à adopter</h3>
                    <div v-for="(chat, index) in chats" :key="index" v-if="chat.state === 'disponible'" class="select" :style="{ background: 'url(\'http://localhost:6120/images/' +  chat.img + '.jpg\') center', backgroundSize: 'cover' }">
                        <h3>
                            <h3>{{ chat.bornDate }}</h3>
                        </h3>
                    </div>
                </div>
                <div class="card">
                    <h3>Chats à réserver (non sevrés)</h3>
                      <div v-for="(chat, index) in chats" :key="index" v-if="chat.state === 'nonSevre'" class="select" :style="{ background: 'url(\'http://localhost:6120/images/' +  chat.img + '.jpg\') center', backgroundSize: 'cover' }">
                        <h3>
                        <h3>{{ chat.bornDate }}</h3>
                                </h3>
                            </div>
                </div>
            </div>
            <div class="dCol">
                <div class="card">
                    <h3>information</h3>
                    <p>Une participation financière  de seulement 60 € pour les frais d’adoption engagés  est demandée pour un animal testé Fiv et leucose(+ 6 mois) , stérilisé, vacciné, identifié.</p>
                    <img style="width: 90%" alt="zooplus" src="http://www.chat-alors.fr/wp-content/uploads/2017/06/adoption-300x107.jpg" />
                    <p>Les chats de moins de 6 mois sont non stérilisés et ceux ayant plus de 6 mois sont mis à l'adoption stérilisé + vacciné.</p>
                </div>
                <div class="card">
                    <h3>Contact</h3>
                    <v-form>
                        <v-container>
                            <v-flex xs12>
                                <v-text-field
                                        label="e-mail"
                                        outline
                                ></v-text-field>
                                <v-text-field
                                        label="nom"
                                        outline
                                ></v-text-field>
                                <v-textarea
                                        outline
                                        name="corpus"
                                        label="votre message"
                                ></v-textarea>
                                <div>
                                    <v-btn small color="green">Envoyer</v-btn>
                                </div>
                            </v-flex>
                        </v-container>
                    </v-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        name: 'Adoption',
        data: function () {
            return ({
                overlay: false,
                selected: null,
                chats : [
                    {
                        img: 'http://www.chat-alors.fr/wp-content/uploads/2018/06/DSC_0161.jpg',
                        description: 'description de fou :3',
                        bornDate: 'Femelle née le 24 mai 2018'
                    },
                    {
                        img: 'http://www.chat-alors.fr/wp-content/uploads/2017/05/WP_20180204_11_22_25_Pro.jpg',
                        description: 'description de fou :3',
                        bornDate: 'Femelle née le 24 mai 2018'
                    },
                    {
                        img: 'http://www.chat-alors.fr/wp-content/uploads/2017/05/WP_20180204_15_57_04_Pro.jpg',
                        description: 'description de fou :3',
                        bornDate: 'Femelle née le 24 mai 2018'
                    },
                    {
                        img: 'http://www.chat-alors.fr/wp-content/uploads/2018/06/DSC_0181.jpg',
                        description: 'description de fou :3',
                        bornDate: 'Femelle née le 24 mai 2018'
                    },
                    {
                        img: 'http://www.chat-alors.fr/wp-content/uploads/2018/06/DSC_0147.jpg',
                        description: 'description de fou :3',
                        bornDate: 'Femelle née le 24 mai 2018'
                    }
                ]
            })
        },
        mounted () {
            this.getCat();
        },
        methods: {
            goTo (target) {
                this.selected = target;
                this.overlay = !this.overlay;
            },
            getCat () {
                axios.get('http://localhost:6120/chats').then((response) => {
                    this.chats = response.data.chats;
                    console.log(response)
                });
            },
            goNext () {
                if (this.selected < this.chats.length) {
                    this.selected += 1;
                }
            },
            goBack () {
                if (this.selected > 0) {
                    this.selected -= 1;
                }
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .prevBut {
        position: absolute;
        top: 48%;
        z-index: 12;
        left: 0px;
    }
    .nextBut {
        position: absolute;
        top: 48%;
        z-index: 12;
        right: 0px;
    }
    .overlay {
        position: fixed;
        z-index: 10;
        top: 0px;
        padding-top: 3%;
        overflow-y: scroll;
        left: 0px;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        vertical-align: middle;
    }
    .overlay img {
        margin: 0px;
        z-index: 12;
        width: 60%;
    }
    .overlay p {
        display: inline-block;
        z-index: 12;
        width: 60%;
        margin: 0px;
        background-color: rgba(230, 230, 230, 0.9);
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        border-radius: 5px;
        padding: 10px;
    }
    .main {
        position: relative;
        width: 70%;
        margin-left: 15%;
        padding-top: 40px;
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
        top: -0px;
        left: 0px;
        height: 100%;
        width: 100%;
        padding: 10px;
        color: white;
        vertical-align: middle;
    }
</style>
