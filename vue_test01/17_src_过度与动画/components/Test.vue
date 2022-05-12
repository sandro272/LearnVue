<template>
    <div>
        <button @click="isShow = !isShow">显示/影藏</button>
        <!-- <h1 v-show="isShow" class="come">你好啊！</h1> -->
        <transition name="hah" :appear="true">                                <!--或者 <transition name="hah" appear>-->
            <h1 v-show="isShow">你好啊！</h1>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "Test",
        data() {
            return {
                isShow:true
            }
        },
    
    }
</script>


<style lang="css" scoped>
    h1 {
        background-color: bisque;
    }

    /* 默认是v-enter-active */
    .hah-enter-active {
        animation: testDemo 1s linear;
    }

    .hah-leave-active {
        animation: testDemo 1s linear reverse;
    }

    @keyframes testDemo {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0%);
        }
    }
    
</style>