<script lang="ts">
  import { onMount } from 'svelte';

  export let content: string | null = null;

  onMount(() => {
    // When the user scrolls the page, execute
    if (content) {
      const scrollContent = document.getElementById(content);
      scrollContent!.onscroll = function () {
        progress();
      };
    } else {
      window.onscroll = function () {
        progress();
      };
    }
  });

  function progress() {
    const scrollContent = content ? document.getElementById(content) : document.documentElement;
    const winScroll = document.body.scrollTop || scrollContent?.scrollTop!;
    // const winScroll = scrollContent?.scrollTop!;
    const height = scrollContent?.scrollHeight! - scrollContent?.clientHeight!;
    const scrolled = (winScroll / height) * 100;
    const bar = document.getElementById('myBar');

    if (bar) bar.style.width = scrolled + '%';
  }
</script>

<div class="header">
  <!-- <h2>Scroll Indicator</h2> -->
  <div class="progress-container">
    <div class="progress-bar" id="myBar" />
  </div>
</div>

<style>
  /* Style the header: fixed position (always stay at the top) */
  .header {
    position: fixed;
    z-index: 1;
    width: 100%;
    background-color: lightsteelblue;
  }

  /* The progress container (grey background) */
  .progress-container {
    width: 100%;
    height: 8px;
    background: #ccc;
  }

  /* The progress bar (scroll indicator) */
  .progress-bar {
    height: 8px;
    background: #04aa6d;
    width: 0%;
  }
</style>
