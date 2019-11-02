<template>
  <div class="main">
    <div class="sidebar">
      <router-link to="/About">01.About</router-link>
      <router-link to="/GameServer">02.GameServer</router-link>
      <router-link to="/Infra">03.Infra</router-link>
      <router-link to="/WebServer">04.WebServer</router-link>
      <router-link to="/Unity">05.Unity</router-link>
      <router-link to="/MobileApp">06.MobileApp</router-link>
      <router-link to="/Project">07.Project</router-link>
    </div>
    <div class="contents">
      <router-view></router-view>
    </div>
  </div>
</template>


<script lang='ts'>
import Vue from 'vue/dist/vue';
import VueRouter from 'vue-router';

import About from '../post/01.about/About.vue';
import GameServer from '../post/02.game-server/GameServer.vue';

const routes = [
  { path: '/About', component: About },
  { path: '/GameServer', component: GameServer },
];
var router = new VueRouter({
  routes,
});

Vue.use(VueRouter);

export default Vue.extend({
  // onCreate() {
  //   this.use(VueRouter);
  // },

  data() {
    return {
      Post: About,
    };
  },

  router,
});
</script>

<style>
.main {
  margin: 8px;
}

.main > div {
  float: left;
}

/* The sidebar menu */
.main .sidebar {
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 230px; /* Set the width of the sidebar */
  /* position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  /* background-color: #3b3a3a; */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding: 20px 20px;
}

/* The navigation menu links */
.main .sidebar a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 15px;
  color: #818181;
  display: block;
}

/* When you mouse over the navigation links, change their color */
.main .sidebar a:hover {
  color: #f1f1f1;
}

/* Style page content */
.main .contents {
  /* margin-left: 260px; /* Same as the width of the sidebar */
  padding: 24px 20px;
}

.main .contents h4 {
  color: #029c8d;
  /* text-align: center; */
}

.main .contents .big-font-size {
  font-size: 30px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .main .sidebar {
    padding-top: 15px;
  }
  .main .sidebar a {
    font-size: 18px;
  }
}
</style>