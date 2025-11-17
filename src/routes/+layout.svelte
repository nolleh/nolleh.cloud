<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
  import { locale } from '$lib/stores/locale';
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  onMount(() => {
    if (browser && document.documentElement) {
      document.documentElement.lang = $locale;
    }
  });

  // Update lang attribute when locale changes
  $: if (browser && document.documentElement) {
    document.documentElement.lang = $locale;
  }
</script>

<slot />
<Footer />
