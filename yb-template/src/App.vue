<template>
  <div id="app">
    <Navbar />
    <Index v-if="current=='index'"/>
    <FootBar />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Navbar from '@/components/Navbar'
import FootBar from '@/components/FootBar'
import Index from '@/components/Index'

export default {
  name: 'app',
  components: {
    Navbar,
    FootBar,
    Index
  },
  data(){
    return {
      current: 'index'
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  padding-top: 2.5rem;
}
#app {
  
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
