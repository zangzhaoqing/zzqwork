<template>
  <div class="hello">
      <button @click="counter+=1">{{counter}}</button>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data () {
    return {
      msg:'Hamsick',
      counter:0
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /* display: inline-block; */
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
