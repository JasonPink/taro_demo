<template>
  <view>
    详情
    <button @tap="navigateTo('/pages/index/index')">回到首页</button>
  </view>
</template>
<script>
import Taro from '@tarojs/taro'

export default {
  methods: {
    navigateTo(url) {
      Taro.switchTab({url:url})
    }
  }
}
</script>

<style>

</style>