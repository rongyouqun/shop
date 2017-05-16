import Vue from 'vue'
import App from './App.vue'
 require('./assets/css/reset.css') 
import VueRouter from 'vue-router'
import routerConfig from './router.config.js'
import store from './store/'
import axios from 'axios'
import Loading from './components/loading'


Vue.use(VueRouter);
Vue.use(Loading);
//关于axios配置
axios.interceptors.request.use(function(config){
	//配置发送请求信息
	store.dispatch('showLoading')
	return config;
},function(error){
  return Promise.reject(error);
});

axios.interceptors.response.use(function(reponse){
	//配置请求回来的信息
	store.dispatch('hideLoading')
	return reponse;
},function(error){
   return Promise.reject(error);
});

//p配置请求的路径
//axios.defaults.baseURL='http://localhost:8082'
//默认同步
//
const router = new VueRouter({
      mode:'history',
      scrollBehavior:()=>({y:0}),
      routes:routerConfig

});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
