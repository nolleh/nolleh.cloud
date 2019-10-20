<template>
  <div class="container">
    <div class="title">
      <img src="../../static/images/logo.png" />
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
  position: 'fixed';
  margin: auto;
  display: block;
  font-size: 17px;
  line-height: 1.5em;
  padding: 40px 30px 15px 30px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
}
.container .title {
  padding-top: 30px;
  padding-bottom: 30px;
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