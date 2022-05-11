<template>
    <div class="category">
        <h3>{{title}}分类</h3>

        <!-- 定义一个插槽(挖个坑，等着组件的使用者进行填充) -->
        <slot :ga="games"> 我是一个默认值，当使用者没有传递具体结构时，我会出现 </slot>
    </div>
</template>

<script>
    export default {
        name: "Category",
        props: ['title'],
        data() {
            return {
                games: ["王者", "绝地而生", "QQ飞车", "欢乐斗地主", "阴阳师"]
            }
        },
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