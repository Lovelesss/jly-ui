<template>
  <button
    v-if="icon || $slots.default"
    :type="htmlType"
    :disabled="disabled"
    class="ant-btn"
    :class="[
      type ? `ant-btn-${type}` : '',
      size ? `ant-btn-${btnSize}` : '',
      shape ? `ant-btn-${shape}` : '',
      {
        'disabled': disabled,
        'ant-btn-background-ghost': ghost,
        'ant-btn-loading': loading,
        'ant-btn-block': block,
      }
    ]"
    :style="style"
    @click="handleClick"
  >
    <i
      v-if="icon"
      class="anticon"
      :class="[
        icon ? `anticon-${icon}` : ''
      ]"
    ></i>
    <span v-if="$slots.default">
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
      htmlType: {
        type: String,
        default: '',
      },
      angle: [String, Number],
      disabled: Boolean,
      ghost: Boolean,  // 幽灵按钮
      loading: Boolean,
      block: Boolean,  // 宽度为父元素宽度
    },
    data () {
      return {
        sizeMap: {
          large: 'lg',
          small: 'sm'
        },
        btnSize: '',
      }
    },
    created () {
      this.getSize()
    },
    methods: {
      getSize () {
        const size = this.size
        size ? this.btnSize = this.sizeMap[size] : ''
      },
      handleClick (e) {
        this.$emit('click', e)
      }
    },
    computed: {
      style () {
        const angle = parseInt(this.angle)
        return {
          borderRadius: `${angle}px`
        }
      }
    }
  }
</script>

<style scoped>

</style>
