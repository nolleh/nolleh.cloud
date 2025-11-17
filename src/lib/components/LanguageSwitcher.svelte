<script lang="ts">
  import { locale } from '$lib/stores/locale';
  import type { Locale } from '$lib/stores/locale';

  function switchLocale(newLocale: Locale) {
    locale.set(newLocale);
  }
</script>

<div class="language-switcher">
  <button
    class="lang-btn"
    class:active={$locale === 'en'}
    on:click={() => switchLocale('en')}
    aria-label="Switch to English"
  >
    EN
  </button>
  <button
    class="lang-btn"
    class:active={$locale === 'ko'}
    on:click={() => switchLocale('ko')}
    aria-label="한국어로 전환"
  >
    KO
  </button>
</div>

<style>
  .language-switcher {
    display: flex;
    gap: 8px;
  }

  .lang-btn {
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    padding: 6px 12px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.2s;
    font-family: 'Poppins', sans-serif;
  }

  .lang-btn:hover {
    background-color: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
  }

  .lang-btn.active {
    background-color: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.6);
    font-weight: 700;
  }
</style>

