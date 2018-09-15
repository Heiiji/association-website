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
                                <v-date-picker style="background-color: darkgreen;" locale="fr-FR" v-model="bornDate" :landscape="landscape" :reactive="reactive"></v-date-picker>
                            </v-flex>
                            <v-flex xs12>
                                <v-textarea
                                        outline
                                        name="input-7-4"
                                        label="Description"
                                        v-model="description"
                                ></v-textarea>
                            </v-flex>
                            <v-flex xs12>
                                <h4>Photo du chat</h4>
                            </v-flex>
                            <v-flex xs12>
                                <input type="file" @change="onFileChanged">
                            </v-flex>
                            <div style="text-align: center;">
                                <img v-if="preview" alt="preview" :src="preview" width="400" style="display: inline-block;" />
                            </div>
                        </v-layout>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click.native="chatDialog = false">Close</v-btn>
                    <v-btn color="blue darken-1" flat @click="newCat" v-bind:class="{ disabled: !image }">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <div class="gCol">
            <div class="card">
                <h3 style="text-align: center;">Administration</h3>
            </div>
                <div class="card" style="margin-bottom: 40px; text-align: center">
                    <h3>Chats à adopter</h3>
                    <div v-for="(chat, index) in chats" :key="index" v-if="chat.state === 'disponible'" class="select" :style="{ background: 'url(\'http://localhost:6120/images/' +  chat.img + '.jpg\') center', backgroundSize: 'cover' }">
                        <h3>
                            <v-btn v-if="chat.state === 'disponible' || chat.state === 'nonSevre'" v-on:click="modify(index)" color="green">adopté !</v-btn>
                            <br/>
                            <v-btn v-on:click="idelete(index)" color="red">supprimer</v-btn>
                        </h3>
                    </div>
                    <v-btn
                            color="green"
                            fab
                            dark
                            small
                            absolute
                            bottom
                            right
                            v-on:click="state = 'disponible'; chatDialog = true"
                    >
                        <v-icon>add</v-icon>
                    </v-btn>
                </div>
                <div class="card" style="text-align: center">
                    <h3>Chats à réserver (non sevrés)</h3>
                    <div v-for="(chat, index) in chats" :key="index" v-if="chat.state === 'nonSevre'" class="select" :style="{ background: 'url(\'http://localhost:6120/images/' +  chat.img + '.jpg\') center', backgroundSize: 'cover' }">
                        <h3>
                            <v-btn v-if="chat.state === 'disponible' || chat.state === 'nonSevre'" v-on:click="modify(index, 'adopte')" color="green">adopté !</v-btn>
                            <br/>
                            <v-btn v-if="chat.state === 'nonSevre'" v-on:click="modify(index, 'disponible')" color="green">sevré !</v-btn>
                            <br/>
                            <v-btn v-on:click="idelete(index)" color="red">supprimer</v-btn>
                        </h3>
                    </div>
                    <v-btn
                            color="green"
                            fab
                            dark
                            small
                            absolute
                            bottom
                            right
                            v-on:click="state = 'nonSevre'; chatDialog = true"
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
                        <v-card v-for="(chat, index) in lost" :key="index">
                            <v-img
                                    :src="chat.img"
                                    aspect-ratio="1.5"
                            ></v-img>

                            <v-card-title primary-title>
                                <div>
                                    <h3 class="headline mb-0">{{ chat.name }}</h3>
                                    <div style="text-justify: inter-word;  text-align: justify;" v-html="chat.description"></div>
                                </div>
                            </v-card-title>
                            <v-card-actions>
                                <v-btn v-on:click="retrouver()" flat color="red">supprimer</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
                <v-btn
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
    import PictureInput from 'vue-picture-input';
    import axios from 'axios';

    export default {
        name: 'workBoard',
        data: function () {
            return ({
                file: '',
                picker: null,
                bornDate: null,
                description: '',
                image:null,
                selectedFile: null,
                preview: null,
                landscape: true,
                reactive: false,
                overlay: false,
                state: null,
                chatDialog: false,
                chatonsDialog: false,
                lostDialog: false,
                selected: null,
                newStatus: '',
                lost : [
                    {
                        name: 'IRIS',
                        img: 'http://www.chat-alors.fr/wp-content/uploads/2018/04/458-169x300.jpg',
                        description: 'petite femelle de 1 an disparue sur le secteur de Noirmoutier le 16 avril 2018. Stérilisée et identifiée par puce électronique n° 250268732092101 <br/><br/>Si vous la retrouvez , rapprochez vous d’une clinique vétérinaire qui saura retrouver son propriétaire au moyen de la lecture de la puce électronique.<br/><br/><strong>Merci pour elle et son propriétaire !</strong>'
                    }
                ],
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
                        state: 'nonSevre'
                    }
                ]
            })
        },
        components: {
            'picture-input': PictureInput
        },
        mounted () {
            this.getCat();
        },
        methods: {
            onFileChanged(event) {
                this.selectedFile = event.target.files[0];
                this.preview = URL.createObjectURL(this.selectedFile);
            },
            onRemoved() {
                this.image = '';
            },
            attemptUpload() {
                if (this.image){
                    const formData = new FormData();
                    formData.append(name, this.image);
                    const config = {
                        headers: {
                            'content-type': 'multipart/form-data'
                        }
                    };
                    return axios.post('http://localhost/', formData, config);
                }
            },
            handleFileUpload () {
                this.file = this.$refs.file.files[0];
            },
            modify(target, state) {
                this.chats[target].state = state;
            },
            idelete (target) {
                let vue = this;
                axios.put('http://localhost:6120/delOne', {_id: this.chats[target]._id}).then((response) => {
                    console.log(response);
                    vue.chats.splice(target, 1);
                });
            },
            disparu () {

            },
            retrouver (target) {
                this.lost.splice(target, 1);
            },
            getCat () {
                axios.get('http://localhost:6120/chats').then((response) => {
                    this.chats = response.data.chats;
                    console.log(response)
                });
            },
            newCat () {
                let formData = new FormData();
                formData.append('main', this.selectedFile);
                formData.append('description', this.description);
                formData.append('bornDate', this.bornDate);
                formData.append('state', this.state);
                axios.post('http://localhost:6120/newCat',
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                ).then(function(){
                    console.log('SUCCESS!!');
                    this.chatDialog = false;
                    this.getCat();
                }).catch(function(){
                    console.log('FAILURE!!');
                });
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
