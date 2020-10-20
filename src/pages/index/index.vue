<template>
  <view class="components-page">
    <view>
      <el-input :title="msg" @toggle="toggle"></el-input>
    </view>
    <view>
      <button @tap="navigateTo('/pages/detail/index')">去详情中心</button>
      <AtIcon prefixClass='icon' value='youhuiquan' size='30' color='#F00'></AtIcon>
    </view>
  </view>
</template>

<script>
import Taro from '@tarojs/taro'
import { AtIcon } from 'taro-ui'
import ElInput from "../../components/search"
import "./index.scss";

const order = ["demo1", "demo2", "demo3"];
export default {
  data() {
    return {
      msg: "Hello worldsss!",
      scrollTop: 0,
      toView: "demo2",
    };
  },
  components: {
    ElInput
  },
  methods: {
    toggle() {
      this.msg = 'Biggg'
    },
    upper(e) {
      console.log("upper:", e);
    },

    lower(e) {
      console.log("lower:", e);
    },

    scroll(e) {
      console.log("scroll:", e);
    },

    navigateTo(url) {
      Taro.navigateTo({url:url})
    }
  },
};
</script>
<style>
.flex-wrp {
  display: flex;
}
.flex-wrp-column {
  flex-direction: column;
}
.flex-wrp-row {
  flex-direction: row;
  padding: 20px;
  background: #f1f1f1;
}
.flex-item {
  width: 180px;
  height: 90px;
}
.demo-text-1 {
  background: #ccc;
}
.demo-text-2 {
  background: #999;
}
.demo-text-3 {
  background: #666;
}
.hover {
  background: #000;
}
</style>
