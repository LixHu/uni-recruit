<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	/*每个页面公共css */
	// 间距
	.margin-top-20{ margin-top: 20rpx; }
	.margin-top-10{ margin-top: 10rpx; }
	.margin-top-40{ margin-top: 40rpx; }
	
	.margin-0-20 { margin-top: 0 20rpx; }


  .padding-20 { padding: 20rpx; }
	// 字体
	.font-grey { color: #C0C4CC; }
	.font-red { color: #fa3534; }
	.font-black { color: #82848a; }
	
	.font-size-12 { font-size: 24rpx; }
	.font-size-16 { font-size: 32rpx; }
	.font-size-20 { font-size: 40rpx; }
	
	
	.font-weight { font-weight: 800; }
  .font-weight-400 { font-weight: 400; }
</style>
