<template>
  <div>
    <Title titleName="About Nolleh"></Title>
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
import Title from '../Title.vue';
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
  components: {
    Title,
  },
});
</script>

<style>
</style>