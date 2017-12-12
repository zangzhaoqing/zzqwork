<template >
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span v-if="ok">max</span>
    <input  v-bind:value="values" @input="out($event.target.value)"/>
    <small v-if="Math.random()>0.5">双井</small>
    <span v-else-if="Math.random()>0.5">劲松</span>
    <div v-for='item of items'>
    <p>{{item.gl}}</p>
    <p>{{item.lol}}</p>
    </div>
    <button @click.middle="greet('say hi!')">greet</button>
    <input type="text" v-model="messi">
    <p>{{messi}}</p>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>
    <div id='example-3'>
  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
  <label for="jack">Jack</label>
  <input type="checkbox" id="john" value="John" v-model="checkedNames">
  <label for="john">John</label>
  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
  <label for="mike">Mike</label>
  <br>
  <span>Checked names: {{ checkedNames }}</span>
  </div>
  <hr>
  <div id="example-4">
  <input type="radio" id="one" value="One" v-model="picked" @click="sk">
  <label for="one">手动转入</label>
  <br>
  <input type="radio" id="two" value="Two" v-model="picked" @click="skip">
  <label for="two">自动转入</label>
  <br>
  <!-- <span>Picked: {{ picked }}</span> -->
  </div>
  <div v-if="picked === 'One'">
    one
  </div>
  <div v-else>
    {{ message }}
  </div>
  <div id="example-5">
  <select v-model="selected" multiple>
    <option >A</option>
    <option >B</option>
    <option >C</option>
  </select>
  <span>Selected: {{ selected }}</span>
</div> 
<input type="text" v-model.lazy="msn" @change="msb"> 
<div>
<input v-model.trim="msgs">
</div>  
<div>
  <input v-model.number="age" type="number" @input="inpt($event)">
</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      messi:'',
      msn:'',
      values:'',
      checked:false,
      checkedNames:[],
      picked: '',
      selected:[],
      msgs:'',
      age:'',
      items:[
        {
        gl:'神经病',
        lol:'shabi'
      },
      {
       gl:'神经病',
       lol:'shabi' 
      }]             
    }
  },
  props:['value','ok','message'],
  methods:{
    inpt(e){
           console.log(typeof(e.target.value))
    },
    msb(e){
       console.log(e)
    },
    sk(){
    console.log(this.picked)
    },
    skip(){
    console.log(this.picked)
    },
    greet(e){
        console.log(e)
    },
     out(value){
       var formattedValue = value
        // 删除两侧的空格符
        .trim()
        // 保留 2 位小数
        .slice(
          0,
          value.indexOf('.') === -1
            ? value.length
            : value.indexOf('.') + 3
        )
      // 如果值尚不合规，则手动覆盖为合规的值
      if (formattedValue !== value) {
        this.$refs.input.value = formattedValue
      }
      // 通过 input 事件带出数值
        this.$emit('input', Number(formattedValue))
      }
  },
  created(){
    console.log(this.picked)
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
