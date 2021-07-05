<template>
	<view>
		<view class="head-content margin-top-20">
      <view class="company-card">
        <u-row>
          <u-col span="3">
            <view class="avatar">
              <u-avatar></u-avatar>
            </view>
          </u-col>
          <u-col span="9">
            <view class="company-info">
              <view>某某公司</view>
              <view>电子/通信/硬件 500-2000人</view>
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
        反正也不知道多少字反正也不知道多少字反正也不知道多少字反正也不知道多少字反正也不知道多少字反正也不知道多少字反正也不知道多少字反正也不知道多少字
      </view>
      <view>
        <view class="font-weight font-size-20">公司地址</view>
        <u-cell-group>
          <u-cell-item title="上海" :arrow="true"></u-cell-item>
        </u-cell-group>
      </view>
      <view>
        <view class="font-weight font-size-20">公司官网</view>
        <view class="padding-20">www.abcd.com</view>
      </view>
      <view>
        <view class="font-weight font-size-20">工商信息</view>
        <view>
          <u-table>
            <u-tr>
              <u-td>公司全称</u-td>
              <u-td>某某公司</u-td>
            </u-tr>
            <u-tr>
              <u-td>公司类型</u-td>
              <u-td>分公司</u-td>
            </u-tr>
            <u-tr>
              <u-td>同意社会信用代码</u-td>
              <u-td>12212122</u-td>
            </u-tr>
            <u-tr>
              <u-td>成立日期</u-td>
              <u-td>某某公司</u-td>
            </u-tr>
            <u-tr>
              <u-td>注册资本</u-td>
              <u-td>3个亿</u-td>
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
		data() {
			return {
        plist: [1,2,3],
				list: [
          { name: "公司介绍" },
          { name: "实习职位" },
          { name: "校招信息" }
        ],
        current: 0,
        value1: 1,
        value2: 1,
        options1: [
          { label: '上海', value: 1 },
          { label: '北京', value: 2 },
        ],
        options2: [
          { label: '全部', value: 0 },
          { label: '销售', value: 1 },
        ],
			}
		},
		methods: {
			changeMenu(index) {
			  this.current = index
      },
      goInfo() {
			  uni.navigateTo({
          url: '/pages/productInfo/index'
        })
      }
		}
	}
</script>

<style lang="scss">
  @import "index.scss";
</style>
