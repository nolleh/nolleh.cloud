<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
  import { locale } from '$lib/stores/locale';
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { page } from '$app/stores';

  let showFooter = false;
  let footerWrapper: HTMLElement;

  onMount(() => {
    if (browser && document.documentElement) {
      document.documentElement.lang = $locale;
    }

    if (browser && $page.url.pathname === '/') {
      setupFooterObserver();
    } else {
      showFooter = true;
    }
  });
  
  $: isProjectPage = browser && (
    $page.url.pathname.startsWith('/projects') ||
    $page.url.pathname.startsWith('/history') ||
    $page.url.pathname.startsWith('/about')
  );
  $: if (browser) {
    if ($page.url.pathname.startsWith('/projects/')) {
      showFooter = true;
    } else if ($page.url.pathname === '/') {
      // main page are handled with observer
    } else {
      showFooter = true;
    }
  }

  function setupFooterObserver() {
    if (!browser) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            showFooter = true;
            setTimeout(() => {
              if (footerWrapper) {
                footerWrapper.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
              }
            }, 500);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const lastSection = document.querySelector('#sc-personal3');
    if (lastSection) {
      observer.observe(lastSection);
    }

    const handleScroll = () => {
      const container = document.getElementById('scrollable-content');
      if (!container) return;

      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;
      const scrollPercentage = (scrollTop + clientHeight) / scrollHeight;

      if (scrollPercentage >= 0.9) {
        showFooter = true;
      }
    };

    const container = document.getElementById('scrollable-content');
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
      
      return () => {
        container.removeEventListener('scroll', handleScroll);
        observer.disconnect();
      };
    }
  }

  // Update lang attribute when locale changes
  $: if (browser && document.documentElement) {
    document.documentElement.lang = $locale;
  }
</script>

<slot />
<div class="footer-wrapper" bind:this={footerWrapper} class:visible={showFooter} class:project-page={isProjectPage}>
  <Footer />
</div>

<style>
  .footer-wrapper {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), 
                transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
  }

  .footer-wrapper.visible {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }

  .footer-wrapper.project-page {
    background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #2a2f4a 100%);
    border-top: none;
    margin-top: 0;
    padding-top: 0;
    opacity: 1;
    transform: none;
    pointer-events: auto;
  }

  @media (prefers-reduced-motion) {
    .footer-wrapper {
      transition: opacity 0.3s ease;
    }
  }
</style>
