<template>
  <div id="app">
    <div class="navbar">
      <div class="img">
        <img src="@/assets/yb_logo.png" alt="">
      </div>
        <div class="title">
            <span @click="change('index')">首页</span>
            <span @click="change('product')">产品</span>
            <span @click="change('partiner')">合作招募</span>
            <span @click="change('aboutus')">关于我们</span>
        </div>
    </div>
    <Index v-if="current=='index'"/>
    <Product v-if="current=='product'"/>
    <Partiner v-if="current=='partiner'" />
    <AboutUs v-if="current=='aboutus'" />
    <FootBar />
  </div>
</template>

<script>
import FootBar from '@/components/FootBar'
import Index from '@/components/Index'
import Product from '@/components/Product'
import Partiner from '@/components/Partiner'
import AboutUs from '@/components/AboutUs'

export default {
  name: 'app',
  components: {
    FootBar,
    Index,
    Product,
    Partiner,
    AboutUs
  },
  data(){
    return {
      current: 'index'
    }
  },
  methods: {
    change(msg){
      this.current = msg
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  padding-top: 2.5rem;
  color: rgb(138, 137, 137);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  .navbar {
    width: 100%;
    height: 3.75rem;
    position: fixed;
    top: 0;
    display: flex;
    background: #000;
    color: #fff;
    z-index: 2;
    .img {
      width: 50%;
      // padding: .4rem 0;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      img {
        width: 100%;
    }
    }
    .title {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
}
}
</style>
