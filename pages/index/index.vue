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
		<view class="margin-top-20"></view>
		<u-row class="menu">
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
		
		<view class="margin-top-20"></view>
		<u-row>
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
		<u-row>
			<positionList :goInfo="goInfo" :list="plist"></positionList>
		</u-row>
	</view>
</template>

<script>
import positionList from '../../components/postionList/positionList.vue'
	export default {
		components: {
			positionList: positionList
		},
		data() {
			return {
				title: 'Hello',
				world: 'world',
				plist: [1],
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
			goInfo() {
				uni.navigateTo({
					url: '/pages/productInfo/index'
				})
			}
		}
	}
</script>

<style lang="scss">
	@import './index.scss';
</style>
