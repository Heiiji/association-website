<template>
    <div style="background-color: white; position: fixed; top: 0px; left: 0px; width: 100%; height: 70px; z-index: 6; box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);">
        <div class="menu">
            <router-link to="/">
                <img alt="logo" src="../assets/logo.jpeg"/>
                <span style="position: absolute; left: 10px; bottom: 0px; color: black; font-size: 0.8em;">(Association loi 1901)</span>
            </router-link>
            <div class="container">
                <router-link to="/">
                    <span class="menuIter">Accueil</span>
                </router-link>
                <router-link to="/adoption">
                    <span class="menuIter">Adopter</span>
                </router-link>
                <router-link to="/sauvage">
                    <span class="menuIter">Chats perdu</span>
                </router-link>
                <router-link to="/aide">
                    <span class="menuIter">Nous aider</span>
                </router-link>
                <a href="https://www.facebook.com/chat.alors.85" target="_blank"><img alt="fb" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/600px-Facebook_logo_%28square%29.png" /></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Menu',
        props: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .menu {
        position: fixed;
        z-index: 10;
        top: 0px;
        left: 15%;
        width: 70%;
        height: 50px;
        padding-bottom: 20px;
        background-color: rgba(255, 255, 255, 0.98);
    }
    .menu img {
        margin: 10px;
        height: 100%;
        float: left;
    }
    .container {
        display: inline-block;
        padding-top: 30px;
        float: right;
        text-align: right;
        position: absolute;
        top:0px;
        right: 0px;
    }
    .menuIter {
        cursor: pointer;
        font-size: 1.3em;
        margin: 15px;
        color: rgba(20, 20, 20, 0.8);
    }
    .menuIter:hover {
        color: rgba(0, 0, 0, 1);
    }
    .container img {
        float: right;
        display: inline-block;
        height: 30px;
        margin-top: 0px;
        border-radius: 30px;
    }
    .container img:hover {
        cursor: pointer;
        opacity: 0.7;
    }
</style>
