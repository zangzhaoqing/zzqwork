<template>
  <div id="app">
    <transition-group name="fadeIn" tag="ul">
    <div class="slide" v-for="(item,index) in banners" v-show="index === cope" :key="'a'+index">
        
        <button @click="left"><</button>
       
        <a :href="item.sourceUrl" target="_blank">
            <img :src="item.imgUrl" alt="">
        </a>
       
        <button @click="right" v-focus>></button>
      
    </div>
    </transition-group>
  </div>
</template>

<script>
import luan from  '../assets/banner1.jpg'
import mouse from '../assets/banner2.jpg'
import yellow from '../assets/banner3.jpg'
export default {   
  name: 'Banner',
  data () {
    return {
      banners:[
          { imgUrl: luan },
          { imgUrl: mouse },
          { imgUrl: yellow }
        ],
       cope:0,
       bind:'bind'
    }
  },
  methods:{
      copes(){
        return this.cope=Math.floor(Math.random()*3)
      },
      left(){
         console.log(this.cope)
         this.cope>0?this.cope==this.cope--:this.cope+=2
      },
      right(){
         console.log(this.cope)
         this.cope<2?this.cope==this.cope++:this.cope-=2        
      }
      
  },
  mounted(){
      this.copes()    
  },
  directives: {
  focus: {
    // 指令的定义        
    inserted: function (el) { 
      el.click()                        
    }
  }
}   
}
</script>

<style scoped>
button:nth-of-type(1),button:nth-of-type(2){
    border:none;
    height: 50px;
}
.slide{
   display: flex;
   justify-content: center;
   align-items: center;
}
a[target="_blank"]{
    display: inline-block;
}
a img{
    width:340px;
}
.fadeIn-enter-active,.fadeIn-leave-active {
  transition: all 0.5s ease;
}
.fadeIn-enter-active,.fadeIn-leave{
    opacity: 1;
    /* z-index:1; */
   
}
.fadeIn-enter,.fadeIn-leave-active {
    opacity: 0;
  /* z-index:0; */
   
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
