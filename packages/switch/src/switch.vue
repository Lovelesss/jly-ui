<template>
  <div
    class="jly-switch"
    :class="[size ? `jly-switch--${size}` : '']"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "JlySwitch",
    props: {
      size: {
        type: String,
        default: '',
      }
    }
  }
</script>

<style scoped lang="less">
  .jly-switch--large {
    font-size: 20px;
  }
  .jly-switch--middle {
    font-size: 16px;
  }
  .jly-switch--small {
    font-size: 12px;
  }
</style>
