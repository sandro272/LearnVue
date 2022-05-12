<template>
  <div class = "sch">
      <h2>学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
      <button @click="sendSchoolName">把学校名发给App</button>
  </div>
</template>

<script>

    export default {
        name: "School",
        props: ['getSchoolName'],
        data() {
            return {
                name: "YNU",
                address: 'KM'
            }
        },
        methods: {
            sendSchoolName(){
                this.getSchoolName(this.name)
            }
        }
    }
</script>

<style scoped lang = "css">
    .sch {
        background-color: blanchedalmond;
        padding: 3%;
        margin-top: 1%;
    }

</style>