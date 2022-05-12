<template>
    <div>
        <ul>
            <li v-for="a in infoArr" :key="a.id">
                <!-- 跳转路由并携带params参数 to的字符串写法-->
                <!-- <router-link :to="`/home/message/details/${a.id}/${a.title}`">{{a.title}}</router-link>  &nbsp; &nbsp;  -->

                <!-- 跳转路由并携带params参数 to的对象写法-->
                <router-link :to="{
                    name: 'concrete',                             // 当使用params时，此处只能使用name,不能使用path  
                    query: {
                        id: a.id,
                        title: a.title
                    }
                }">
                    {{a.title}}
                </router-link>
                <button @click="pushMethod(a)">push</button>
                <button @click="replaceMethod(a)">replace</button>
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Message",
        data() {
            return {
                infoArr: [{id: '001', title: 'message01'}, 
                          {id: '002', title: 'message02'}, 
                          {id: '003', title: 'message03'}]

            }
        },
        methods:{
            pushMethod(a){
                // console.log(this)
                this.$router.push({
                    name: 'concrete',                            
                    query: {
                        id: a.id,
                        title: a.title
                    }
                })
            },
            replaceMethod(a){
                this.$router.replace({
                    name: 'concrete',                              
                    query: {
                        id: a.id,
                        title: a.title
                    }

                })
            }
            
        },
        beforeDestroy() {
                console.log("Message即将被销毁")
            }
        
    }
</script>