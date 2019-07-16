<template>
	<view class="content">
		<view class="nav">
			<uni-nav-bar fixed="true" shadow="true" status-bar="true" background-color="#2453f6" class="nav_demo" >			  
             <view><mSearch :show="false" @search="search($event,1)" backgroundColor="#2453f6"></mSearch></view>
			 <view slot="left"><text class="icon l_icon">&#xe786;</text></view>
			 <view slot="right"><text class="icon">&#xe618;</text></view>
            </uni-nav-bar>
			<!-- <text class="sss">搜索的值：{{val1}}</text> -->  
		</view>
		<view class="qiang"></view>
		<view class="main">
			<NAUIcard :listData="detail"></NAUIcard>
			<NAUIcard :listData="detail"></NAUIcard>
			<NAUIcard :listData="detail"></NAUIcard>
			<NAUIcard :listData="detail"></NAUIcard>
			<NAUIcard :listData="detail"></NAUIcard>
			<NAUIcard :listData="detail"></NAUIcard>
			<NAUIcard :listData="detail"></NAUIcard>
			<NAUIcard :listData="detail"></NAUIcard>
			<NAUIcard :listData="detail"></NAUIcard>
		</view>
		<view class="di">
			<image src="../../static/baoxiu.png" class="bz_tu" @tap="tiaozhuan" id="bx"></image>
			<text class="icon bl_icon"> &#xe610;</text>
			<text class="icon br_icon"> &#xe654;</text>
		</view>
		</view>
		
</template>

<script>
	import NAUIcard from '@/components/NAUI-card/NAUI-card.vue'
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import uniIcon from "@/components/uni-icon/uni-icon.vue"
	 import mSearch from "@/components/mehaotian-search/mehaotian-search.vue"
	export default {
		data() {
			return {
				// val1: '',   搜索 
				detail: {
                id: '12',
                content: '我的水龙头坏了！',
                img_url: [
					   '../../static/u=3178366586,3960110891&fm=26&gp=0.jpg',
					   '../../static/logo.png',
                    // 'http://img.nauzone.cn/78764bea5a2c8828b433d7b050bcc5a4',
                    // 'http://img.nauzone.cn/8cfa5e52763ec60ab9ec933aa594a1c0',
                    // 'http://img.nauzone.cn/778a955fdc252fb432c68f1247835b12',
                    // 'http://img.nauzone.cn/4068d8d16c125a2ab76089166adf0903',
                    // 'http://img.nauzone.cn/73eb04f0d7d426d96de6f356f181da5e'
                ],
                user_name: 'lyn',
                mark: true,
                type: '报修',
                points: '0',
                show_times: '0',
                anony: false,
                avatarurl: '../../static/logo.png',
                creat_time: '1552748677'
            },
			}
		},
		onLoad() {

		},
		methods: {
            // search(e, val) {
            // console.log(e, val);    搜索
            // this['val'+val] = e;
			// tiaozhuan(){
			// 	   uni.navigateTo({
			// 		url:'../wybx/wybx',  跳转动画
			// 	})
			// 	}
        },
	
		components:{uniNavBar,uniIcon,mSearch,NAUIcard}
}
</script>

<style scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50upx;
	}

	.nav {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		

			}
	.nav_demo{
		width: 100%;
	}
		
	.uni-view.button-item{
	  margin-bottom: 5rpx;
	  color: #FFFFFF;
	}.l_icon{
		padding-left:20rpx ;
		
	}.qiang{
		height: 80rpx;
	}
		.main{
			width: 90%;
	}
	.br_icon{
	  position: fixed;
		  bottom: 10rpx;
		  right: 60rpx;
		  color: #AAAAAA;
		  font-size: 108rpx;
	}	
	.bl_icon{
		 position: fixed;
	      bottom: 10rpx;
		  left: 60rpx;
		  color: #AAAAAA;
		  font-size: 108rpx;
	}
	.bl_icon:hover{
		color: #2453f6;
	}
	.br_icon:hover{
		color: #2453f6;
	}
	.bz_tu{
         position: fixed;
		 bottom: 10rpx;
		 width: 130rpx;
		 height: 130rpx;
	}		
	.di{
		display: flex;
		 justify-content:center;
	}
	.bz_tu:hover{
		transition: all 0.5s ease;
		color: #1AAD19;
		width: 300rpx;
		height:300rpx ;
		opacity:0;
	}
</style>
