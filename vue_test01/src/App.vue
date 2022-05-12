<template>
  <div>
      <button>原生的按钮</button> &nbsp; &nbsp;
      <input type="text">
      <hr>
      <zc-row>
        <zc-button>默认按钮</zc-button>
        <zc-button type="primary">主要按钮</zc-button>
        <zc-button type="success">成功按钮</zc-button>
        <zc-button type="info">信息按钮</zc-button>
        <zc-button type="warning">警告按钮</zc-button>
        <zc-button type="danger">危险按钮</zc-button>
      </zc-row>
        <hr>
      <zc-date-picker
        type="date"
        placeholder="选择日期">
      </zc-date-picker>


  </div>
</template>
  
<script>
    
    export default {
        name: 'App'
    }
</script>

