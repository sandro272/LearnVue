<template>
    <div>
        <button @click="isShow = !isShow">显示/影藏</button>
        <transition-group 
            appear
            name = "animate__animated animate__bounce"
            enter-active-class="animate__backInDown"
            leave-active-class="animate__backOutDown"
            >
            <h1 v-show="!isShow" key="1">Intro</h1>
            <h1 v-show="isShow" key="2">Swing</h1>
        </transition-group>
    </div>
</template>

<script>
import "animate.css"
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
</style>