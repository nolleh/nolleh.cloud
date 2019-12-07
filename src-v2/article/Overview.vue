<template>
  <article class="section pf01" id="section01" data-anchor="pf01">
    <transition name="title">
      <div class="title">
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

<style scoped>
.pf01 {
  height: 937px;
  background-color: rgb(232, 76, 61);
}

.title-enter-active,
.title-leave-active {
  animation: 0.6s ease-out 0.2s 1 normal forwards running toTop;
}
</style>