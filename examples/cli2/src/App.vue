<template>
  <div>
    <functional-button @click="log">click me</functional-button>
  </div>
</template>

<script>
import FunctionalButton from "./components/FunctionalButton.js"

export default {
  name: "App",
  components: {
    FunctionalButton
  },
  methods: {
    log() {
      console.log("click")
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
