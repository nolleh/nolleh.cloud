<template>
  <div id="container" class="main-container">
    <section class="full-pf">
      <transition name="pf-wrapper">
        <div class="pf-type fullpage-wrapper" id="fullpage">
          <overview></overview>
          <game-server></game-server>
        </div>
      </transition>
    </section>
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
body {
  /* overflow: hidden; */
  height: 100%;
}

* {
  margin: 0;
  padding: 0;
}

.pf-wrapper-move {
  /* height: 100%;
  position: relative;
  touch-action: none; */
  transform: translate3d(0px, 0px, 0px);
  /* transition: all 700ms ease 0s; */
}
</style>