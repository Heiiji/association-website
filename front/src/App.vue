<template>
  <div id="app">
    <Menu/>
    <router-view/>
  </div>
</template>

<script>
    import Menu from './components/menu.vue'
    import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
      Menu
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Comfortaa');
  @import url('https://fonts.googleapis.com/css?family=Lobster+Two');
  html {
    background: #F7F8F8;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #ACBB78, #F7F8F8);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #ACBB78, #F7F8F8); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  html, body {
    font-family: 'Comfortaa';
    min-height: 100%;
  }
  a {
    text-decoration: none;
  }
  h1, h2, h3 {
    font-family: 'Lobster Two';
    font-size: 1.6em;
  }
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
