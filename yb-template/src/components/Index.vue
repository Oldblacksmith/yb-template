<template>
  <div class="swiper_container">
    <van-swipe :autoplay="4000" :duration="50" :show-indicators="false">
      <van-swipe-item v-for="(image, index) in SwiperImg" :key="index">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
    <div class="content">
      <p>数腾天下与百度AI生态深度合作，运用百度人工智能开放平台提供的众多能力，为传统零售行业提供全方位的人工智能解决方案，通过</p>
      <div class="content_main">
        <h3 class="title">解决方案</h3>
        <div class="main_item" v-for="(item,i) in list" :key="i">
          <img :src="item.src" alt />
          <div class="main_msg">
            <h4>{{item.title}}</h4>
            <p>{{item.msg}}</p>
          </div>
        </div>
      </div>
      <h3 style="text-align: center">服务涵盖行业</h3>
      <div class="imgbox">
        <div class="img">
          <img v-for="(item,i) in imglist" :key="i" :src="item" />
        </div>
        <img src="@/assets/line.jpg" alt />
        <p>
          <span>价格最低</span>
          <span>缴费灵活</span>
          <span>安全稳定可靠</span>
          <span>资金无压力</span>
          <span>傻瓜式操作</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "swiper",
  data() {
    return {
      SwiperImg: [
        "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/39343/4/1551/48272/5cbd71f4E329401dc/579b33f530a1402d.jpg!cr_1125x549_0_72!q70.jpg.dpg",
        "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/34869/14/3703/113972/5cb953c1E4294d8ea/b73c538710f5c462.jpg!cr_1125x549_0_72!q70.jpg.dpg",
        "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/39343/4/1551/48272/5cbd71f4E329401dc/579b33f530a1402d.jpg!cr_1125x549_0_72!q70.jpg.dpg",
        "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/34729/14/3948/120618/5cbeee07Efbe17ec5/d57ddd4fbbbc09e0.jpg!cr_1125x549_0_72!q70.jpg.dpg",
        "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/34423/17/5378/97852/5cbecd7bE73730c2f/76e5359d8fb3a1e1.jpg!cr_1125x549_0_72!q70.jpg.dpg"
      ],
      list: [
        {
          src: require("@/assets/image_01.jpg"),
          title: "智慧商铺",
          msg:
            "基于AI人脸识别技术及全新的saas会员管理系统，并依托于云端构建的数据库体系，为传统零售"
        },
        {
          src: require("@/assets/image_02.jpg"),
          title: "智慧物业",
          msg:
            "基于AI人脸识别技术及全新的saas会员管理系统，并依托于云端构建的数据库体系，为传统零售"
        },
        {
          src: require("@/assets/image_03.jpg"),
          title: "智慧安全",
          msg:
            "基于AI人脸识别技术及全新的saas会员管理系统，并依托于云端构建的数据库体系，为传统零售"
        }
      ],
      imglist: {
        src1: require("@/assets/img_1.jpg"),
        src2: require("@/assets/img_2.jpg"),
        src3: require("@/assets/img_3.jpg"),
        src4: require("@/assets/img_4.jpg"),
        src5: require("@/assets/img_5.png"),
      }
    };
  },
  components: {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.swiper_container {
  width: 100%;
  .van-swipe {
    height: 12rem;
  }
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    .title {
      text-align: center;
    }
    .main_item {
      display: flex;
      margin-bottom: 1rem;
      img {
        width: 30%;
        margin-right: 1rem;
      }
      .main_msg {
        width: 100%;
        h4 {
          margin-top: 0;
        }
      }
    }
    .imgbox {
      width: 100%;
      padding: 0 1rem;
      font-size: .5rem;
      box-sizing: border-box;
      .img {
        width: 100%;
        img {
          width: 20%;
        }
      }
      img {
        width: 100%;
      }
      p {
        display: flex;
        span {
          width: 20%;
          text-align: center;
        }
      }
    }
  }
}
.van-swipe {
  height: 100%;
  .van-swipe__track,
  .van-swipe-item {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
    }
  }
}
</style>