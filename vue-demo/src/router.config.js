import Home from './components/Home.vue'
import Xiangqing from './components/xiangqing.vue'
import Pingjia from './components/pingjia.vue'
import  dingdan from './components/dingdan.vue'
import myself from './components/myself.vue'
export default [
       {
       	path:'/home',
       	component:Home
       },
        {
       	path:'/xiangqing',
       	component:Xiangqing
       },
        {
       	path:'/pingjia',
       	component:Pingjia
       },
       {
         path:'/',
         redirect:'/home'
       },
       {
        path:'/dingdan',
        component:dingdan
       },
        {
        path:'/myself',
        component:myself
       }
]