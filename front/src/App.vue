<template>
  <div id="app">
    <div class="background"></div>
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
  @import url('https://fonts.googleapis.com/css?family=Cardo');
  @import url('https://fonts.googleapis.com/css?family=Lobster+Two');
  .background {
    position: fixed;
    top: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    background: #F7F8F8;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #ACBB78, #F7F8F8);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #AEBD7A, #F3F8F4); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  html, body {
    font-family: 'Cardo';
    min-height: 100%;
    font-size: 1.02em;
  }
  a {
    text-decoration: none;
  }
  h1, h2, h3 {
    font-family: 'Lobster Two';
    margin-bottom: 15px;
    font-size: 1.5em;
  }
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
