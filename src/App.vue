<template>
    <div class="container">
        <!-- 头部导航 -->
        <mt-header fixed title="cms案例"></mt-header>
        
        <!-- Container 主体内容 -->
        <transition mode="out-in">
			<router-view></router-view>
		</transition>

        <!-- 底部 TabBar 选项卡 -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scope>
    .container {
        padding-top: 40px;
		overflow-x: hidden;
    }
	.v-enter, 
	.v-leave-to {
		opacity: 0;
	}
	.v-enter {
		transform: translateX(50%);
	}
	.v-leave-to {
		transform: translateX(-100%);
		position: absolute;
	}

	.v-enter-active,
	.v-leave-active {
		transition: all .2s ease;
	}
</style>