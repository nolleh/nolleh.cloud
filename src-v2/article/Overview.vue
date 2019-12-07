<template>
  <article class="section pf01" id="section01" data-anchor="pf01">
    <transition name="title">
      <div class="title" v-if="show">
        <h2>Nolleh.</h2>
        <p>The Programmer</p>
      </div>
    </transition>
    <div class="contents"></div>
    <div class="bx-controls">
      <a class="bx-prev" href>Prev</a>
      <a class="bx-next" href>Next</a>
    </div>
  </article>
</template>

<script>
import Vue from 'vue/dist/vue';

export default Vue.extend({
  data: function() {
    return {
      show: false,
    };
  },

  mounted: function() {
    this.show = true;
  },
});
</script>
<style scoped>
.pf01 {
  height: 100%;
  background-color: rgb(232, 76, 61);
}

.title-enter-active,
.title-enter-leave {
  animation: moveDown 0.6s ease-out 0.2s 1 normal forwards;
}

@keyframes moveDown {
  0% {
    transform: translateY(-40px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
</style>