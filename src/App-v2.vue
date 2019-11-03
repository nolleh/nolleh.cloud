<template>
  <div id="container" class="main-container">
    <section class="full-pf">
      <div
        class="pf-type fullpage-wrapper"
        id="fullpage"
        style="height: 100%; position: relative; touch-action: none; transform: translate3d(0px, 0px, 0px); transition: all 700ms ease 0s;"
      >
        <!-- section pf01 -->
        <article
          class="section pf01 fp-section fp-table active fp-completely"
          id="section01"
          style="height: 937px; background-color: rgb(232, 76, 61);"
          data-anchor="pf01"
        >
          <div class="fp-tableCell" style="height:937px;">
            <div class="title">
              <h2>
                <!--
                <img src="/image/pf/strikezon/logo.png" alt class="millo-logo" />
                <img src="/image/shadow.png" alt class="shadow" />
                -->
              </h2>
            </div>
            <div class="d-title">
              <div
                class="subs boostKeyframe"
                style="animation: 0.6s ease-out 0.2s 1 normal forwards running toTop;"
              >
                <h2>Nolleh.</h2>
                <p>The Programmer</p>
              </div>
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
        <article
          class="section pf02 fp-section fp-table"
          id="section02"
          style="height: 937px; background-color: rgb(1, 95, 177);"
          data-anchor="pf02"
        >
          <div class="fp-tableCell" style="height:937px;">
            <div class="title">
              <h2>
                <img src="/image/pf/isens/logo.png" alt class="millo-logo" />
                <img src="/image/shadow.png" alt class="shadow" />
              </h2>
            </div>
            <div class="d-title">
              <div
                class="subs boostKeyframe"
                style="animation: 0.6s ease-out 0.2s 1 normal forwards running toTop;"
              >
                <h2>
                  Game Server Programmer
                  <br />C++/C STL.
                </h2>
                <p>FOR i - SENS</p>
              </div>
            </div>
            <div class="contents">
              <div class="table-cell">
                <div class="bx-wrapper" style="max-width: 100%;">
                  <div
                    class="bx-viewport"
                    aria-live="polite"
                    style="width: 100%; overflow: hidden; position: relative; height: 662px;"
                  >
                    <ul class="bxslider" style="width: auto; position: relative;">
                      <li
                        style="float: none; list-style: none; position: absolute; width: 1380px; z-index: 0; display: none;"
                        aria-hidden="true"
                      >
                        <img src="/image/pf/isens/2-1.png" alt class="cell01" />
                      </li>
                      <li
                        style="float: none; list-style: none; position: absolute; width: 1380px; z-index: 50; display: list-item;"
                        aria-hidden="false"
                      >
                        <img src="/image/pf/isens/2-2.png" alt class="cell02" />
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
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue/dist/vue';
export default Vue.extend({});
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
</style>