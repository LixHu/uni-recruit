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
    <view class="margin-top-20">
      <view class="padding-20">
        <u-row>
          <u-col span="6">
            <view class="font-weight">求职意向 ></view>
          </u-col>
          <u-col span="6">
            <u-search placeholder="搜职位" v-model="keyword"></u-search>
          </u-col>
        </u-row>
      </view>
    </view>

		<view class="margin-top-20"></view>
		<u-row>
			<u-col span="6">
				<u-tabs :list="tabList" :current="current"></u-tabs>
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
				plist: [],
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
			this.getPositionList()
		},
		methods: {
			goInfo(id) {
				console.log(id)
				uni.navigateTo({
					url: `/pages/productInfo/index?id=${id}`
				})
			},
			getPositionList() {
				this.api.company.getPositionList().then((res) => {
					if(res.statusCode === 200) {
						this.plist = res.data.data.data
						console.log(this.plist)
					}
				}).catch((e) => {
					console.log(e)
				})
			}
		}
	}
</script>

<style lang="scss">
	@import './index.scss';
</style>
