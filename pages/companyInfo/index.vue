<template>
	<view>
		<view class="head-content margin-top-20">
      <view class="company-card">
        <u-row>
          <u-col span="3">
            <view class="avatar">
              <u-avatar :src="companyInfo.avatar"></u-avatar>
            </view>
          </u-col>
          <u-col span="9">
            <view class="company-info">
              <view>{{ companyInfo.title }}</view>
              <view>{{ companyInfo.category.title }} {{ companyInfo.people_num }}人</view>
            </view>
          </u-col>
        </u-row>
      </view>
		</view>
    <view class="margin-top-20">
      <u-tabs :list="list" :is-scroll="false" :current="current" @change="changeMenu"></u-tabs>
    </view>
    <view v-if="current == 0" class="info">
      <view class="company-describe font-size-12">
        {{ companyInfo.describe }}
      </view>
      <view>
        <view class="font-weight font-size-20">公司地址</view>
        <u-cell-group>
          <u-cell-item :title="companyInfo.address" :arrow="true"></u-cell-item>
        </u-cell-group>
      </view>
      <view>
        <view class="font-weight font-size-20">公司官网</view>
        <view class="padding-20">{{ companyInfo.url }}</view>
      </view>
      <view>
        <view class="font-weight font-size-20">工商信息</view>
        <view>
          <u-table>
            <u-tr>
              <u-td>公司全称</u-td>
              <u-td>{{ companyInfo.title }}</u-td>
            </u-tr>
            <u-tr>
              <u-td>公司类型</u-td>
              <u-td>{{ companyInfo.company_type }}</u-td>
            </u-tr>
            <u-tr>
              <u-td>统一社会信用代码</u-td>
              <u-td>{{ companyInfo.company_code }}</u-td>
            </u-tr>
            <u-tr>
              <u-td>成立日期</u-td>
              <u-td>{{ companyInfo.company_create_time }}</u-td>
            </u-tr>
            <u-tr>
              <u-td>注册资本</u-td>
              <u-td>{{ companyInfo.capital }}</u-td>
            </u-tr>
          </u-table>
        </view>
      </view>
    </view>

    <view v-if="current == 1">
      <u-dropdown>
        <u-dropdown-item v-model="value1" title="工作地点" :options="options1"></u-dropdown-item>
        <u-dropdown-item v-model="value2" title="职位类型" :options="options2"></u-dropdown-item>
      </u-dropdown>
      <view class="product-list margin-top-20">
        <product-item :list="plist" :go-info="goInfo"/>
      </view>
    </view>

    <view v-if="current == 2">
      <view class="product-list margin-top-20">
        <product-item :list="plist" :go-info="goInfo"/>
      </view>
    </view>
	</view>
</template>

<script>
import productItem from '../../components/productItem/productItem'
export default {
	components: {
	  productItem: productItem
	},
	onLoad(option) {
		let id = option.companyId
		this.getCompanyInfo(id)
		this.getPositionCategory();
	},
	data() {
		return {
			companyInfo: {},
			plist: [1,2,3],
			list: [
			  { name: "公司介绍" },
			  { name: "实习职位" },
			  { name: "校招信息" }
			],
			current: 0,
			value1: 1,
			value2: 0,
			options1: [
			  { label: '上海', value: 1 },
			  { label: '北京', value: 2 },
			],
			options2: [
				{ label: '全部', value: 0 }
			],
		}
	},
	methods: {
		changeMenu(index) {
		  this.current = index
		  if(index >= 1) {
			  this.getPositionsList(index)
		  }
		},
		goInfo(id) {
			uni.navigateTo({
			  url: `/pages/productInfo/index?id=${id}`
			})
		},
		getPositionsList(index) {
			let data = {}
			let that = this
			if(index === 2) {
				data.is_school = 1;
			}
			if(this.value2) {
				data.category = this.value2;
			}
			this.api.company.getPositionList(data).then((res) => {
				if(res.statusCode === 200) {
					that.plist = res.data.data.data
				}else {
					uni.showToast({
						title: '获取失败',
						icon: 'none'
					})
				}
			}).catch((e) => {
				uni.showToast({
					title: JSON.stringify(e),
					icon: 'none'
				})
			})
		},
		getPositionCategory() {
			let that = this;
			this.api.position.getPositionCategory().then((res) => {
				if(res.statusCode === 200) {
					let { data } = res
					data.forEach((val, key) => {
						that.options2[key + 1] = {'label': val.title, 'value': val.id }
					})
				}else {
					uni.showToast({
						title: '发生错误',
						icon: 'none'
					})
				}
			}).catch((e) => {
				console.log(e)
				uni.showToast({
					title: JSON.stringify(e),
					icon: 'none'
				})
			})
		},
		getCompanyInfo(id) {
			this.api.company.getCompanyInfo(id).then((res) => {
				if(res.statusCode === 200 ) {
					this.companyInfo = res.data
					console.log(res.data)
				}else {
					uni.showToast({
						title: '获取失败',
						icon: 'none'
					})
				}
			}).catch((e) => {
				uni.showToast({
					title: JSON.stringify(e),
					icon: 'none'
				})
			})
		}
	},
	watch:{
		value2(newValue, oldValue) {
			if(newValue !== oldValue) {
				this.getPositionsList(newValue)
			}
		}
	}
}
</script>

<style lang="scss">
  @import "index.scss";
</style>
