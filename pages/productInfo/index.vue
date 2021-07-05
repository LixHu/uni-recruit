<template>
  <view class="content">
    <view>
      <view class="title">
        <u-row>
          <u-col span="12">【某某公司】店铺夏季实习生</u-col>
        </u-row>
      </view>
      <view class="describe margin-top-20">
        <u-row gutter="2">
          <u-col span="6">成都 | 5天/周| 3个月</u-col>
          <u-col span="6">大专 | 可转正</u-col>
        </u-row>
      </view>
      <view class="price font-red margin-top-20">
        <u-row gutter="2">
          <u-col span="12">180-200/天</u-col>
        </u-row>
      </view>
      <view class="margin-top-20 company" @click="goCompanyInfo">
        <view class="company-card">
          <u-avatar></u-avatar>
          <view class="describe">
            <view>某某公司</view>
            <view class="font-grey">A轮|互联网/游戏/软件| 50-100人</view>
          </view>
        </view>
      </view>
      <view class="margin-top-20 bright">
        <view class="font-black">职位亮点</view>
        <view class="font-grey">
          可转正实习，五险一金
        </view>
      </view>


      <view class="margin-top-40 info">
        <view class="font-black">职位描述</view>
        <view class="font-grey">
          反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西反正一大堆东西
        </view>
      </view>
	  <view class="white">
		  
	  </view>
    </view>


    <view class="bottom-menu">
		<u-row>
			<view>
				<u-col span="3">
					<view class="icon">
						<u-icon name="share" size="60"></u-icon>
						<text class="font-size-12">分享</text>
					</view>
				</u-col>
			</view>
			<view>
				<u-col span="3">
					<view class="icon">
						<u-icon name="heart" size="60"></u-icon>
						<text class="font-size-12">收藏</text>
					</view>
				</u-col>
			</view>
				<view class="send-btn-content">
					<u-col span="5">
						<u-button class="send-btn" shape="circle" size="medium">投个简历</u-button>
					</u-col>
				</view>
		</u-row>
	</view>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
	  goCompanyInfo() {
		 uni.navigateTo({
		 	url: '../companyInfo/index'
		 })
	  }
  }
}
</script>

<style lang="scss">
@import "./index.scss";
</style>
