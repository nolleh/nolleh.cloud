<template>
  <div class="post">
    <img src="../../static/images/post-title-icon.png" />
    <span class="title">{{ titleName }}</span>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue/dist/vue';
export default Vue.extend({
  props: {
    titleName: String,
  },
});
</script>

<style>
.post .title {
  padding-left: 20px;
  font-weight: bold;
  font-size: 25px;
  color: #029c8d;
  letter-spacing: 3.03px;
}
</style>