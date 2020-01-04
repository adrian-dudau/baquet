<!-- <style>
  body {
    background-color: red
  }
</style>> -->

<template>
  <div id="app">
        <img src="../resources/page_1/bkg_1.png" width="500">
    <router-view>
    </router-view>
  </div>
</template>

<script>
import page2imbracaminte from './components/page2imbracaminte.vue'
import page25croitorii from './components/page25croitorii.vue'
import page3accesorii from './components/page3accesorii.vue'
import page4saloane from './components/page4saloane.vue'
import page5calendar from './components/page5calendar.vue'

export default {
  name: 'App',
  components: {
    'app-page2imbracaminte': page2imbracaminte,
    'app-page25croitorii': page25croitorii,
    'app-page3accesorii': page3accesorii,
    'app-page4saloane': page4saloane,
    'app-page5calendar': page5calendar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
