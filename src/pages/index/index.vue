<template>
  <view class="components-page">
     <movable-area style='height: 200px; width: 200px; background: red;'>
    <movable-view style='height: 50px; width: 50px; background: blue;' direction='all'>在路上</movable-view>
  </movable-area>
    <swiper
      class='test-h'
      indicator-color='#999'
      indicator-active-color='#333'
      vertical
      circular
      indicator-dots
      autoplay
    >
      <swiper-item>
        <view class='demo-text-1'>1</view>
      </swiper-item>
      <swiper-item>
        <view class='demo-text-2'>2</view>
      </swiper-item>
      <swiper-item>
        <view class='demo-text-3'>3</view>
      </swiper-item>
    </swiper>
    <text>flex-direction: row 横向布局</text>
    <view
      class="flex-wrp flex-wrp-row"
      hoverClass="hover"
    >
      <view
        class="flex-item demo-text-1"
        hoverStopPropagation="true"
      />
      <view
        class="flex-item demo-text-2"
        hoverStartTime="1000"
        hoverClass="hover"
      />
      <view
        class="flex-item demo-text-3"
        hoverStayTime="1000"
        hoverClass="hover"
      />
    </view>
    <text>flex-direction: column 纵向布局</text>
    <view class="flex-wrp flex-wrp-column">
      <view class="flex-item flex-item-V demo-text-1" />
      <view class="flex-item flex-item-V demo-text-2" />
      <view class="flex-item flex-item-V demo-text-3" />
    </view>
    <view class="page-body">
      <view class="page-section">
        <view class="page-section-title">
          <text>Vertical Scroll - 纵向滚动</text>
        </view>
        <view class="page-section-spacing">
          <scroll-view
            scrollY="true"
            style="height: 300rpx;"
            @scrolltoupper="upper"
            @scrolltolower="lower"
            @scroll="scroll"
            :scrollIntoView="toView"
            :scrollTop="scrollTop"
          >
            <view
              id="demo1"
              class="scroll-view-item demo-text-1"
            >1</view>
            <view
              id="demo2"
              class="scroll-view-item demo-text-2"
            >2</view>
            <view
              id="demo3"
              class="scroll-view-item demo-text-3"
            >3</view>
          </scroll-view>
        </view>
      </view>
      <view class="page-section">
        <view class="page-section-title">
          <text>Horizontal Scroll - 横向滚动</text>
        </view>
        <view class="page-section-spacing">
          <scroll-view
            class="scroll-view_H"
            scrollX="true"
            @scroll="scroll"
            style="width: 100%"
          >
            <view
              id="demo21"
              class="scroll-view-item_H demo-text-1"
            >a</view>
            <view
              id="demo22"
              class="scroll-view-item_H demo-text-2"
            >b</view>
            <view
              id="demo23"
              class="scroll-view-item_H demo-text-3"
            >c</view>
          </scroll-view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
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
  methods: {
    upper(e) {
      console.log("upper:", e);
    },

    lower(e) {
      console.log("lower:", e);
    },

    scroll(e) {
      console.log("scroll:", e);
    },
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
