<template>
    <div>
        <button @click="isShow = !isShow">显示/影藏</button>
        <transition-group name="dawn" appear>
            <h1 v-show="isShow" key="1">punchline</h1>
            <h1 v-show="isShow" key="2">respect</h1>
        </transition-group>
    </div>
</template>

<script>
export default {
    name: "Test02",
    data() {
        return {
            isShow: true
        }
    },
    
}
</script>

<style lang="css" scoped>

    h1 {
        background-color: bisque;
    }

    .dawn-enter, .dawn-leave-to {
        transform: translateX(-100%);
    }

    .dawn-enter-active, .dawn-leave-active {
        transition: 0.5s linear;
    }

    .dawn-leave, .dawn-enter-to {
        transform: translateX(0);
    }


    
</style>