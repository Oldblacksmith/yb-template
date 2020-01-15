<template>
  <footer>
    <div class="left">
      <div>
        <h4>运营中心</h4>
        <span>地址：上海市杨浦区国宾路36号五角场万达广场B座2006</span>
      </div>
    </div>
    <div class="right">
      <div class="right-item">
        <div class="item">
          <img src="@/assets/xiaocx_01.png" alt />
        </div>
        <div class="item">
          <img src="@/assets/xiaocx_02.png" alt />
        </div>
        <div class="item">
          <img src="@/assets/ewm_01.png" alt />
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped lang="scss">
footer {
  width: 100%;
  background: rgb(243, 240, 243);
  display: flex;
  font-size: .5rem;
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
    .right-item {
      display: flex;
      justify-content: space-around;
      .item {
        width: 30%;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>