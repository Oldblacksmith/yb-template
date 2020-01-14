<template>
  <div class="container">
    <img src="@/assets/banner.jpg" alt />
    <div class="title">
      <h3>招募地区覆盖全国</h3>
      <p>广阔天地大有可为,时不我待只争朝夕</p>
    </div>
    <div class="content">
      <div class="content_item">
        <h4>系统厂商合作伙伴</h4>
        <p>餐饮、零售、K A 、酒店行业E R P 、C R M 、收银软件系统厂商对接合作</p>
      </div>
      <div class="content_item">
        <h4>系能力提供</h4>
        <p>人脸识别插件式解决方案+ 客户画像大数据</p>
      </div>
      <div class="content_item">
        <h4>地区合作伙伴</h4>
        <p>餐饮、零售、K A 、酒店行业服务商</p>
      </div>
      <div class="content_item">
        <h4>合作邮箱</h4>
        <p>marketing@digitalboom.com.cn</p>
      </div>
    </div>
    <img src="@/assets/banner2.jpg">
  </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .container {
        width: 100%;
        font-size: .5rem;
        img {
            width: 100%;
        }
        .title {
            text-align: center;
        }
        .content {
            color: rgb(138, 137, 137);
            p,h4 {
                margin: 0;
            }
            .content_item {
                margin: 2rem 0;
            }
        }
    }
</style>