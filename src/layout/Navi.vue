<template>
  <div class="navibar">
    <ul>
      <li v-for="link in links" :key="link.title">
        <a :href="link.link">{{link.title}}</a>
      </li>
    </ul>
  </div>
</template>


<script lang='ts'>
import Vue from 'vue/dist/vue';
export default Vue.extend({
  data() {
    const links = [
      { title: 'HOME', link: '/' },
      { title: 'ABOUT', link: '/About' },
    ];
    return {
      links,
    };
  },
});
</script>

<style>
.navibar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 40px;
  background: #4a4a4a;
  /* background: darkslategray; */
}

* {
  font-family: 'Spoqa Han Sans', 'Sans-serif';
}

.navibar ul {
  list-style-type: none;
  margin: 0;
  padding: 0px 20px 0px 20px;
}
.navibar li a {
  float: left;
  padding: 9px 10px 9px 10px;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 1.5px;
  text-decoration: none;
}
</style>