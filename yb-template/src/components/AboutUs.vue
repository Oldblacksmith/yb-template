<template>
  <div class="container">
      <div class="img-box">
    <img src="@/assets/banner3.png" alt />
      </div>
    <div class="content">
      <p>
        上海亚北集团成立于2019年。依托全球领先的AI技术与大数据能力，专注于为门店提供互联网化建设和互联
        网运营服务，是行业领先基于AI人脸识别技术为门店提供互联网化整体解决方案和互联网运营服务的供应商，是百度AI生态深
      </p>
      <div class="img-box">
      <img src="@/assets/banner5.png" alt="">
      </div>
        <div class="msg">
            <p>精通大数据技术和解决方案、人工智能、区块链等前沿领域</p>
            <p>15年的大数据开发经验及能力</p>
        </div>
        <div class="img-box">
        <img src="@/assets/banner4.png" alt="">
        </div>
        <div class="msg">
            <p>完善的团队编制</p>
            <p>严谨的管理流程</p>
            <p>服务质量稳定</p>
        </div>
        <div class="address">
            <div class="item item1">
                <h3>上海总部</h3>
                <p>扎根上海，放眼全国，目前已经与多家总部在上海的零售行业龙头合作</p>
            </div>
            <div class="item item2">
                <h3>上海研发中心</h3>
                <p>由国内外各大知名互联网企业的技术精英组成</p>
            </div>
            <div class="item item3">
                <h3>华东运营中心</h3>
                <p>10年的广告运营服务经历和8年成功的电商零售操盘经验，深谙互联网的品牌运营之道，是国内领先的广告人才孵化基地</p>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
          
        }
    }
};
</script>
<style lang="scss">
.container {
    width: 100%;
    .img-box {
        width: 100%;
        img {
            width: 100%;
        }
    }
    content {
        width: 100%;
    }
    .msg {
        text-align: center;
    }
    .address {
        width: 100%;
        display: flex;
        justify-content: space-around;
        color: #d49300;
        font-size: .5rem;
        margin-bottom: 2rem;
        .item {
            width: 30%;
            text-align: center;
            padding-top: 3rem;
            h3 {
                margin-top: 10rem;
            }
        }
        .item1 {
            background: url('../assets/bg1.png') center no-repeat;
            background-size: 100% 100%;
        }
        .item2 {
            background: url('../assets/bg2.png') center no-repeat;
            background-size: 100% 100%;
        }
        .item3 {
            background: url('../assets/bg3.png') center no-repeat;
            background-size: 100% 100%;
        }

    }
}
</style>