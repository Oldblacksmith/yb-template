<template>
    <div class="navbar">
        <img src="@/assets/logo_01.png" alt="">
        <div class="title">
            <span>首页</span>
            <span>产品</span>
            <span>合作招募</span>
            <span>关于我们</span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
        }
    },
    methods: {

    }
}
</script>
<style lang="scss" scoped>
.navbar {
    width: 100%;
    height: 2.5rem;
    position: fixed;
    top: 0;
    display: flex;
    background: #000;
    color: #fff;
    z-index: 2;
    img {
        width: 20%
    }
    .title {
        width: 80%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
}

</style>
