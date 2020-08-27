import Button from './button'
import Switch from './switch'

const components = [
  Button,
  Switch,
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
  Switch
}
