<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style lang="scss">
  @import "assets/scss/variables";
  @import "fonts/font";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  background-color: $bg-color;

}

  .footer-fixed {
    position: fixed !important;
    bottom: 0;
    width: 100% !important;
    margin: auto;
    right: 0;
    left: 0;
  }
  html{
    background-color: $bg-color;

  }

</style>
