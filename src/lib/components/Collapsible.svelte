<script lang="ts">
  import { onMount } from 'svelte';

  onMount(() => {
    var coll = document.getElementsByClassName('collapsible');
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener('click', function (e) {
        const target = e.currentTarget as Element;
        target.classList.toggle('active');
        let content = target.nextElementSibling as HTMLElement;
        if (content.style.display === 'block') {
          content.style.display = 'none';
        } else {
          content.style.display = 'block';
        }
      });
    }
  });
</script>

<button type="button" class="collapsible right" />
<div class="content">
  <slot />
</div>

<style>
  .collapsible {
    background-color: #131316;
    border: solid white;
    border-width: 0 0.5rem 0.5rem 0;
    display: inline-block;
    padding: 0.5rem;
    transition: all 1s;
  }
  .right {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }

  :global(.right.active) {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }

  .collapsible:hover {
    background-color: #131316;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }

  .content {
    padding: 0 18px;
    display: none;
    overflow: hidden;
    /* background-color: #f1f1f1; */
  }
</style>
