<template>
  <div id="app">
    <div class="navbar">
      <div class="img" @click="change('index')">
        <img src="@/assets/yb_logo.png" alt />
      </div>
      <van-icon name="bars" size="2rem" @click="showPopup" />
      <van-popup v-model="show" position="right"  :style="{height: '20%'}">
        <ul>
          <li v-for="(item,i) in option" :key="i" @click="changepage(item.msg)">
          <van-icon :name="item.name" />
            {{item.text}}
            </li>
        </ul>
      </van-popup>
    </div>

    <Index v-if="current=='index'" />
    <Product v-if="current=='product'" />
    <Partiner v-if="current=='partiner'" />
    <AboutUs v-if="current=='aboutus'" />
    <FootBar />
  </div>
</template>

<script>
import FootBar from "@/components/FootBar";
import Index from "@/components/Index";
import Product from "@/components/Product";
import Partiner from "@/components/Partiner";
import AboutUs from "@/components/AboutUs";

export default {
  name: "app",
  components: {
    FootBar,
    Index,
    Product,
    Partiner,
    AboutUs
  },
  data() {
    return {
      current: "index",
      show: false,
      option: [
        { text: "首页",name: 'wap-home-o',msg: 'index' },
        { text: "产品",name: 'points',msg: 'product' },
        { text: "合作",name: 'friends-o',msg: 'partiner' },
        { text: "关于我们",name: 'user-circle-o',msg: 'aboutus' }
      ]
    };
  },
  methods: {
    change(msg) {
      this.current = msg;
    },
    showPopup() {
      this.show = true;
    },
    changepage(msg){
      this.current = msg
      this.show = false
    }
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  // padding-top: 3.75rem;
  color: rgb(138, 137, 137);
  font-size: 0.8rem;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  .navbar {
    width: 100%;
    height: 3.75rem;
    // position: fixed;
    // top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 1rem;
    box-sizing: border-box;
    background: #fff;
    color: #000;
    z-index: 2;
    .img {
      width: 40%;
      // padding: .4rem 0;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      img {
        width: 100%;
      }
    }
    .van-dropdown-menu {
      align-items: center;
    }
  .van-overlay {
    background-color: transparent;
  }
  .van-popup--right {
    height: auto!important;
    top: 10rem;
    right: 1%;
    overflow-y: visible;
  }
  .van-popup--right::before {
    content: '';
    position: absolute;
    right: 1rem;
    top: -.5rem;
    width: 1rem;
    height: 1rem;
    background: #fff;
    transform: rotate(-45deg);
    
  }
  li {
    padding: .6rem;
    font-size: 1rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    i {
      margin-right: .5rem;
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
