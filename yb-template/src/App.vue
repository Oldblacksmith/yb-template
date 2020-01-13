<template>
  <div id="app">
    <Navbar />
    <FootBar />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Navbar from '@/components/Navbar'
import FootBar from '@/components/FootBar';

export default {
  name: 'app',
  components: {
    Navbar,
    FootBar
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  padding-top: 2.5rem;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
