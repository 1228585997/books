<template>
	<div class="container">
		<div class="footer">
			<mt-tabbar v-model="selected">
				<mt-tab-item id="/about">
					<div class="urlimg">
						<img slot="icon" src="../assets/1.png" class="img"  v-if="!(selected=== '/about')">
						<img slot="icon" src="../assets/1.1.png" class="img" v-if="selected=== '/about'">
					</div>
					<div class="text" v-if="!(selected=== '/about')">首页</div>
					<div class="text1" v-if="selected=== '/about'">首页</div>
				</mt-tab-item>
				<mt-tab-item id="/lizhang">
					<div class="urlimg">
						<img slot="icon" src="../assets/2.png" class="img" v-if="!(selected=== '/lizhang')">
						<img slot="icon" src="../assets/1.2.png" class="img" v-if="selected=== '/lizhang'">
					</div>
					<div class="text" v-if="!(selected=== '/lizhang')">礼帐</div>
					<div class="text1" v-if="selected=== '/lizhang'">礼帐</div>
				</mt-tab-item>
				<mt-tab-item id="/add">
					<div class="urlimg1">
						<img slot="icon" src="../assets/3.png" class="img1" v-if="!(selected=== '/add')">
						<img slot="icon" src="../assets/1.3.png" class="img1" v-if="selected=== '/add'">
					</div>
					<div class="text" v-if="!(selected=== '/add')"></div>
					<div class="text1" v-if="selected=== '/add'"></div>
				</mt-tab-item>
				<mt-tab-item id="/lishi">
					<div class="urlimg">
						<img slot="icon" src="../assets/4.png" class="img" v-if="!(selected=== '/lishi')">
						<img slot="icon" src="../assets/1.4.png" class="img" v-if="selected=== '/lishi'">
					</div>
					<div class="text"  v-if="!(selected=== '/lishi')">礼事</div>
					<div class="text1" v-if="selected=== '/lishi'">礼事</div>
				</mt-tab-item>
				<mt-tab-item id="/profile">
					<div class="urlimg">
						<img slot="icon" src="../assets/5.png" class="img" v-if="!(selected=== '/profile')">
						<img slot="icon" src="../assets/1.5.png" class="img" v-if="(selected=== '/profile')">
					</div>
					<div class="text" v-if="!(selected=== '/profile')">我的</div>
					<div class="text1" v-if="(selected=== '/profile')">我的</div>
				</mt-tab-item>
			</mt-tabbar>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'footers',
		data() {
			return {
				selected: '/about'
			}
		},
		watch: {
			selected(a, b) {
				//console.log(a)
				location.href = `#${this.selected}`
			}
		},
		created() {
			this.selected = this.$route.path
		}
	}
</script>

<style scoped>
	.mint-tabbar {
		height: 100px;
		background: #fff;
		position: fixed;
		left: 0;
		bottom: 0;
		border-top: 1px #ccc solid;
		box-sizing: border-box;
	}

	.urlimg {
		width: 60px;
		height: 60px;
		text-align: center;
		margin: 0 auto;
	}
	.text{
		color:#333;
		margin-top:5px;
		font-size:20px;
	}
	.urlimg .img {
		width: 100%;
		height: 100%;
	}
	.text1{
		color:#d81e06;
		font-size:20px;
		margin-top:5px;
	}
	.mint-tabbar > .mint-tab-item.is-selected{
		background-top:1px #ccc solid;
		box-sizing: border-box;
		    color: #26a2ff;
			background:transparent;
	}
	.urlimg1{
		width: 80px;
		height:80px;
		margin:0 auto;
	}
	.urlimg1 .img1{
		width: 100%;
		height: 100%;
	}
</style>
