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
						<view class="avatar" v-if="user.id == undefined" @click="showLogin">
							<u-avatar></u-avatar>
						</view>
						<view class="avatar" v-else="user.id > 0">
							<u-avatar :src="user.avatar"></u-avatar>
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
				<u-cell-item title="投递反馈" :arrow="true" @click="goMySend"></u-cell-item>
				<!-- <u-cell-item title="我的收藏" :arrow="true"></u-cell-item> -->
				<u-cell-item title="我的面试" :arrow="true" @click="goMySend(2)"></u-cell-item>
				<!-- <u-cell-item title="意见反馈" :arrow="true"></u-cell-item> -->
			</u-cell-group>
		</view>
		<login-modal :show="showLoginModal" @close="closeLogin()" @set-user="setUser"></login-modal>
	</view>
</template>

<script>
	import loginModal from '../../components/showLogin/showLogin.vue';
	export default{
		components: {
			loginModal: loginModal,
		},
		onLoad() {
			let userInfo = uni.getStorageSync('userInfo');
			if(userInfo !== undefined) {
				this.user = userInfo
			}
		},
		data() {
			return {
				user: {},
				showLoginModal: false,
			}
		},
		methods: {
			setUser(data) {
				console.log(data)
				this.user = data
			},
			goMySend(type){
				let userInfo = uni.getStorageSync('userInfo')
				if(!userInfo) {
					uni.showToast({
						title: '请登录后再使用'
					})
					return
				}
				uni.navigateTo({
					url: `/pages/mySend/index?type=${type}`
				})
			},
			showLogin() {
				this.showLoginModal = true
			},
			closeLogin(res) {
				this.showLoginModal = res
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
