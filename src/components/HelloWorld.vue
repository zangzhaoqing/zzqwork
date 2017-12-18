<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <router-link :to="{name:'Alert',params: { userId: 1234 }}">User</router-link>
    <button @click="skip"> 跳转 </button>
    <button v-on:click="show = !show">
    Toggle
    </button>
    <transition name="bounce">
    <p v-if="show" title="这是个title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
    </transition>
   <div>
  <button @click="shows = !shows">
    Toggle render
  </button>
  <transition
    name="custom-classes-transition"
    enter-active-class="animated tada"
    leave-active-class="animated bounceOutRight"
    :duration="{ enter: 500, leave: 800 }"
  >
    <p v-if="shows">hello</p>
  </transition>
   </div>
   <button @click="sho = !sho">
    Toggle
  </button>
  <transition
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
    v-bind:css="false"
  >
    <p v-if="sho">
      Demo
    </p>
  </transition>
  <transition name="component-fade" mode="out-in">
  <component v-bind:is="view"></component>
  </transition>
  <input type="text" v-focus>
   
   <div class="swiper-container">
      <div class="swiper-wrapper">
           <div class="swiper-slide" v-for="item in items">             
             <img :src="item.url" alt="">
           </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <!-- 如果需要滚动条 -->
      <div class="swiper-scrollbar"></div>
   </div>
  
  </div>
</template>

<script>
import Counter from '../component/Counter'
import {Velocity} from '../assets/velocity'
import Swiper from '../assets/swiper.min'
// import msg1 from 'http://pic2.ooopic.com/12/22/94/30b1OOOPIC5c.jpg'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: true,
      num:'',
      shows:true,
      sho:true,
      view: 'v-a',
      // msg1:require('http://pic2.ooopic.com/12/22/94/30b1OOOPIC5c.jpg')
      items:[
        {
          url:'http://img1.imgtn.bdimg.com/it/u=594559231,2167829292&fm=27&gp=0.jpg',
        },
        {
          url:'http://pic2.ooopic.com/12/22/94/30b1OOOPIC5c.jpg',
        },
        {
          url:'http://img.taopic.com/uploads/allimg/121019/234917-121019231h258.jpg'  
        }
      ]
    }
  },
  mounted(){
   this.$nextTick(()=>{
     let mySwiper=new Swiper('.swiper-container',{
       direction:'horizontal',
       loop:true,
       // 如果需要分页器
       pagination: '.swiper-pagination',
       // 如果需要前进后退按钮
       nextButton: '.swiper-button-next',
       prevButton: '.swiper-button-prev',
       // 如果需要滚动条
       scrollbar: '.swiper-scrollbar',
       grabCursor: true,
       paginationClickable: true,
       spaceBetween: 30,
       centeredSlides: true,
       autoplay: 2500
     })
   })
  },
  directives: {
  focus: {
    // 指令的定义
    inserted: function (el) {
      el.focus()
    }
  }
},
  methods:{
    skip(){
      this.$router.push({name:'Toast',params:{userId:123}})
    },
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.transformOrigin = 'left'
    },
    enter: function (el, done) {
      Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
      Velocity(el, { fontSize: '1em' }, { complete: done })
    },
    leave: function (el, done) {
      Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
      Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
      Velocity(el, {
        rotateZ: '45deg',
        translateY: '30px',
        translateX: '30px',
        opacity: 0
      }, { complete: done })
    }
  },
  components:{
    Counter,
    'v-a': {
      template: '<div>Component A</div>'
    },
    'v-b': {
      template: '<div>Component B</div>'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('../assets/animate.css');
@import url('../assets/swiper.min.css');

.swiper-container {
  width: 600px;
  height: 300px;
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
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
