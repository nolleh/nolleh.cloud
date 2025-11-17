import { locale } from '$lib/stores/locale';
import en from './translations/en.json';
import ko from './translations/ko.json';

const translations: Record<string, Record<string, any>> = {
  en,
  ko
};

export function t(key: string, currentLocale?: string): string {
  const loc = currentLocale || 'en';
  const keys = key.split('.');
  let value: any = translations[loc] || translations.en;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      value = translations.en;
      for (const fallbackKey of keys) {
        if (value && typeof value === 'object' && fallbackKey in value) {
          value = value[fallbackKey];
        } else {
          return key; // Return key if translation not found
        }
      }
      break;
    }
  }
  
  return typeof value === 'string' ? value : key;
}

// Reactive translation function for use in Svelte components
export function getTranslation(key: string) {
  return (localeValue: string) => {
    const keys = key.split('.');
    let value: any = translations[localeValue] || translations.en;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        value = translations.en;
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey];
          } else {
            return key; // Return key if translation not found
          }
        }
        break;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };
}

