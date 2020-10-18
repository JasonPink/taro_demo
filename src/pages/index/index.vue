<template>
  <view class="index">
    <text>{{ msg }}</text>
    <view class="icon-box">
      <icon class="icon-box-img" type="info" size="93"></icon>
      <icon class="icon-small" type="success" size="23"></icon>
      <icon class="icon-small" type="circle" size="23"></icon>
    </view>
    <view class="progress-box">
      <progress percent="20" show-info stroke-width="4"></progress>
      <icon class="progress-cancel" type="cancel"></icon>
    </view>
  </view>
</template>

<script>
import './index.scss'

export default {
  data () {
    return {
      msg: 'Hello worldsss!'
    }
  }
}
</script>
<style lang="scss" scoped>
.index{
  background: red;
}
.progress-box{
  width: 80%;
  background: red;
}
</style>
