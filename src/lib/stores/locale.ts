import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Locale = 'en' | 'ko';

function getInitialLocale(): Locale {
  if (!browser) return 'en';
  
  const saved = localStorage.getItem('locale');
  if (saved === 'en' || saved === 'ko') {
    return saved;
  }
  
  const browserLang = navigator.language.split('-')[0];
  return browserLang === 'ko' ? 'ko' : 'en';
}

export const locale = writable<Locale>(getInitialLocale());

if (browser) {
  locale.subscribe((value) => {
    localStorage.setItem('locale', value);
    if (document.documentElement) {
      document.documentElement.lang = value;
    }
  });
}

