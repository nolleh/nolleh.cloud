<template>
  <div>
    <div class="post">
      <img src="../../../static/images/post-title-icon.png" />
      <span class="title">About Nolleh</span>
    </div>
    <h3>backend - 게임 서버 프로그래머</h3>
    <h4>Language Specialized in</h4>
    <button @click="showMajor = !showMajor">show</button>
    <li v-for="lang in majorLanguage" :key="lang">{{lang}}</li>

    <h4>간단히 다뤄본적이 있는 Language</h4>
    <li v-for="lang in minorLanguage" :key="lang">{{lang}}</li>

    <h4>기반지식</h4>
    <li v-for="platform in platforms" :key="platform">{{platform}}</li>

    <h4>자격증</h4>

    <h4>수상경력</h4>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue/dist/vue';

export default Vue.extend({
  data() {
    return {
      showMajor: false,
      majorLanguage: ['C++ / C / STL / Boost', 'C#', 'Java'],
      showMinor: false,
      minorLanguage: ['TypeScript', 'Golang', 'Haskell', 'Erlang'],
      platforms: ['Kubernetes', 'Docker', 'Node.Js', 'Unity', 'Android', 'iOS'],
      project: [''],
    };
  },
});
</script>

<style>
h4 {
  color: #029c8d;
  /* text-align: center; */
}

.post .title {
  padding-left: 20px;
  font-weight: bold;
  font-size: 25px;
  color: #029c8d;
  letter-spacing: 3.03px;
}

.big-font-size {
  font-size: 30px;
}
.font-color-red {
  color: red;
}
</style>