<template>
  <view class="content">
    <view>
      <view class="title">
        <u-row>
          <u-col span="12">{{ productInfo.postion_name }}</u-col>
        </u-row>
      </view>
      <view class="describe margin-top-20">
        <u-row gutter="2">
          <u-col span="6">{{ productInfo.city }} | {{ productInfo.work_time }}天/周| {{ productInfo.internship }}{{ productInfo.internship_unit === 1 ? '天' : '个月'}}</u-col>
          <u-col span="6" text-align="right">{{ productInfo.require }} {{ productInfo.is_formal === 1 ? '|  可转正' : ''}}</u-col>  
        </u-row>
      </view>
      <view class="price font-red margin-top-20">
        <u-row gutter="2">
          <u-col span="12"> {{ productInfo.price }}/{{ productInfo.price_unit === 1 ? '天' : ( productInfo.price_unit === 2 ? '月' : '年' ) }}</u-col>
        </u-row>
      </view>
      <view class="margin-top-20 company" @click="goCompanyInfo(productInfo.company.id)">
        <view class="company-card">
          <u-avatar :src="productInfo.company.avatar"></u-avatar>
          <view class="describe">
            <view>{{ productInfo.company.title }}</view>
            <view class="font-grey">{{ productInfo.company.financing }}|{{ productInfo.company.title }}| {{ productInfo.company.people_num }}人</view>
          </view>
        </view>
      </view>
      <view class="margin-top-20 bright">
        <view class="font-black">职位亮点</view>
        <view class="font-grey">
          {{ productInfo.highlights }}
        </view>
      </view>


      <view class="margin-top-40 info">
        <view class="font-black">职位描述</view>
        <view class="font-grey">
			{{ productInfo.describe }}
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
				<!-- <u-col span="3">
					<view class="icon">
						<u-icon name="heart" size="60"></u-icon>
						<text class="font-size-12">收藏</text>
					</view>
				</u-col> -->
			</view>
				<view class="send-btn-content">
					<u-col span="5">
						<u-button class="send-btn" @click="showResumeList()" shape="circle" size="medium">投个简历</u-button>
					</u-col>
				</view>
		</u-row>
	</view>
	<u-popup v-model="resumeShow" mode="bottom">
		<view class="resume">
			<view class="u-body-item u-flex resume-list" v-for="(item, index) in resumeList" @click="sendResume(item.id)">
				<view class="icon">
					<u-icon name="file-text" size="80"></u-icon>
				</view>
				<view class="u-body-item-title u-line-2 resume-title">{{ item.resume_title }}</view>
			</view>
		</view>
	</u-popup>
  </view>
</template>

<script>
export default {
	onLoad(option) {
		let id = option.id
		this.getProductInfo(id)
	},
  data() {
    return {
		id: '',
		productInfo: {},
		resumeShow: false,
		resumeList: []
	}
  },
  methods: {
	  showResumeList() {
		  this.getResumeList();
		  this.resumeShow = true
	  },
	  getResumeList() {
		  this.api.user.getResumeList().then((res) => {
			  if(res.statusCode === 200) {
				  this.resumeList = res.data.resume
			  }else {
				  uni.showToast({
				  	title: '请先上传简历',
					icon: 'none'
				  })
			  }
		  })
	  },
	  sendResume(resumeId) {
			let data = {
			  resumeId: resumeId,
			  positionId: this.productInfo.id
			}
			this.api.user.sendResume(data).then((res) => {
				if(res.statusCode === 200) {
					uni.showToast({
						title: '投递成功',
						icon: 'success'
					})
					this.resumeShow = false
				}else {
					uni.showToast({
						title: res.data.message,
						icon: 'none'
					})
				}
			})
	  },
	  goCompanyInfo(companyId) {
		 uni.navigateTo({
		 	url: `../companyInfo/index?companyId=${companyId}`
		 })
	  },
	  getProductInfo(id) {
		  let that = this
		  this.api.company.getPositionInfo(id).then((res) => {
			  if(res.statusCode === 200) {
				that.productInfo = res.data
			  }else {
				  uni.showToast({
				  	title: '获取失败',
					icon: 'none'
				  })
			  }
		  })
	  }
  }
}
</script>

<style lang="scss">
@import "./index.scss";
</style>
