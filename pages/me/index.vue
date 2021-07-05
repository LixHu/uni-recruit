<template>
	<view>
		<view class="user-info">
			<u-row gutter="2">
				<view>
					<u-col span="6">
						<view class="left-content">
							<view class="font-weight font-size-20">
								未登录/注册
							</view>
							<view class="font-size-12">
								点击头像可进行登录/注册
							</view>
						</view>
					</u-col>
				</view>
				<view>
					<u-col span="6">
						<view class="avatar">
							<u-avatar></u-avatar>
						</view>
					</u-col>
				</view>
			</u-row>
		</view>
		<view class="menu">
			<u-cell-group>
				<u-cell-item title="在线简历" :arrow="true"></u-cell-item>
				<u-cell-item title="附件简历"  value="上传/管理附件简历" :arrow="true"></u-cell-item>
				<u-cell-item title="投递反馈" :arrow="true"></u-cell-item>
				<u-cell-item title="我的收藏" :arrow="true"></u-cell-item>
				<u-cell-item title="我的面试" :arrow="true"></u-cell-item>
				<u-cell-item title="意见反馈" :arrow="true"></u-cell-item>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	
</script>

<style lang="scss">
	@import 'index.scss'
</style>
