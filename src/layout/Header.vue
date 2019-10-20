<template>
  <div class="container">
    <div class="title">
      <img src="../../static/images/logo.png" width="390" height="75" align="center" />
      <br />
      <img src="../../static/images/seperator.png" />

      <div class="logo-title">hello, world!</div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue/dist/vue';
export default Vue.extend({});
</script>

<style>
.container {
  margin: auto;
  display: block;
  font-size: 17px;
  line-height: 1.5em;
  padding: 40px 30px 15px 30px;
}
.container .title {
  padding-top: 40px;
  padding-bottom: 80px;
  text-align: center;
}
.container .title .logo-title {
  padding-top: 10px;
  font-weight: bold;
  font-size: 16px;
  color: #00b2a0;
  letter-spacing: 3.03px;
}
</style>