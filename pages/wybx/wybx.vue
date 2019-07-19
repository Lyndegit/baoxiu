<template>
	<view class="content_main">
	<caidan></caidan>
	
		<view class="biaodan main">
		<view class="bdsj">
		<view class="sbmc">
		     <span>设备名称:&nbsp;&nbsp;&nbsp;</span>
			<input type="text" value="" placeholder="请输入内容" />
	    </view>
		<view class="sbmc">
			<span>宿舍房号:&nbsp;&nbsp;&nbsp;</span>
			<input type="text" value="" placeholder="请输入内容"/>
		</view>
		<view class="queren">
			请确认您的宿舍号为'xxxxx'
		</view>
		<view class="sbmc">
			<span>联系方式:&nbsp;&nbsp;&nbsp;</span> 
			<input type="text" value="" placeholder="请输入内容"/>
		</view>
		<view class="sbmc">
			<span>期望维修时间:&nbsp;&nbsp;&nbsp;</span>
		</view>
		<view class="sbmc qkms">
			<span>情况描述:&nbsp;&nbsp;&nbsp;</span>
			<textarea placeholder-style="color:black" placeholder="请输入内容"/>
			<view>
				<span>点击提交损坏情况照片：</span>
			<robby-image-upload :server-url="serverUrl" :form-data="formData"></robby-image-upload>
			</view>
		</view>
		<button type="warn" class="demo_tj">提交</button>
	       </view>
		</view>
		</view>
		
</template>

<script>
	import caidan from '@/components/caidan/caidan.vue';
	import robbyImageUpload from '@/components/robby-image-upload/robby-image-upload.vue'
	// import rangeDatePick from '@/components/range-dtpicker/range-dtpicker.vue'; 时间区间
	export default{
		data(){
		},
		methods: {
        },
	components:{caidan,robbyImageUpload},
	}
</script>

<style>
	.content_main{
		background-color: #e0e0e0;	
	}
	.main{
			display: flex;
			/* overflow: hidden; */
			flex-direction:column;
			/* align-items: center;
		    justify-content: center; */
		/* 	background-color: #e0e0e0;	 */
	}
		.biaodan{
		color: #333333;
		font-size: 32rpx;
		width: 100%;
		display: flex;
		flex: 1;
		flex-direction: column;
		margin: 5rpx;
		line-height: 40rpx;
	}
	.sbmc {
		display: flex;
		flex: 1;
		flex-direction:row;
		background-color: #FFFFFF;
		border-radius: 50rpx;
		margin: 5rpx;
	}
	.demo_tj{
		width: 100%;
	}
	.uni-list-cell{
		display: flex;
		flex: 1;
		flex-direction:row;
	}
	.queren{
		color: red;
		
		margin-right: 15rpx;
	}
	.qkms{
		flex: 1;
		flex-direction: column;
	}
</style>
