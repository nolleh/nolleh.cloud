<template>
  <div class="contents">
    <div class="sidebar">
      <a href="#">01.About</a>
      <a href="#">02.GameServer</a>
      <a href="#">03.Infra</a>
      <a href="#">04.WebServer</a>
      <a href="#">05.Unity</a>
      <a href="#">06.MobileApp</a>
      <a href="#">07.Project</a>
    </div>
    <div class="main">
      <About />
    </div>
  </div>
</template>


<script lang='ts'>
import Vue from 'vue/dist/vue';
import About from '../post/01.about/About.vue';
export default Vue.extend({
  data() {
    return {
      Post: About,
    };
  },
  components: {
    About,
  },
});
</script>

<style>
.contents {
  margin: 8px;
}

.contents > div {
  float: left;
}

/* The sidebar menu */
.contents .sidebar {
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 260px; /* Set the width of the sidebar */
  /* position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  /* background-color: #3b3a3a; */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 20px;
}

/* The navigation menu links */
.contents .sidebar a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 15px;
  color: #818181;
  display: block;
}

/* When you mouse over the navigation links, change their color */
.contents .sidebar a:hover {
  color: #f1f1f1;
}

/* Style page content */
.contents .main {
  /* margin-left: 260px; /* Same as the width of the sidebar */
  padding: 0px 10px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .contents .sidebar {
    padding-top: 15px;
  }
  .contents .sidebar a {
    font-size: 18px;
  }
}
</style>