/* eslint-disable */
<template>
  <div id="app">
      <top-nav-bar/>    
      <router-view/>    
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>

<style lang="scss">
  @import '../../node_modules/bootstrap/scss/bootstrap.scss';
  // here override default bootstrap settings and make custom classes
</style>

<script>
import TopNavBar from './TopNavBar.vue'  
export default {
  name: 'App',
  components: {
    TopNavBar
  }
}
</script>
