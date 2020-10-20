<template>
  <view>
    优惠券----{{number}}
  </view>
</template>

<script>
import { eventCenter, getCurrentInstance } from '@tarojs/taro'
import Taro from '@tarojs/taro'

export default {
  data() {
    return {
      number: 0
    }
  },
  mounted(){
    var value = Taro.getStorageSync('key');
    console.log('value++++', value);
  },
  methods: {

  }
}
</script>

<style>

</style>