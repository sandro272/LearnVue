<template>
    <div>
        <h2>学生姓名：{{name}}</h2>
        <h2>成绩：{{score}}</h2>
    </div>
</template>

<script>
export default {
    name: "Student",                   // 此处的name尽量保持与文件名一致
    data(){
        return {
            name: "张黄",
            score: 92
        }
    }
}
</script>