<template>
  <footer>
    <div class="left">
      <div class="left_add">
        <h4>运营中心</h4>
        <div class="add">
        <span>地址：</span>
        <span>上海市杨浦区五角场万达广场B座2007</span>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="right-item">
     
        <div class="item">
          <img src="@/assets/ewm_01.jpg" alt />
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
  padding: 1.5rem 0;
  font-size: .8rem;
  h4 {
    margin-bottom: 0;
  }
  .left {
    width: 50%;
    .left_add {
      padding-left: 1rem;
      display: flex;
      flex-direction: column;
      .add {
        display: flex;
        :first-child {
          white-space: nowrap;
        }
      }
    }
  }
  .right {
    width: 50%;
    display: flex;
    .right-item {
      display: flex;
      justify-content: space-around;
      .item {
        width: 30%;
        display: flex;
        flex-direction: column-reverse;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>