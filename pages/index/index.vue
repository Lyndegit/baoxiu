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
		<mescroll-uni :down="downOption" @down="downCallback" :up="upOption" @up="upCallback" >
		<view class="qiang"></view>
		<view class="main" v-for="dataList in detail" :key="dataList.id">
			<NAUIcard :listData="detail"></NAUIcard>
			<!-- <NAUIcard :listData="detail"></NAUIcard>
			<NAUIcard :listData="detail"></NAUIcard>
			<NAUIcard :listData="detail"></NAUIcard>
			<NAUIcard :listData="detail"></NAUIcard>
			<NAUIcard :listData="detail"></NAUIcard>
			<NAUIcard :listData="detail"></NAUIcard>
			<NAUIcard :listData="detail"></NAUIcard>
			<NAUIcard :listData="detail"></NAUIcard> -->
		</view>
		</mescroll-uni>
		
		<view class="di">
			<image src="../../static/baoxiu.png" class="bz_tu" @tap="tiaozhuan" id="bx"></image>
			<text class="icon bl_icon"> &#xe610;</text>
			<text class="icon br_icon" @tap="zhuan"> &#xe654;</text>
		</view>
		</view>
		
</template>

<script>
	import NAUIcard from '@/components/NAUI-card/NAUI-card.vue'
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import uniIcon from "@/components/uni-icon/uni-icon.vue"
	 import mSearch from "@/components/mehaotian-search/mehaotian-search.vue"
	 import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
	export default {    
		data() {
			return {
				downOption: { 
						use: true, // 是否启用下拉刷新; 默认true
						auto: true, // 是否在初始化完毕之后自动执行下拉刷新的回调; 默认true 
					},
				upOption: {
						use: true, // 是否启用上拉加载; 默认true
						auto: true, // 是否在初始化完毕之后自动执行上拉加载的回调; 默认true
						isLock: false,//是否锁定上拉加载(设为true,可用于不触发upCallback,只保留回到顶部的功能)
						page: {
							num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
							size: 10 // 每页数据的数量,默认10
						},
						noMoreSize: 3, // 配置列表的总数量要大于等于5条才显示'-- END --'的提示
						empty: {
							tip: '暂无相关数据'
						}
					},
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
                creat_time: '2019/7/17'
            },
			}
		},
		onLoad() {

		},
		methods: {
            // search(e, val) {
            // console.log(e, val);    搜索
            // this['val'+val] = e;
			tiaozhuan(){
				   uni.navigateTo({ 
					url:'../wybx/wybx',  
				})
				},
				zhuan(){
					uni.navigateTo({
						url:'../my/my'
					})
				},
			downCallback(mescroll){
					// 第1种: 请求具体接口
					uni.request({
						url: 'xxxx',
						success: () => {
							// 成功隐藏下拉加载状态
							mescroll.endSuccess()
						},
						fail: () => {
							// 失败隐藏下拉加载状态
							mescroll.endErr()
						}
					})
        },
		upCallback(mescroll) {
					// 此时mescroll会携带page的参数:
					let pageNum = mescroll.num; // 页码, 默认从1开始
					let pageSize = mescroll.size; // 页长, 默认每页10条
					uni.request({
						url: 'xxxx?pageNum='+pageNum+'&pageSize='+pageSize,
						success: (data) => {
							// 接口返回的当前页数据列表 (数组)
							let curPageData = data.xxx; 
							// 接口返回的总页数 (比如列表有26个数据,每页10条,共3页; 则totalPage值为3)
							let totalPage = data.xxx; 
							// 接口返回的总数据量(比如列表有26个数据,每页10条,共3页; 则totalSize值为26)
							let totalSize = data.xxx; 
							// 接口返回的是否有下一页 (true/false)
							let hasNext = data.xxx; 
							
							// 成功隐藏下拉加载状态
							//方法一(推荐): 后台接口有返回列表的总页数 totalPage
							mescroll.endByPage(curPageData.length, totalPage); 
							
							//方法二(推荐): 后台接口有返回列表的总数据量 totalSize
							//mescroll.endBySize(curPageData.length, totalSize); 
							
							//方法三(推荐): 您有其他方式知道是否有下一页 hasNext
							//mescroll.endSuccess(curPageData.length, hasNext); 
							
							//设置列表数据
							if(mescroll.num == 1) this.dataList = []; //如果是第一页需手动置空列表
							this.dataList = this.dataList.concat(curPageData); //追加新数据
						},
						fail: () => {
							// 失败隐藏下拉加载状态
							mescroll.endErr()
						
						},
						})
						}
						},
	
		components:{uniNavBar,uniIcon,mSearch,NAUIcard,MescrollUni}
}
</script>

<style scoped>
	.content {
		/* display: flex; */
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
		height: 150rpx;
	}
		.main{
			
			margin-left: 40rpx;
			width: 90%;
	}
	.br_icon{
	  position: fixed;
		  bottom: 10rpx;
		  right: 60rpx;
		  color: #AAAAAA;
		  font-size: 108rpx;
		  z-index: 99;
	}	
	.bl_icon{
		 position: fixed;
	      bottom: 10rpx;
		  left: 60rpx;
		  color: #AAAAAA;
		  font-size: 108rpx;
		  z-index: 99;
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
		 z-index: 99;
	}		
	.di{
		display: flex;
		 justify-content:center;
	}
	.bz_tu:hover{
		transition: all 0.3s ease;
		color: #1AAD19;
		width: 300rpx;
		height:300rpx ;
		opacity:0;
	}
</style>

