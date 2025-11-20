// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }
  
  interface Window {
    mermaid?: {
      initialize: (config: Record<string, unknown>) => void;
      run: (config?: { nodes?: NodeListOf<Element> }) => Promise<void> | void;
    };
  }
}

export {};
