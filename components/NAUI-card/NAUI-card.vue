<template name="NAUI-card">
	<view class="cu-card dynamic margin-top-sm margin-bottom-sm">
		<view class="cu-item shadow ">
			<view class="cu-list menu menu-avatar">
				<view class="cu-item">
					<view class="cu-avatar round lg">
					<!-- 头像，匿名时显示统一的匿名头像，若需自定义请自行修改 -->
						<image class="avatar round" :src="null ? 'http://img.nauzone.cn/20141118153114_aiRyY.thumb.700_0.jpeg' : avatarurl"></image>
						<view v-if="mark" class="cu-tag badge bg-blue">V</view>
					</view>
					<view class="content padding-tbl">
						<view class="henflex">
							<view>{{anony? '一位路过的吃瓜群众' : username}}</view>
							<view class="right" v-if="mark">
								<view class="cu-tag round bg-blue sm">官方</view>
							</view>
							<view class="right" v-if="anony">
								<view class="cu-tag round bg-orange sm">匿名</view>
							</view>
							<view class="huati text-orange text-bold">#{{ type }}#</view>
						</view>
						<view class="text-gray text-sm flex justify-between">{{creat_time}}</view>
					</view>
				</view>
			</view>
			<view class="text-content" @click="toDetail(id)">{{ content }}</view>
			<view class="grid col-1 flex-sub padding-lr" @click="previewimg(imgurl)">
				<image class="bg-img only-img" :src="imgurl"></image>
			</view>
			<view class="text-gray text-sm text-right padding">
				<text class="right">校区:{{ show_times }}</text>
			</view>
		</view>
	</view>
</template>
<script>
export default {
	name: "NAUI-card",
	data(){
		return{
			
		}
	},
	props: {
		listData: {
			type: Array, 
		},
		points:Number,
		show_times:String,
		imgurl:String,
		content:String,
		id:Number,
		username:String,
		mark:Boolean,
		anony:Boolean,
		type:String,
		avatarurl:String,
		creat_time:String,
	},
	created:function(){
		this.creat_time = this.dateTimeFormatter(parseInt(this.creat_time)*1000)
	},
	methods:{
		previewimg(url){//预览卡片图片
		console.log(url)
			// uni.previewImage({
			// 	urls:url,
			// 	indicator: "number",
			// 	loop:false,
			// })
		},
// 		toDetail(id){//卡片详情跳转，信息及详情页自定义
// 			uni.navigateTo({
// 				url:"../expolre/expolre?id="+id
// 			})
// 		},
		dateTimeFormatter (t) {
		  t = new Date(t).getTime()
		  t = new Date(t)
		  var year = t.getFullYear()
		  var month = (t.getMonth() + 1)
		  month = this.checkAddZone(month)
		 
		  var date = t.getDate()
		  date = this.checkAddZone(date)
		 
		  var hour = t.getHours()
		  hour = this.checkAddZone(hour)
		 
		  var min = t.getMinutes()
		  min = this.checkAddZone(min)
		 
		  var se = t.getSeconds()
		  se = this.checkAddZone(se)
		 
		  return year + '-' + month + '-' + date + ' ' + hour + ':' + min + ':' + se
		},
		checkAddZone (num) {
		  return num<10 ? '0' + num.toString() : num
		},
	},
}
</script>
<style>
	
	.bg-orange {
	  background-color: #f37b1d;
	  color: #fff;
	}
	
	.cu-tag.sm {
	  font-size: 20rpx;
	  padding: 0rpx 12rpx;
	  height: 32rpx;
	}
	
	.padding {
	  padding: 30rpx;
	}
	
	.text-right {
	  text-align: right;
	}
	
	.bg-img {
	  background-size: cover;
	  background-position: center;
	  background-repeat: no-repeat;
	}
	
	.padding-lr {
	  padding-left: 30rpx;
	  padding-right: 30rpx;
	}
	
	.padding-tbl {
	  padding-left: 20rpx;
	  padding-top: 20rpx;
		padding-bottom: 20rpx;
	}
	
	.flex-sub {
	  flex: 1;
	}
	
	.grid {
	  display: flex;
	  flex-wrap: wrap;
	}
	
	.grid.col-1>view {
	  width: 100%;
	}
	
	.text-content {
	  line-height: 1.6;
	}
	
