<template>
  <div class="container">
    <div class="item" v-for="(item,i) in items" :key="i">
      <img :src="item.src" alt />
      <p v-for="(i,index) in item.msg" :key="index">{{i}}</p>
    </div>
    <div class="foot">
        <div class="icon">
            <img src="@/assets/icon_01.jpg" alt="">
            <img src="@/assets/icon_02.jpg" alt="">
            <img src="@/assets/icon_03.jpg" alt="">
        </div>
        <div class="text">
            <div>
            <h4>餐饮</h4>
            <span>会员到店前置发现</span>
            <span>因为感知，所以温度</span>
            </div>  
            <div>
            <h4>商超便利</h4>
            <span>精准描绘到店客户画像</span>
            <span>众里寻他，不再千百度</span>
            </div>  
            <div>
            <h4>鞋服连锁</h4>
            <span>大数据资产是未来第一生产力</span>
            <span>赋能传统门店拥有专属数据资产</span>
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
          src: require("@/assets/banner01.jpg"),
          msg: {
            p1: "人脸会员识别、客户大数据画像分析",
            p2: "前置发现老客户，提前让他们感受温暖式服务"
          }
        },
        {
          src: require("@/assets/banner02.jpg"),
          msg: {
            p1: "人脸会员标签识别、商品组合深度学习",
            p2: "客户大数据画像分析",
            p3: "让每一个便利店都能成为社区温暖的驿站",
          }
        },
        {
          src: require("@/assets/banner_03.jpg"),
          msg: {
            p1: "助力传统门店打造自有数据资产",
            p2: "让数据成为推动新零售第一生产力"
          }
        },
        {
          src: require("@/assets/banner_04.jpg"),
          msg: {
          }
        },
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.container {
    width: 100%;
    text-align: center;
    font-size: .5rem;
    .item {
        width: 100%;
        img {
            width: 100%;
        }
    }
    .foot {
        width: 100%;
        margin: 2rem 0;
        .icon {
            display: flex;
            justify-content: space-around;
            img {
                width: 10%;
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
            }
        }
    }
}
</style>