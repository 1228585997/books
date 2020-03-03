<template>
	<div class="box">
		<div class="header">
			<van-icon  name="arrow-left" size="30" class="arrow-left" @click="$router.go(-1)"/>
			<ul class="list clearfix">
				<li v-for="(item,index) in data" :key="index" @click="btn(index)">
					<span @click="z_index=index" :class="z_index==index?'active':''">{{item}}</span>
				</li>
			</ul>
		</div>
		<div class="con">
			<slot name="tab1"></slot>
			<slot name="tab2"></slot>
		</div>
	</div>
</template>

<script>
	export default{
		name:'tab',
		props:{
			data:{
				type:Array,
				require:true,
				
			}
		},
		data(){
			return{
				z_index:0
			}
		},
		methods:{
			btn(i){
				this.$emit('cg',i)
			}
		},
		watch:{
			$route(to,from){
			    console.log(to.path);
			 }
		}
	}
</script>

<style scoped>
	.box{
		width: 100vw;
		height: 100vh;
		background:#f2f2f2;
	}
	.arrow-left{
		margin:20px 0;
	}
	.header{
		box-sizing: border-box;
		height: 90px;
		background:#fff;
		padding:0 20px;
		display:flex;
		justify-content:space-between;
	}
	.plus{
		line-height:90px;
		color:#959595;
	}
	.active{
		background:#199ed8;
		color:#fff;
		border-radius:5px 0 0 5px;
	}
	.list{
			width: 362px;
			height: 65px;
			border:2px #43b0df solid;
		    text-align: center;
			position:absolute;
			left: 105px;
			top: 10px;
			border-radius:10px;
			display:flex;
			color:#3dadde;
			font-size:27px;
			box-sizing: border-box;
	}
	.list li{
		width: 181px;
		height: 61px;
		line-height:61px;
	}
	.list li span{
		display:inline-block;
		width: 100%;
		height: 100%;
	}
</style>
