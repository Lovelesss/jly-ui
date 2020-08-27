<template>
  <div class="wrapper">
    <jly-button>默认按钮</jly-button>
    <jly-button type="primary">主按钮</jly-button>
    <jly-button type="danger" angle="20" disabled>危险按钮</jly-button>
    <jly-button type="warning" size="large">警告按钮</jly-button>
    <jly-button type="success" size="small">成功按钮</jly-button>
    <jly-button type="dashed">虚线按钮</jly-button>
    <jly-button type="primary" ghost>幽灵按钮</jly-button>
    <jly-button type="primary" shape="circle">圆</jly-button>
    <jly-button-group>
      <jly-button type="primary">按钮组</jly-button>
      <jly-button type="primary">按 钮 组</jly-button>
    </jly-button-group>
    <form action="">
      输入框：<input type="text">
      <jly-button htmlType="reset">重置</jly-button>
      <jly-button htmlType="submit">提交</jly-button>
      <jly-button htmlType="button">按钮</jly-button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped>

</style>
