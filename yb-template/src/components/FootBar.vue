<template>
  <footer>
    <div class="left">
      <div>
        <h4>北京总部:</h4>
        <span>地址：北京市海淀区中关村创业大街6号楼</span>
        <h4>上海研发中心</h4>
        <span>地址：上海市张江高科技园区盛夏路666号E栋5层</span>
      </div>
    </div>
    <div class="right">
      <div>
        <img src="@/assets/xiaocx_01.png" alt />
        <img src="@/assets/xiaocx_02.png" alt />
        <img src="@/assets/ewm_01.png" alt />
      </div>
    </div>
  </footer>
</template>
<style scoped lang="scss">
footer {
  width: 100%;
  background: rgb(243, 240, 243);
  display: flex;
  h4 {
      margin-bottom: 0;
  }
  .left {
    width: 50%;
    div {
        display: flex;
        flex-direction: column;
    }
  }
  .right {
    width: 50%;
    display: flex;
    align-items: center;
    div {
      display: flex;
      justify-content: space-around;
      img {
        width: 30%;
      }
    }
  }
}
</style>