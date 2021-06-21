<template>
	<view class="content">
		<u-row>
			<u-col span="12">
				<u-swiper 
					:list="list" 
					indicator-pos="bottomCenter" 
					mode="round"
					effect3d
				></u-swiper>
			</u-col>
		</u-row>
		<u-row class="margin-top-20 menu">
			<u-col span="3" class="menu-item">
				<view class="item-info">
					<u-avatar></u-avatar>
					<view>校招</view>
				</view>
			</u-col>
			<u-col span="3" class="menu-item">
				<view class="item-info">
					<u-avatar></u-avatar>
					<view>校招</view>
				</view>
			</u-col>
			<u-col span="3" class="menu-item">
				<view class="item-info">
					<u-avatar></u-avatar>
					<view>校招</view>
				</view>
			</u-col>
			<u-col span="3" class="menu-item">
				<view class="item-info">
					<u-avatar></u-avatar>
					<view>校招</view>
				</view>
			</u-col>
		</u-row>
		<u-row class="margin-top-20">
			<u-col span="6">
				<u-tabs :list="tabList" :current="current"></u-tabs>
			</u-col>
			<u-col span="6">
				<u-dropdown>
					<u-dropdown-item v-model="value1" title="距离" :options="options1"></u-dropdown-item>
					<u-dropdown-item v-model="value2" title="温度" :options="options2"></u-dropdown-item>
				</u-dropdown>
			</u-col>
		</u-row>
		
		<u-row class="margin-top-20">
			<u-col span="12" class="product">
				<u-row class="info">
					<u-col span="8" class="title">店铺夏季实习生</u-col>
					<u-col span="3" offset="1" class="price font-red">200/天</u-col>
					<view class="introduction font-grey">
						address | 5天/周 | 3个月
					</view>
				</u-row>
				<view class="tags">
					<u-tag text="可转正实习"></u-tag>
					<u-tag text="五险一金"></u-tag>
				</view>
				<u-row class="company">
					<u-col span="3">
						<u-avatar></u-avatar>
					</u-col>
					<u-col span="8" offset="1">
						<view class="title">实习僧内推助手</view>
						<view class="introduction font-grey">A轮 | 互联网/游戏/软件 | 500人</view>
					</u-col>
				</u-row>
			</u-col>
			
			<u-col span="12" class="product">
				<u-row class="info">
					<u-col span="8" class="title">店铺夏季实习生</u-col>
					<u-col span="3" offset="1" class="price font-red">200/天</u-col>
					<view class="introduction font-grey">
						address | 5天/周 | 3个月
					</view>
				</u-row>
				<view class="tags">
					<u-tag text="可转正实习"></u-tag>
					<u-tag text="五险一金"></u-tag>
				</view>
				<u-row class="company">
					<u-col span="3">
						<u-avatar></u-avatar>
					</u-col>
					<u-col span="8" offset="1">
						<view class="title">实习僧内推助手</view>
						<view class="introduction font-grey">A轮 | 互联网/游戏/软件 | 500人</view>
					</u-col>
				</u-row>
			</u-col>
			
			<u-col span="12" class="product">
				<u-row class="info">
					<u-col span="8" class="title">店铺夏季实习生</u-col>
					<u-col span="3" offset="1" class="price font-red">200/天</u-col>
					<view class="introduction font-grey">
						address | 5天/周 | 3个月
					</view>
				</u-row>
				<view class="tags">
					<u-tag text="可转正实习"></u-tag>
					<u-tag text="五险一金"></u-tag>
				</view>
				<u-row class="company">
					<u-col span="3">
						<u-avatar></u-avatar>
					</u-col>
					<u-col span="8" offset="1">
						<view class="title">实习僧内推助手</view>
						<view class="introduction font-grey">A轮 | 互联网/游戏/软件 | 500人</view>
					</u-col>
				</u-row>
			</u-col>
		</u-row>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				world: 'world',
				list: [{
					image: 'https://cdn.uviewui.com/uview/swiper/1.jpg'
				},
				{
					image: 'https://cdn.uviewui.com/uview/swiper/2.jpg'
				},
				{
					image: 'https://cdn.uviewui.com/uview/swiper/3.jpg'
				}],
				tabList: [
					{ name: '推荐' },
					{ name: '最新' }, 
					{ name: '急招' }
				],
				current: 0,
				value1: 1,
				value2: 2,
				options1: [{
						label: '默认排序',
						value: 1,
					},
					{
						label: '距离优先',
						value: 2,
					},
					{
						label: '价格优先',
						value: 3,
					}
				],
				options2: [{
						label: '去冰',
						value: 1,
					},
					{
						label: '加冰',
						value: 2,
					},
				],
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>
