<template>
  <div class="hello">
     <div v-img="val.url" v-for="val in list"></div>
  </div>
</template>

<script>
export default {
  name: 'Native',
  data(){
    return{
      list:[
          {
             url:'http://g.hiphotos.baidu.com/image/h%3D300/sign=dfeb28dadd2a60594d10e71a1835342d/d4628535e5dde7111e0b87e5adefce1b9c1661cc.jpg'
          },
          {
             url:'http://a.hiphotos.baidu.com/image/h%3D300/sign=869535f221381f3081198ba999034c67/6159252dd42a28342c2131c152b5c9ea14cebf70.jpg' 
          },
          {
             url:'http://g.hiphotos.baidu.com/image/h%3D300/sign=0cd1ffd0ddca7bcb627bc12f8e086b3f/a2cc7cd98d1001e947ded21cb20e7bec55e797c7.jpg'
          }
      ]
    
    }
  },
  methods:{
     
  },
  directives:{
      img:{
         inserted:function(el,binding){
         var color=Math.floor(Math.random()*1000000);
         el.style.backgroundColor="#"+color;
         var img=new Image();
         img.src=binding.value;
         img.onload=function(){
             el.style.backgroundImage='url('+binding.value+')';             
         }
      }
      }
  },
  created(){
    this.$toast.center()
  }
}
 
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello div{
    width:200px;
    height: 200px;
    display: inline-block;
}
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
