<template>
  <view>
    <view class="product-item" v-for="item in list" @click="goInfo(item.id)">
      <view class="column">
        <view class="title font-size-16 font-weight-400" >
          {{ item.postion_name }}
        </view>
        <view class="price font-red">
          {{ item.price }}/{{ item.price_unit === 1 ? '天' : ( item.price_unit === 2 ? '月' : '年' ) }}
        </view>
      </view>
      <view class="column">
        <view class="info">
          <view>{{ item.city }}|</view>
          <view>{{ item.work_time }}天/周|</view>
          <view>{{ item.internship }}{{ item.internship }}{{ item.internship_unit === 1 ? '天' : '个月'}}</view>
        </view>
        <!-- <view class="product-time">
          23:23发布
        </view> -->
      </view>
      <view class="line">
        <u-line class="u-line" color="#a0cfff" ></u-line>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "productItem",
  props: ['list', 'goInfo']
}
</script>

<style lang="scss" scoped>

.product-item {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: space-between;


  .line {
    position: relative;
    top: 0;
    width: 100%;
    height: 10rpx;
  }
  .column {
    flex-basis: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 20rpx 0;
    .price {
      align-items: flex-start;
    }

    .product-time {
      align-items: flex-end;
    }
    .info {
      padding: 0;
      display: flex;
      justify-content: flex-start;
    }
  }
}
</style>