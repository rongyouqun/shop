<template>
  <div id="app">
   
  <div class="warp">
  <loading v-show='loading'></loading> 
     <Headers v-show='showHeader'></Headers>  
         <NavView v-show='showNav'></NavView>
      
      <router-view></router-view> 
       <Footers></Footers>
    </div>
    <div class="zhe">

    </div>
    <div class="car">
      <div class="c_top">
        <h3>清空</h3>
        <a href="javascript:;">更多</a>
      </div>
      <div class="c_main">
        <span class="xuan"><img src="./assets/img/pay_06.png"/></span>
        <img src="./assets/img/alr_sign_02.png" class="i_2" />
        <a href="#">香菇肥牛味</a>
        <span class="mon">￥0.50</span>
        <span class="jian"><img src="./assets/img/test_1_03.png"/></span>
        <span class="num">2</span>
        <span class="jia"><img src="./assets/img/shop_07.png"/></span>
      </div>
      <div class="c_main">
        <span class="xuan"><img src="./assets/img/pay_06.png"/></span>
        <img src="./assets/img/alr_sign_02.png" class="i_2" />
        <a href="#">香菇肥牛味</a>
        <span class="mon">￥0.50</span>
        <span class="jian"><img src="./assets/img/test_1_03.png"/></span>
        <span class="num">2</span>
        <span class="jia"><img src="./assets/img/shop_07.png"/></span>
      </div>
      <div class="c_un">
        <span class="b_car"><img src="./assets/img/shop_12.png"/></span>
        <ul>
          <li class="li_on">
            <a href="">￥65.00</a>
          </li>
          <li class="li_two"  >
            <a ui-sref='mylist'>去结算</a>
          </li>
        </ul>
      </div>
        <div ng-view=''></div>
    </div>
  </div>
</template>
<script>
 import Headers from './components/Header.vue'
 import NavView from './components/Nav.vue'
import Footers from './components/Footer.vue'
import {mapGetters,mapActions} from 'vuex'
  export default {
      computed:mapGetters([
       'showHeader',
       'showNav',
       'loading'
      ]),
    //监听路由
     watch:{  //当路由发生变化的时候
      $route(to,from){
        if(to.path=='/myself' || to.path=='/dingdan'){
          this.$store.dispatch('hideHeader')
           this.$store.dispatch('hideNav')
        }else{
          this.$store.dispatch('showHeader')
           this.$store.dispatch('showNav')
        }
      }
     },
   
    components:{
         Headers,
         NavView,
         Footers
    },
    mounted(){
      this.slider();
    },
    methods:{
         slider(){
            var swiper = new Swiper('.swiper-container', {
            slidesPerView: 4.5,
            //      centeredSlides: true,
            paginationClickable: true,
            spaceBetween: 10,
            grabCursor: true
    });
         }
    }
  }
</script>
<style>
  @import  './assets/css/hang.css';
</style>

