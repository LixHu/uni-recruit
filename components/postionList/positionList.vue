<template>
	<view>
		<view class="margin-top-20 product" @click="goInfo(item.id)" v-for="(item, index) in list" :key="index" >
			<u-col span="12">
				<u-row class="info">
					<u-col span="6" class="title">{{ item.postion_name }}</u-col>
					<u-col span="5" offset="1">
						<view class="price font-red">
							{{ item.price }}/{{ item.price_unit === 1 ? '天' : ( item.price_unit === 2 ? '月' : '年' ) }}
						</view>
						<view class="introduction font-grey font-size-12">
							{{`${item.province}`}} | {{ item.work_time }}天/周 | {{ item.internship }}{{ item.internship_unit === 1 ? '天' : '个月'}}
						</view>
					</u-col>
				
				</u-row>
				<view class="tags">
				  <view class="tag-item" v-for="tags in item.tags">
					<u-tag :text="tags"></u-tag>
				  </view>
				</view>
				<u-row class="company">
					<u-col span="1">
						<u-avatar :src="item.company.avatar"></u-avatar>
					</u-col>
					<u-col span="7" offset="1">
						<view class="title">{{ item.company.title }}</view>
						<view class="introduction font-grey">{{ item.company.financing }} | {{ item.company.category.title }} | {{ item.company.people_num }}人</view>
					</u-col>
				</u-row>
				<u-gap height="5" bg-color="#f4f4f5" class="gap" v-if="list.length - 1 !== index"></u-gap>
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
.gap {
	position: relative;
	top: 20rpx;
}
.product {
	height: 250rpx;
	.info {
		.title {
			font-weight: 600;
			font-size: 40rpx;
		}
		.price {
			text-align: right;
		}
		
		.introduction {
			text-align: right;
		}
	}

  .tags {
    display: flex;
    justify-content: flex-start;

    .tag-item:nth-child(n+1) {
      margin: 0 10rpx;
    }
  }
	.company {
		position: relative;
		top: 20rpx;
		
		.title {
			font-weight: 400;
			font-size: 30rpx;
		}
		
		.introduction {
			text-align: left;
		}
	}
}
</style>
