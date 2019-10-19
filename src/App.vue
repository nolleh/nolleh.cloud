<template>
  <overview></overview>
</template>

<script lang='ts'>
import Vue from 'vue/dist/vue';
import overview from './post/01.overview/Overview.vue';

export default Vue.extend({
  data() {
    return {};
  },
  components: {
    overview,
  },
});
</script>
