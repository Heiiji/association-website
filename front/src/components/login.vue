<template>
    <div class="main">
        <div v-if="!logged" class="card">
            <h3>Administration</h3>
            <v-form style="width: 75%; margin-left: 12%; margin-top: 50px">
                <v-container>
                    <v-layout row wrap align-content-center="true">
                        <v-flex xs12>
                            <v-text-field
                                    v-model="email"
                                    :rules="[rules.required, rules.email]"
                                    label="E-mail"
                            ></v-text-field>
                            <v-text-field
                                    :append-icon="show3 ? 'visibility_off' : 'visibility'"
                                    :rules="[rules.required, rules.min]"
                                    :type="show3 ? 'text' : 'password'"
                                    v-model="password"
                                    name="input-10-2"
                                    label="Password"
                                    class="input-group--focused"
                                    @click:append="show3 = !show3"
                            ></v-text-field>
                            <div style="text-align: center">
                                <v-btn v-on:click="login" depressed color="green">Login</v-btn>
                            </div>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-form>
        </div>
        <div v-else>
            <workBoard :user="user" />
        </div>
    </div>
</template>

<script>
    import API from '../api';
    import worBoard from './workBoard.vue';

    export default {
        name: 'Login',
        components: {
            workBoard: worBoard
        },
        data () {
            return {
                logged: false,
                user: null,
                email: '',
                password: '',
                show3: false,
                rules: {
                    required: value => !!value || 'Required.',
                    counter: value => value.length <= 20 || 'Max 20 characters',
                    email: value => {
                        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        return pattern.test(value) || 'Invalid e-mail.'
                    }
                }
            }
        },
        methods: {
            login () {
                API.post('/login', {password: this.password, email: this.email}).then((res) => {
                    if (res.data.success) {
                        this.logged = true;
                        this.user = res.data.user
                    }
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
