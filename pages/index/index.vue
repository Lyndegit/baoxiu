<template>
	<view class="content">
		<cmd-nav-bar back title="报修列表"></cmd-nav-bar>
		<view class="nav">
			<uni-nav-bar fixed="true" shadow="true" status-bar="true" background-color="#2453f6" class="nav_demo" >			  
             <view>
				 <!-- <text class="tip">关键词:</text> -->
				 <input class="word-input" placeholder="请输入搜索关键词" v-model="val"/>
			 </view><!-- @search="search($event,1)" --><!-- <mSearch :show="false"  backgroundColor="#2453f6" v-model="val"></mSearch> -->
			 <view slot="left"><image src="../../static/weizhi_w.png" mode="" class="l_icon"></image></view>
            </uni-nav-bar>
		</view>
		<mescroll-uni :down="downOption" @down="downCallback"  @init="mescrollInit" :up="upOption" @up="upCallback"><!-- :up="upOption" @up="upCallback" -->
		<view class="qiang"></view>
		<view class="main" v-for="dataList in categoryList" :key="dataList.fixid">  
			<NAUIcard :listData="categoryList"  :id="dataList.fixid" :imgurl="dataList.imgurl" :content="dataList.content" :avatarurl="dataList.touxiang"  :type="dataList.type1" :creat_time="dataList.timenow" :username="dataList.username" :show_times="dataList.value"></NAUIcard>
		</view>
		</mescroll-uni>
		
		<view class="di">
			<image src="../../static/baoxiu.png" class="bz_tu" @tap.prevent="tiaozhuan" id="bx"></image>
			<!-- <text class="icon bl_icon"> &#xe610;</text> --> <image src="../../static/liebiao_g.png" mode="" class="bl_icon" @tap.prevent="liaotian"></image>
			<!-- <text class="icon br_icon" @tap="zhuan"> &#xe654;</text> --> <image src="../../static/lianxi_g.png" mode="" @tap.prevent="zhuan" class="br_icon"></image>
		</view>
		<view class="dadi">
		</view>
		</view>
		
</template>

