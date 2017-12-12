<template>
  <div class="hello">
    <h1>{{ msg }}{{ this.$route.params.userId }}</h1>
    <div>
        {{todo.text}}
    </div>
    <p>{{reserveMessage()}}</p>
    <p>{{now}}</p>
    <input v-model="question"/>
    <p :style="{color:activecolor,fontSize:fontSize+'px',transform:transform}">{{answer}}</p>
    <address :class="[isActive ? activeClass : '', errorClass]">杨树</address>
    <top-item v-model="price" class="boos foos" :ok="true" message="hello!Vue.js"></top-item>
  </div>
</template>

<script>
import TopItem from '../component/TopItem'
export default {
  name: 'Alert',
  data(){
    return{
      msg: '欢迎来到Vue.js的世界',
      price:'',
      todo: {
            text: 'Learn Vue',
            isComplete: '购买薪金宝'
        },
      message:'欢迎来到vue的世界',
      now:'俞茜茜是吧？',
      answer:'这是个很扯淡的问题',
      question:'',
      isActive: true,
      activeClass:'activeClass',
      errorClass:'errorClass',
      error: null,
      Active:false,
      activecolor:'red',
      fontSize:30,
      transform:'translate(-50%,-50%)'
    
    }
  },
  watch:{
    question(){
      this.answer="的确很扯淡！"
    }
  },
  methods:{
    reserveMessage(){
      return this.message.split('').reverse().join('')
    }
  },
  computed: {
  classObject: function () {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }
},
  components:{
      TopItem
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
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
