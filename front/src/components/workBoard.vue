<template>
    <div>
        <v-dialog v-model="chatDialog" persistent max-width="700px">
            <v-card>
                <v-card-title>
                    <span class="headline">Profile du chat</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12>
                                <h4>Date de naissance</h4>
                            </v-flex>
                            <v-flex xs12>
                                <v-date-picker style="background-color: darkgreen;" locale="fr-FR" v-model="picker" :landscape="landscape" :reactive="reactive"></v-date-picker>
                            </v-flex>
                            <v-flex xs12>
                                <v-textarea
                                        outline
                                        name="input-7-4"
                                        label="Description"
                                ></v-textarea>
                            </v-flex>
                            <v-flex xs12>
                                <h4>Photo du chat</h4>
                            </v-flex>
                            <v-flex xs12>
                                <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click.native="chatDialog = false">Close</v-btn>
                    <v-btn color="blue darken-1" flat @click.native="chatDialog = false">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <div class="gCol">
            <div class="card">
                <h3>Administration</h3><br/>
            </div>
                <div class="card" style="margin-bottom: 40px">
                    <h3>Chats à adopter</h3>
                    <div v-for="(chat, index) in chats" :key="index" class="select" :style="{ background: 'url(\'' +  chat.img + '\') center', backgroundSize: 'cover' }">
                        <h3><v-btn v-if="chat.state === 'disponible' || chat.state === 'non sevré'" color="green">adopté !</v-btn><br/><v-btn color="red">supprimer</v-btn></h3>
                    </div>
                    <v-btn
                            v-show="!hidden"
                            color="green"
                            fab
                            dark
                            small
                            absolute
                            bottom
                            right
                            v-on:click="chatDialog = true;"
                    >
                        <v-icon>add</v-icon>
                    </v-btn>
                </div>
                <div class="card">
                    <h3>Chats à réserver (non sevrés)</h3>
                    <h3>Il n'y en a pas pour le moment</h3>
                    <v-btn
                            v-show="!hidden"
                            color="green"
                            fab
                            dark
                            small
                            absolute
                            bottom
                            right
                    >
                        <v-icon>add</v-icon>
                    </v-btn>
                </div>
        </div>
        <div class="dCol">
            <div class="card" style="padding-bottom: 30px;">
                <h3 style="color: darkred; text-align: center">Alerte disparition</h3><br/>
                <v-layout>
                    <v-flex xs12>
                        <v-card>
                            <v-img
                                    src="http://www.chat-alors.fr/wp-content/uploads/2018/04/458-169x300.jpg"
                                    aspect-ratio="1.5"
                            ></v-img>

                            <v-card-title primary-title>
                                <div>
                                    <h3 class="headline mb-0">IRIS</h3>
                                    <div style="text-justify: inter-word;  text-align: justify;">petite femelle de 1 an disparue sur le secteur de  Noirmoutier  le 16 avril 2018. Stérilisée et identifiée par puce électronique n°  250268732092101
                                        <br/><br/>
                                        Si vous la retrouvez , rapprochez vous d’une clinique vétérinaire qui saura retrouver son propriétaire au moyen de la lecture de la puce électronique.<br/><br/><strong>Merci pour elle et son propriétaire !</strong></div>
                                </div>
                            </v-card-title>
                            <v-card-actions>
                                <v-btn flat color="green">retrouvé</v-btn>
                                <v-btn flat color="red">supprimer</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
                <v-btn
                        v-show="!hidden"
                        color="green"
                        fab
                        dark
                        small
                        absolute
                        bottom
                        right
                >
                    <v-icon>add</v-icon>
                </v-btn>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'workBoard',
        data: function () {
            return ({
                file: '',
                picker: null,
                landscape: true,
                reactive: false,
                overlay: false,
                chatDialog: false,
                chatonsDialog: false,
                lostDialog: false,
                selected: null,
                chats : [
                    {
                        img: 'http://www.chat-alors.fr/wp-content/uploads/2018/06/DSC_0161.jpg',
                        description: 'description de fou :3',
                        bornDate: 'Femelle née le 24 mai 2018',
                        state: 'disponible'
                    },
                    {
                        img: 'http://www.chat-alors.fr/wp-content/uploads/2017/05/WP_20180204_11_22_25_Pro.jpg',
                        description: 'description de fou :3',
                        bornDate: 'Femelle née le 24 mai 2018',
                        state: 'disponible'
                    },
                    {
                        img: 'http://www.chat-alors.fr/wp-content/uploads/2017/05/WP_20180204_15_57_04_Pro.jpg',
                        description: 'description de fou :3',
                        bornDate: 'Femelle née le 24 mai 2018',
                        state: 'disponible'
                    },
                    {
                        img: 'http://www.chat-alors.fr/wp-content/uploads/2018/06/DSC_0181.jpg',
                        description: 'description de fou :3',
                        bornDate: 'Femelle née le 24 mai 2018',
                        state: 'disponible'
                    },
                    {
                        img: 'http://www.chat-alors.fr/wp-content/uploads/2018/06/DSC_0147.jpg',
                        description: 'description de fou :3',
                        bornDate: 'Femelle née le 24 mai 2018',
                        state: 'disponible'
                    }
                ]
            })
        },
        methods: {
            handleFileUpload () {
                this.file = this.$refs.file.files[0];
            },
            modify() {

            },
            delete () {

            },
            disparu () {

            },
            retrouver () {

            }
        }
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
        position: relative;
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
        font-family: 'Cardo';
    }
    .select:hover h3 {
        background: rgba(0, 0, 0, 0.3);
        display: inline-block;
        position: absolute;
        top: 0px;
        left: 0px;
        height:100%;
        width: 100%;
        padding: 10px;
        color: white;
        vertical-align: middle;
        text-align: center;
    }
</style>
