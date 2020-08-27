<template>
  <button
    class="ant-btn"
    :class="[
      type ? `ant-btn-${type}` : '',
      size ? `ant-btn-${btnSize}` : '',
    ]"
  >
    <i></i>
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
  export default {
    name: "JlyButton",
    props: {
      type: {
        type: String,
        default: '',
      },
      size: {
        type: String,
        default: '',
      },
      icon: {
        type: String,
        default: '',
      },
      shape: {
        type: String,
        default: '',
      },
      angle: [String, Number],
      disabled: Boolean,
    },
    data() {
      return {
        sizeMap: {
          large: 'lg',
          small: 'sm'
        },
        btnSize: '',
      }
    },
    created() {
      this.getSize()
    },
    methods: {
      getSize() {
        const size = this.size
        size ? this.btnSize = this.sizeMap[size] : ''
      },
      handleClick(e) {
        this.$emit('click', e)
      }
    }
  }
</script>

<style scoped>

</style>
