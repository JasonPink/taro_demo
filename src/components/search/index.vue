<template>
  <view class="example-body">
    <text>可以自动聚焦的 input</text>
    <input v-model="title" type="text" placeholder="将会获取焦点" focus/>
    <button @tap="change">改变</button>
</view>
</template>

<script>
export default {
  name: 'ElInput',
  props: {
    title: String
  },
  methods: {
    change() {
      this.$emit('toggle')
    }
  }
}
</script>

<style>

</style>