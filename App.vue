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
	
	
	// 字体
	.font-grey { color: #C0C4CC; }
	.font-red { color: #fa3534; }
</style>
