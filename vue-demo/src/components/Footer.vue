<template>
	 <footer>
				<!-- <dl>
					<dt><a href="store.html"><img src="../assets/img/my_order_05.png"/></a></dt>
					<dd>首页</dd>
				</dl>
				<dl>
					<dt><a href="order.html"><img src="../assets/img/per_center_12.png"/></a></dt>
					<dd>订单</dd>
				</dl>
				<dl>
					<dt><img src="../assets/img/per_center_13.png"/></dt>
					<dd><font color="#007AFF">我的</font></dd>
				</dl> -->
				 <router-link tag='dl' active-class="on" to='/home'>
                                               <dt><a href="store.html"><img src="../assets/img/my_order_05.png"/></a></dt>
					<dd>首页</dd>
				</router-link>
				 <router-link tag='dl' active-class="on" to='/dingdan'>
		                                 <dt><a href="order.html"><img src="../assets/img/per_center_12.png"/></a></dt>
					<dd>订单</dd>
				</router-link>
				<router-link tag='dl' active-class="on" to='/myself'>
		                                 <dt><img src="../assets/img/per_center_13.png"/></dt>
					<dd><font color="#007AFF">我的</font></dd>
				</router-link>
			</footer>
</template>
