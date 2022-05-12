<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <!-- <ul v-for = "(item, index) in dataList" :key="index">
            <li>{{item}}</li>
        </ul> -->

        <!-- 定义一个插槽(挖个坑，等着组件的使用者进行填充) -->
        <slot name="center-part"> 我是一个默认值，当使用者没有传递具体结构时，我会出现1 </slot>
        <slot name="footer-part"> 我是一个默认值，当使用者没有传递具体结构时，我会出现2 </slot>
    </div>
</template>

<script>
    export default {
        name: "Category",
        props: ['title']
    }
</script>

<style lang="css">
    .category {
        background-color: beige;
        width: 30%;
        height: 400px;
    }
    h3 {
       text-align: center;
       background-color: orange; 
    }
</style>