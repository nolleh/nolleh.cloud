<template>
  <div>
    <slot name="navibar"></slot>
    <slot name="header"></slot>
    <slot name="main"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue/dist/vue';
export default Vue.extend({});
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
</style>