<template>
  <div class="hello">
    <h1>Counter App</h1>
    <h2 id="header-counter"> counter: {{counter}}</h2>
    <button id="but-increment" v-on:click="increment"> Increment </button>
    <div>
      <input type="number" id="input-increment" v-model="inputValue">
      <button id="but-increment-value" v-on:click="incrementWith(inputValue)"> Increment With Value </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function () {
    return {
      counter: 0,
      inputValue: 0
    }
  },
  methods: {
    increment: function () {
      this.counter++
    },
    incrementWith: function (value) {
      this.counter += Number(value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
div
  margin 40px 0 0
</style>