.justify-between {
	justify-content: space-between;
}

.flex {
	display: flex;
}

.text-sm {
	font-size: 24rpx;
}

.text-bold {
	font-weight: bold;
}

.text-gray {
	color: #aaa;
}

.text-orange {
	color: #f37b1d;
}

.huati {
	margin-left: auto;
	margin-right: 20upx;
}

.bg-blue {
	background-color: #0081ff;
	color: #fff;
}

.right {
	margin-left: 20upx;
}

.henflex {
	display: flex;
	flex-flow: row;
}

.cu-list.menu > .cu-item .content {
	line-height: 1.6em;
	flex: 1;
	font-size: 30rpx;
}

.bg-pink {
	background-color: #e03997;
	color: #fff;
}

.cu-tag {
	font-size: 24rpx;
	vertical-align: middle;
	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	padding: 0rpx 16rpx;
	height: 48rpx;
	font-family: Helvetica Neue, Helvetica, sans-serif;
}

.cu-tag.badge {
	border-radius: 200rpx;
	position: absolute;
	top: -10rpx;
	right: -10rpx;
	font-size: 20rpx;
	padding: 0rpx 10rpx;
	height: 28rpx;
	color: #fff;
}

.avatar {
	height: 100upx;
}

.cu-avatar.lg {
	width: 96rpx;
	height: 96rpx;
	font-size: 2em;
}

.round {
	border-radius: 5000rpx;
}

.cu-avatar {
	font-variant: small-caps;
	margin: 0;
	padding: 0;
	display: inline-flex;
	text-align: center;
	justify-content: center;
	align-items: center;
	background: #ccc;
	color: #fff;
	white-space: nowrap;
	position: relative;
	width: 64rpx;
	height: 64rpx;
	background-size: cover;
	background-position: center;
	vertical-align: middle;
	font-size: 1.5em;
}

.cu-list.menu-avatar > .cu-item {
	padding-left: 140rpx;
}



.cu-list.menu {
	display: block;
	overflow: hidden;
}

.cu-list + .cu-list {
	margin-top: 30rpx;
}

.cu-list.menu > .cu-item {
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-height: 100rpx;
	background: #fff;
	padding: 0 30rpx;
}

.shadow {
	box-shadow: 0 16rpx 16rpx  rgba(0, 0, 0, 0.1); 
}

.cu-card {
	display: block;
	/* overflow: hidden; */
	padding-bottom: 20rpx;
}

.cu-card > .cu-item {
	display: block;
	background-color: #fff;
	overflow: hidden;
	border-radius: 100rpx;
	/* margin-left: 30rpx;
	margin-right: 30rpx; */
}

.cu-card > .cu-item.shadow-blur {
	overflow: initial;
}

.cu-card.no-card > .cu-item {
	margin: 0rpx;
	border-radius: 0rpx;
}

.cu-card .grid.grid-square {
	margin-bottom: -20rpx;
}

.cu-card.case .image {
	position: relative;
}

.cu-card.case .image image {
	width: 100%;
}

.cu-card.case .image .cu-tag {
	position: absolute;
	right: 0;
	top: 0;
}

.cu-card.case .image .cu-bar {
	position: absolute;
	bottom: 0;
	width: 100%;
	background-color: transparent;
	padding: 0rpx 30rpx;
	word-wrap: normal;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.cu-card.case.no-card .image {
	margin: 30rpx 30rpx 0;
	overflow: hidden;
	border-radius: 10rpx;
}

.cu-card.dynamic {
	display: block;
}

.cu-card.dynamic > .cu-item {
	display: block;
	background-color: #fff;
	overflow: hidden;
}

.cu-card.dynamic > .cu-item > .text-content {
	padding: 0 30rpx 0;
	max-height: 6.4em;
	overflow: hidden;
	font-size: 30rpx;
	margin-bottom: 20rpx;
}

.cu-card.dynamic > .cu-item .square-img {
	width: 100%;
	height: 200rpx;
	border-radius: 6rpx;
}

.cu-card.dynamic > .cu-item .only-img {
	width: 100%;
	height: 320rpx;
	border-radius: 6rpx;
}

.margin-top-sm {
	margin-top: 20rpx;
}

.margin-bottom-sm {
	margin-bottom: 20rpx;
}
</style>
