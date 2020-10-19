<template>
  <view class="person-container">
    <view class="header-wrap">
      
    </view>
    <view class="order-wrap">
      <view class="title order-row">
        <view>我的订单</view>
        <view>查看全部</view>
      </view>
      <view class="order-status">
        <view class="status-item">
          <view class="cricle"></view>
          <view class="text">待付款</view>
        </view>
        <view class="status-item">
          <view class="cricle"></view>
          <view class="text">待发货</view>
        </view>
        <view class="status-item">
          <view class="cricle"></view>
          <view class="text">待收货</view>
        </view>
        <view class="status-item">
          <view class="cricle"></view>
          <view class="text">待评价</view>
        </view>
        <view class="status-item">
          <view class="cricle"></view>
          <view class="text">退款/售后</view>
        </view>
      </view>
      <view class="order-link">
        <view class="link-item order-row" @tap="navigateTo('/pages/coupon/index')">
          <view class="left">
            <icon class="icon-box-img" type="success" size="20"></icon>
            <text>优惠券</text>
          </view>
          <view class="right arrow-right"></view>
        </view>
        <view class="link-item order-row">
          <view class="left">
            <icon class="icon-box-img" type="success" size="20"></icon>
            <text>联系客服</text>
          </view>
          <view class="right arrow-right"></view>
        </view>
        <view class="link-item order-row">
          <view class="left">
            <icon class="icon-box-img" type="success" size="20"></icon>
            <text>我的积分</text>
          </view>
          <view class="right arrow-right"></view>
        </view>
        <view class="link-item order-row">
          <view class="left">
            <icon class="icon-box-img" type="success" size="20"></icon>
            <text>积分商城</text>
          </view>
          <view class="right arrow-right"></view>
        </view>
        <view class="link-item order-row">
          <view class="left">
            <icon class="icon-box-img" type="success" size="20"></icon>
            <text>抽奖记录</text>
          </view>
          <view class="right arrow-right"></view>
        </view>
        <view class="link-item order-row">
          <view class="left">
            <icon class="icon-box-img" type="success" size="20"></icon>
            <text>相关协议</text>
          </view>
          <view class="right arrow-right"></view>
        </view>
        <view class="link-item order-row">
          <view class="left">
            <icon class="icon-box-img" type="success" size="20"></icon>
            <text>隐私政策</text>
          </view>
          <view class="right arrow-right"></view>
        </view>
        <view class="link-item order-row">
          <view class="left">
            <icon class="icon-box-img" type="success" size="20"></icon>
            <text>关于我们</text>
          </view>
          <view class="right arrow-right"></view>
        </view>
        <view class="link-item order-row">
          <view class="left">
            <icon class="icon-box-img" type="success" size="20"></icon>
            <text>关于我们</text>
          </view>
          <view class="right arrow-right"></view>
        </view>
        <view class="link-item order-row">
          <view class="left">
            <icon class="icon-box-img" type="success" size="20"></icon>
            <text>关于我们</text>
          </view>
          <view class="right arrow-right"></view>
        </view>
        <view class="link-item order-row">
          <view class="left">
            <icon class="icon-box-img" type="success" size="20"></icon>
            <text>关于我们</text>
          </view>
          <view class="right arrow-right"></view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import "./mySelf.scss";
import Taro from '@tarojs/taro'

export default {
  methods: {
    navigateTo(url) {
      Taro.navigateTo({url:url})
    }
  }
}
</script>