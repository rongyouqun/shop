<template id="nav">

	<div class="type">
		<ul>
			<!-- <li class="on">
				
			</li>
			<li>
				<a href="javascript:;">详情</a>
			</li>
			<li>
				<a href="javascript:;">评价</a>
			</li> -->
			<router-link tag='li' active-class="on" to='/home'>
                                         <a href="javascript:;">商品</a>
			</router-link>
			<router-link tag='li' active-class="on" to='/xiangqing'>
                                         <a href="javascript:;">详情</a>
			</router-link>
			<router-link tag='li' active-class="on" to='/pingjia'>
                                         <a href="javascript:;">评价</a>
			</router-link>
		</ul>
	</div>
	

</template>