<template>
  <div class="swiper_container">
    <van-swipe :autoplay="4000" :duration="0" :show-indicators="false">
      <van-swipe-item v-for="(image, index) in SwiperImg" :key="index">
        <img :src="image.src" />
      </van-swipe-item>
    </van-swipe>
    <div class="content">
      <p>秉承开放创新的原则，回归中国实体产业，目前已初步形成高端实业、供应链、大数据服务及开发运营等板块；脚踏实地把口号式呐喊落到实处，助力中国实体产业发展；把实体产业转型升级成符合当代发展所需的配套设施设备。</p>
      <div class="content_main">
        <h3 class="title">服务产品</h3>
        <div class="main_item" v-for="(item,i) in list" :key="i">
          <div class="img">
            <img :src="item.src" alt />
          </div>
          <div class="main_msg">
            <h4>{{item.title}}</h4>
            <p>{{item.msg}}</p>
          </div>
        </div>
      </div>
      <p class="center">运用自身核心优势，精准采集，数据分析，数据运用精准投放；提高 推广效率，降低推广获客成本。</p>
      <div class="imgbox">
        <div class="img">
          <div class="img-item" v-for="(item,i) in imglist" :key="i">
            <img :src="item" />
          </div>
        </div>
        <div class="linebox">
        <img src="@/assets/line.jpg" alt />
        </div>
        <p>
          <span>自有数据</span>
          <span>大数据分析</span>
          <span>精准人群</span>
          <span>数据包投资</span>
          <span>降低成本</span>
        </p>
      </div>
      <h3 style="text-align: center">服务涵盖行业</h3>
      <div class="imgbox imgbox1">
        <div class="img">
          <div class="img-item"  v-for="(item,i) in imglist2" :key="i">
            <img :src="item" />
          </div>
        </div>
        <p>
          <span>线下实体</span>
          <span>电商</span>
          <span>服务零售</span>
          <span>房产装修</span>
          <span>其他推广</span>
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
        { src: require("@/assets/yb.png") },
        { src: require("@/assets/yb.png") },
        { src: require("@/assets/yb.png") },
        { src: require("@/assets/yb.png") }
      ],
      list: [
        {
          src: require("@/assets/image_01.png"),
          title: "行业精准数据包",
          msg:
            "依托先进的服务管理软件，实现精准的用户定位，为企业搭建一个全方位的精准营销平台。"
        },
        {
          src: require("@/assets/image_02.png"),
          title: "推广渠道",
          msg:
            "平台拥有头条,抖音,火山等行业领先的流量平台,还包括汇聚行业优质流量的优量广告"
        },
        {
          src: require("@/assets/image_03.png"),
          title: "流量变现",
          msg:
            "开创互动广告全新形式，日均曝光50亿+，覆盖12亿+在线移动APP用户兼顾媒体收益，实现媒体主、广告主、用户多方共赢"
        }
      ],
      imglist: {
        src1: require("@/assets/img_1.jpg"),
        src2: require("@/assets/img_2.jpg"),
        src3: require("@/assets/img_3.jpg"),
        src4: require("@/assets/img_4.jpg"),
        src5: require("@/assets/img_5.png")
      },
      imglist2: {
        src1: require("@/assets/img_icon1.jpg"),
        src2: require("@/assets/img_icon2.jpg"),
        src3: require("@/assets/img_icon3.jpg"),
        src4: require("@/assets/img_icon4.jpg"),
        src5: require("@/assets/img_icon5.png")
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
    >p {
      padding: 0 .5rem;
    }
    .title {
      text-align: center;
    }
    .main_item {
      width: 100%;
      height: 3.75rem;
      display: flex;
      margin-bottom: 1rem;
      overflow: hidden;
      .img {
        width: 30%;
        margin-right: 1rem;
        img {
          width: 100%;
        }
      }

      .main_msg {
        width: 100%;
        h4 {
          margin-top: 0;
          margin-bottom: 0;
          padding-bottom: 0;
        }
        p {
          font-size: .5rem;
          margin-top: 0;
        }
      }
    }
    .imgbox {
      width: 100%;
      padding: 0 1rem;
      font-size: 0.7rem;
      box-sizing: border-box;
      .img {
        width: 100%;
        display: flex;
        justify-content: space-around;
        .img-item {
          width: 10%;
          display: flex;
          align-items: center;
          img {
            width: 100%;
          }
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
      .linebox {
        width: 100%;
        img {
          width: 100%;
        }
      }
    }
    .imgbox1 {
      background: #fafaf9;
      padding-top: 1rem;
    }
    .center {
      text-align: center;
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
      height: 100%;
    }
  }
}
</style>