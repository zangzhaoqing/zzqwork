<template>
  <div class="hello">
    <h1>{{ msg }}{{$route.params.userId}}</h1>
    <button @click="add">add</button>
    <button @click="remove">remove</button>
    <button @click="shuff">shuff</button>  
    <transition-group name="list-complete" tag="div">
   
    <span v-for="item of array" :key="item" class="list-complete-item"> {{item}} </span>
    
    </transition-group>
    <Banner></Banner>  
  </div>
</template>

<script>
import {Lodash} from '../assets/lodash'
import Banner from '../component/Banner'
export default {
  name: 'Toast',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',     
      numbers: [ 1, 2, 3, 4, 5 ],
      array:[1,2,3,4,5,6,7,8,9,10],
      nextNum:11,
      items: [1,2,3,4,5,6,7,8,9]      
    }
  },
  methods:{
      even: function (numbers) {
        return numbers.filter(function (number) {
        return number % 2 === 0
    })
  },
  floor:function(){
     return Math.floor(Math.random()*this.array.length)
  },
  add:function(){
    this.array.splice(this.floor(),0,this.nextNum++)
  },
  remove:function(){
    this.array.splice(this.floor(),1)
    this.nextNum>1?this.nextNum--:1    
  },
  shuff(){
     this.items = _.shuffle(this.items)
  }
  },
  created(){
     
  },
  components:{
    Banner
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
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
