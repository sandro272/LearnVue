<template>
    <div>
        <button @click="isShow = !isShow">显示/影藏</button>
        <transition name="haa" appear>
            <h1 v-show="isShow">你好啊</h1>
        </transition>
        
    </div>
</template>

<script>
export default {
    name: "Test01",
    data() {
        return {
            isShow: true
        }
    },
    
}
</script>

<style lang="css" scoped>
    h1{
        background-color:blueviolet;
    }

    /* 进入的起点和离开的终点 */
    .haa-enter, .haa-leave-to {
        transform: translateX(-100%);
    }

    .haa-enter-active, .haa-leave-active{
        transition: 0.5s linear;
    }

    /* 进入的终点和离开的起点 */
    .haa-enter-to, .haa-leave {
        transform: translateX(0);
    }
    
</style>