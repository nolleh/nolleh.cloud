<template>
  <article
    class="section pf01 fp-section fp-table active fp-completely"
    id="section01"
    data-anchor="pf01"
  >
    <div class="fp-tableCell">
      <div class="title">
        <h2>
          <!-- <img src="../../static/images/logo.png" /> -->
        </h2>
      </div>
      <div class="d-title">
        <transition name="move-ease">
          <div class="subs boostKeyframe">
            <h2>Nolleh.</h2>
            <p>The Programmer</p>
          </div>
        </transition>
      </div>
      <div class="contents">
        <div class="table-cell">
          <div class="bx-wrapper" style="max-width: 100%;">
            <div
              class="bx-viewport"
              aria-live="polite"
              style="width: 100%; overflow: hidden; position: relative; height: 610px;"
            >
              <ul class="bxslider" style="width: auto; position: relative;">
                <!-- <img src="/image/main/1-bg.png" alt="" class="bg"> -->
                <li
                  class="cell01"
                  style="float: none; list-style: none; position: absolute; width: 1380px; z-index: 0; display: none;"
                  aria-hidden="true"
                >
                  <!-- <img src="/image/main/1-3.png" alt /> -->
                </li>
                <li
                  class="cell02"
                  style="float: none; list-style: none; position: absolute; width: 1380px; z-index: 50; top: 0px; opacity: 1; display: list-item;"
                  aria-hidden="false"
                >
                  <!--
                        <img src="/image/main/1.png" alt />
                  -->
                </li>
              </ul>
            </div>
            <div class="bx-controls bx-has-controls-direction bx-has-pager">
              <div class="bx-controls-direction">
                <a class="bx-prev" href>Prev</a>
                <a class="bx-next" href>Next</a>
              </div>
              <div class="bx-pager bx-default-pager">
                <div class="bx-pager-item">
                  <a href data-slide-index="0" class="bx-pager-link">1</a>
                </div>
                <div class="bx-pager-item">
                  <a href data-slide-index="1" class="bx-pager-link active">2</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
<script lang='ts'>
import Vue from 'vue/dist/vue';
export default Vue.extend({});
</script>

<style>
.pf01 {
  height: 937px;
  background-color: rgb(232, 76, 61);
}
.pf01 .fp-tableCell {
  height: 937px;
}

.move-ease-active {
  animation: 0.6s ease-out 0.2s 1 normal forwards running toTop;
}
</style>