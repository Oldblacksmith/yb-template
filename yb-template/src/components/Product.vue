<template>
  <div class="container">
    <div class="item" v-for="(item,i) in items" :key="i">
      <div class="item-img">
        <img :src="item.src" alt />
      </div>
      <p v-for="(i,index) in item.msg" :key="index">{{i}}</p>
    </div>
    <div class="foot">
      <div class="icon">
        <div class="iconbox">
          <img src="@/assets/icon_01.png" alt />
        </div>
        <div class="iconbox">
          <img src="@/assets/icon_02.png" alt />
        </div>
        <div class="iconbox">
          <img src="@/assets/icon_03.png" alt />
        </div>
      </div>
      <div class="text">
        <div>
          <h4>今日头条</h4>
          <span>国内领先自媒体</span>
        </div>
        <div>
          <h4>抖音</h4>
          <span>好玩有趣小视频</span>
        </div>
        <div>
          <h4>火山视频</h4>
          <span>拥有大量有料视频</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("@/assets/banner01.png"),
          msg: {
            p1: "人脸会员识别、客户大数据画像分析",
            p2: "前置发现老客户，提前让他们感受温暖式服务"
          }
        },
        {
          src: require("@/assets/banner2.png"),
          msg: {
            p1: "人脸会员标签识别、商品组合深度学习",
            p2: "客户大数据画像分析",
            p3: "让每一个便利店都能成为社区温暖的驿站"
          }
        },
        {
          src: require("@/assets/banner_03.png"),
          msg: {
            p1: "助力传统门店打造自有数据资产",
            p2: "让数据成为推动新零售第一生产力"
          }
        },
        {
          src: require("@/assets/banner_04.png"),
          msg: {}
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  text-align: center;
  .item {
    width: 100%;
    .item-img {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
  .foot {
    width: 100%;
    margin: 2rem 0;
    .icon {
      width: 100%;
      display: flex;
      justify-content: space-around;
      .iconbox {
        width: 10%;
        display: flex;
        align-items: center;
        img {
          width: 100%;
        }
      }
    }
    .text {
      display: flex;
      justify-content: space-around;
      div {
        width: 33.33%;
        display: flex;
        flex-direction: column;
        align-items: center;
        span {
          font-size: .7rem;
        }
      }
    }
  }
}
</style>