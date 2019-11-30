<template>
  <div class="full-pf">
    <overview class="item"></overview>
    <game-server class="item"></game-server>
  </div>
</template>

<script>
import Vue from 'vue/dist/vue';
import Overview from './article/Overview.vue';
import GameServer from './article/GameServer.vue';

export default Vue.extend({
  components: {
    Overview,
    GameServer,
  },
});
</script>

<style>
html,
body {
  margin: 0px;
  padding: 0px;
  height: 100%;
  overflow-y: hidden;
}

.full-pf {
  overflow: auto; /* scroll visibility */
  width: 100%;
  height: 100%;
  scroll-snap-type: y mandatory;
}

.item {
  display: flex;
  height: 100%;
  scroll-snap-align: start;
  margin: 0px;
}
</style>