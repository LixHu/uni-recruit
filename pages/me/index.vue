<template>
	<view>
		<view class="user-info">
			<u-row gutter="2">
				<view>
					<u-col span="6">
						<view class="left-content">
							<view class="font-weight font-size-20">
								{{ user.nickname ? `欢迎您,${user.nickname}` : '未登录/注册'}}
							</view>
							<view class="font-size-12" v-if="user.id == undefined">
								点击头像可进行登录/注册
							</view>
						</view>
					</u-col>
				</view>
				<view>
					<u-col span="6">
						<view class="avatar" v-if="user.id == undefined">
							<u-button class="avatar-button" size="mini" plain open-type="getUserInfo" @getuserinfo="login()">
								<u-avatar></u-avatar>
							</u-button>
						</view>
						<view class="avatar" v-else="user.id > 0">
							<u-avatar :src="userInfo.avatar"></u-avatar>
						</view>
					</u-col>
				</view>
				<view class="userinfo-button">
				</view>
			</u-row>
		</view>
		<view class="menu">
			<u-cell-group>
				<!-- <u-cell-item title="在线简历" :arrow="true" @click=""></u-cell-item> -->
				<u-cell-item title="附件简历" value="上传/管理附件简历" :arrow="true" @click="goUpload"></u-cell-item>
				<u-cell-item title="投递反馈" :arrow="true"></u-cell-item>
				<!-- <u-cell-item title="我的收藏" :arrow="true"></u-cell-item> -->
				<u-cell-item title="我的面试" :arrow="true"></u-cell-item>
				<!-- <u-cell-item title="意见反馈" :arrow="true"></u-cell-item> -->
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	export default{
		onLoad() {
			let userInfo = uni.getStorageSync('userInfo');
			if(userInfo !== undefined) {
				this.user = userInfo
			}
		},
		data() {
			return {
				user: {}
			}
		},
		methods: {
			getUser(userInfo) {
				let that = this
				let access_token = uni.getStorageSync('access_token')
				this.api.user.getUserInfo(access_token, userInfo).then((res) => {
					if(res.statusCode === 200) {
						that.user = res.data
						console.log(that.user.id)
						uni.setStorageSync('userInfo', res.data)
					}
				}) 
			},
			login() {
				let that = this
				uni.getProvider({
					service: 'oauth',
					success(res) {
						console.log(res.provider)
						if(~res.provider.indexOf('weixin')) {
							uni.login({
								provider: 'weixin',
								success(loginRes) {
									let code = loginRes.code;
									uni.getUserInfo({
										provider: 'weixin',
										success(userInfoRes) {
											if(code !== undefined) {
												that.api.user.login(code).then((res) => {
													console.log(res)
													if(res.statusCode === 200) {
														let { data } = res
														uni.setStorageSync('access_token', data.access_token)
														that.getUser(userInfoRes);
													}
												}).catch((e) => {
													console.log(e)
												})
											}
										}
									})
								}
							})
						}
					}
				})
			},
			goUpload() {
				uni.navigateTo({
					url: `/pages/Appendix/index`,
					fail(e) {
						console.log(e)
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	@import 'index.scss'
</style>
