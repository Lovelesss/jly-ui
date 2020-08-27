<template>
  <div id="app">
    <ButtonTest />
  </div>
</template>

<script>
import ButtonTest from '../examples/pages/button'
export default {
  name: 'App',
  components: {
    ButtonTest
  }
}
</script>

<style>
#app {
  margin-top: 60px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
