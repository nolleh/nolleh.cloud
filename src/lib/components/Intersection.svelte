<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte';

  export let top = 0;
  export let bottom = 0;
  export let left = 0;
  export let right = 0;
  let container: any;
  export let id: string = '';
  let intersecting: boolean = false;

  const dispatch = createEventDispatcher();

  $: dispatch('onIntersectingChanged', { container, intersecting });

  const appearOptions = {
    // root: document.querySelector('.container'),
    rootMargin: '0px',
    threshold: 0.5
  };

  onMount(() => {
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver((entries) => {
        intersecting = entries[0].isIntersecting;
      }, appearOptions);
      observer.observe(container);
      return () => observer.unobserve(container);
    }
  });

  function handler() {
    const bcr = container.getBoundingClientRect();
    intersecting =
      bcr.bottom + bottom > 0 &&
      bcr.right + right > 0 &&
      bcr.top - top < window.innerHeight &&
      bcr.left - left < window.innerWidth;

    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }
</script>

<div {id} bind:this={container}>
  <slot {intersecting} />
</div>

<style>
</style>
