<template>
    <ul>
        <li>消息编号:{{id}}</li>
        <li>消息细节:{{title}}</li>
        <!-- <li>a: {{a}}</li>
        <li>b: {{b}}</li> -->
    </ul>
</template>

<script>
    export default {
        name: 'Details',
        // 对应props的第一种写法
        // props: ['a', 'b'],

        // 对应props的第二种写法
        props: ['id', 'title'],                        // 不用写下面的computed中的id和title
        mounted(){
            console.log(this.$route)
        },

        computed: {
            // id(){
            //     return this.$route.params.id
            // },
            // title(){
            //     return this.$route.params.title
            // }
        }
    }
</script>