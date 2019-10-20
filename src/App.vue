<template>
  <layout>
    <template #navibar>
      <navi />
    </template>
    <template #header>
      <header-title />
    </template>
    <template #contents>
      <contents></contents>
    </template>
  </layout>
</template>

<script lang='ts'>
import Vue from 'vue/dist/vue';
import Layout from './layout/Layout.vue';
import Navi from './layout/Navi.vue';
import HeaderTitle from './layout/Header.vue';
import Contents from './layout/Contents.vue';

export default Vue.extend({
  data() {
    return {};
  },
  components: {
    Layout,
    Navi,
    HeaderTitle,
    Contents,
  },
});
</script>

