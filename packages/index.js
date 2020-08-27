import Button from './button'
import ButtonGroup from './button-group'

const components = [
  Button,
  ButtonGroup
]

// 全局引用
const install = (Vue) => {
  for (const value of components) {
    Vue.component(value.name, value)
  }
}

export default {
  install,
  Button,
  ButtonGroup,
}