<script>
	import cmdNavBar from "@/components/cmd-nav-bar/cmd-nav-bar.vue"
	import NAUIcard from '@/components/NAUI-card/NAUI-card.vue'
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import uniIcon from "@/components/uni-icon/uni-icon.vue"
	 import mSearch from "@/components/mehaotian-search/mehaotian-search.vue"
	 import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
	var _self;
	export default {    
		data() {
			return {
				categoryList: [],
				mescroll: null,
				val:"", //当前搜索关键词
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
			}
		},
			    watch:{
			val(){
				// 重置列表数据 (tip:此处最好做节流,避免输入过快多次请求)
				this.mescroll.resetUpScroll();
			}
		},
		methods: {
			mescrollInit(mescroll) {
				this.mescroll = mescroll;
			},
   //          search(val) {
   //          console.log(val);
			// this.val = val
   //          },
			tiaozhuan(){
				   uni.navigateTo({ 
					url:'../wybx/my',  
				})
				},
				liaotian(){
					uni.navigateTo({
						url:'../liaotian/liaotian'
					})
				},
				zhuan(){
					uni.navigateTo({
						url:'../my/my'
					})
				},
			downCallback(mescroll){
					// 第1种: 请求具体接口
					_self = this
					mescroll.resetUpScroll()
					uni.request({
						url: this.$api+'/findAll',
						success: (e) => {
							// 成功隐藏下拉加载状态
							mescroll.endSuccess(e.data.data.length)
							_self.categoryList = e.data.data
						},
						fail: () => {
							// 联网失败回调隐藏下拉加载状态
							mescroll.endErr()
							uni.showLoading({
								title:'网络异常，请及时联系维修员或检查自身网络后再试'
							})
						}
					})
        },
		upCallback(mescroll) {
					// 此时mescroll会携带page的参数:
					// let pageNum = mescroll.num; // 页码, 默认从1开始
					// let pageSize = mescroll.size; // 页长, 默认每页10条
					// uni.request({
					// 	url: this.$api+'/findAll?pageNum='+pageNum+'&pageSize='+pageSize,
					// 	success: (data) => {
					// 		// 接口返回的当前页数据列表 (数组)
					// 		let curPageData = data.xxx; 
					// 		// 接口返回的总页数 (比如列表有26个数据,每页10条,共3页; 则totalPage值为3)
					// 		let totalPage = data.xxx; 
					// 		// 接口返回的总数据量(比如列表有26个数据,每页10条,共3页; 则totalSize值为26)
					// 		let totalSize = data.xxx; 
					// 		// 接口返回的是否有下一页 (true/false)
					// 		let hasNext = data.xxx; 
					// 		
					// 		// 成功隐藏下拉加载状态
					// 		//方法一(推荐): 后台接口有返回列表的总页数 totalPage
					// 		mescroll.endByPage(curPageData.length, totalPage); 
					// 		
					// 		//方法二(推荐): 后台接口有返回列表的总数据量 totalSize
					// 		//mescroll.endBySize(curPageData.length, totalSize); 
					// 		
					// 		//方法三(推荐): 您有其他方式知道是否有下一页 hasNext
					// 		//mescroll.endSuccess(curPageData.length, hasNext); 
					// 		
					// 		//设置列表数据
					// 		if(mescroll.num == 1) this.dataList = []; //如果是第一页需手动置空列表
					// 		this.dataList = this.dataList.concat(curPageData); //追加新数据
					_self = this
					if(mescroll.num == 1) this.pdList = []; 
					uni.request({
						url:this.$api+'/sousuo',
						method: 'GET',
						data:{
							input:this.val
						},
						success:(e)=>{
							mescroll.endSuccess(e.data.data.length)
							console.log(e)
							
							_self.categoryList = e.data.data
						},fail:() => {
							// 失败隐藏下拉加载状态
							mescroll.endErr();
						},
					})
				    },
						
			},

		onReady(){
			console.log(this.$api)
			console.log(this.$store.state.userName.username)
			uni.request({
				url:this.$api+'/chazhao',
				data:{
					username:this.$store.state.userName.username
				},
				success: (res) => {
					 this.$store.commit('receiveMsg', {
                               avatarurl: res.data.data.touxiang,
							   sex: res.data.data.sex,
							   tel: res.data.data.tel,
							   password: res.data.data.password,
                       })
				}
			})
		},
		components:{uniNavBar,uniIcon,mSearch,NAUIcard,MescrollUni,cmdNavBar},
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
		position: absolute;
		top: 100rpx;
			}
	.nav_demo{
		width: 100%;
	}
		
	.uni-view.button-item{
	  margin-bottom: 5rpx;
	  color: #FFFFFF;
	}.l_icon{
		padding-left:30rpx ;
		height: 80rpx;
		width: 80rpx;
	}/* .r_icon{
		padding-right: 30rpx;
		height: 70rpx;
		width: 70rpx;
	} */
	.qiang{
		height: 250rpx;
	}
		.main{
			
			margin-left: 40rpx;
			width: 90%;
	}
	.br_icon{
	  position: fixed;
		  bottom: 10rpx;
		  right: 60rpx;
	/* 	  color: #AAAAAA;
		  font-size: 108rpx; */
		  height: 80rpx;
		  width: 80rpx;
		  z-index: 100;
	}	
	.bl_icon{
		 position: fixed;
	      bottom: 10rpx;
		  left: 60rpx;
		  /* color: #AAAAAA;
		  font-size: 108rpx; */
		   height: 80rpx;
		  width: 80rpx;
		  z-index: 100;
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
		 z-index: 100;
		 opacity:  1;
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
		z-index: 100;
		opacity:0;
	}
	.dadi{
		position: fixed;
		background-color: #929292;
		height: 100rpx;
		width: 100%;
		bottom: 0;
          z-index: 99;
 	}.word-input{
		display: inline-block;
		width: 80%;
		padding:4upx;
		font-size: 24upx;
		margin-left: 30upx;
		border: 2upx solid #18B4FE;
		border-radius: 60upx;
		text-align: center;
		background-color: #fff;
		vertical-align: middle;
	}	.tip{
		color: #FFFFFF;
		font-size: 30upx;
		vertical-align: middle;
	}
</style>

