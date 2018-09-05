<template>
    <div class="menu">
        <router-link to="/">
            <img alt="logo" src="../assets/logo.jpeg"/>
        </router-link>
        <div class="container">
            <router-link to="/adoption">
                <span class="menuIter">Adopter</span>
            </router-link>
            <router-link to="/aide">
                <span class="menuIter">Informations</span>
            </router-link>
            <router-link to="/aide">
                <span class="menuIter">Nous aider</span>
            </router-link>
            <img alt="fb" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/600px-Facebook_logo_%28square%29.png" />
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
        top: 0px;
        left: 20%;
        width: 60%;
        height: 50px;
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
