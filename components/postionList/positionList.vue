<template>
	<view>
		<view class="margin-top-20" @click="goInfo" v-for="item in list">
			<u-col span="12" class="product">
				<u-row class="info">
					<u-col span="6" class="title">店铺夏季实习生</u-col>
					<u-col span="5" offset="1">
						<view class="price font-red">
							200/天
						</view>
						<view class="introduction font-grey font-size-12">
							address | 5天/周 | 3个月
						</view>
					</u-col>
				
				</u-row>
				<view class="tags">
					<u-tag text="可转正实习"></u-tag>
					<u-tag text="五险一金"></u-tag>
				</view>
				<u-row class="company">
					<u-col span="1">
						<u-avatar></u-avatar>
					</u-col>
					<u-col span="7" offset="1">
						<view class="title">实习僧内推助手</view>
						<view class="introduction font-grey">A轮 | 互联网/游戏/软件 | 500人</view>
					</u-col>
				</u-row>
			</u-col>
		</view>
	</view>
</template>

<script>
	
	export default {
		name: "positionList",
		props: ['goInfo', 'list'],
	}
</script>

<style lang="scss">
.product {
	margin-top: 40rpx;
	
	.info {
		.title {
			font-weight: 600;
			font-size: 40rpx;
		}
		.price {
			text-align: right;
		}
	}
	
	.company {
		
		.title {
			font-weight: 600;
			font-size: 20rpx;
		}
	}
}
</style>
