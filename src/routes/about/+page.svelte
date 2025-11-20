<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  import { locale } from '$lib/stores/locale';
  import { t } from '$lib/i18n';

  const contentId = 'about-content';

  $: translate = (key: string) => t(key, $locale);

  const overviewKeys = [
    'about.overview.paragraph1',
    'about.overview.paragraph2',
    'about.overview.paragraph3'
  ];

  const statConfigs = [
    { id: 'experience', label: 'about.stats.experience.label', value: 'about.stats.experience.value' },
    { id: 'projects', label: 'about.stats.projects.label', value: 'about.stats.projects.value' },
    { id: 'aum', label: 'about.stats.aum.label', value: 'about.stats.aum.value' },
    { id: 'talks', label: 'about.stats.talks.label', value: 'about.stats.talks.value' }
  ];

  const domainConfigs = [
    { id: 'ai', icon: '🧠', title: 'about.domains.ai.title', description: 'about.domains.ai.description' },
    { id: 'fintech', icon: '💹', title: 'about.domains.fintech.title', description: 'about.domains.fintech.description' },
    { id: 'realtime', icon: '⚡', title: 'about.domains.realtime.title', description: 'about.domains.realtime.description' },
    { id: 'devops', icon: '🛠️', title: 'about.domains.devops.title', description: 'about.domains.devops.description' },
    { id: 'sdk', icon: '📦', title: 'about.domains.sdk.title', description: 'about.domains.sdk.description' },
    { id: 'community', icon: '🌐', title: 'about.domains.community.title', description: 'about.domains.community.description' }
  ];

  const principleKeys = [
    'about.principles.items.item1',
    'about.principles.items.item2',
    'about.principles.items.item3',
    'about.principles.items.item4'
  ];

  $: overviewTexts = overviewKeys
    .map((key) => ({ key, text: translate(key) }))
    .filter((entry) => entry.text && entry.text !== entry.key)
    .map((entry) => entry.text);

  $: stats = statConfigs.map((stat) => ({
    ...stat,
    label: translate(stat.label),
    value: translate(stat.value)
  }));

  $: domains = domainConfigs.map((domain) => ({
    ...domain,
    title: translate(domain.title),
    description: translate(domain.description)
  }));

  $: principles = principleKeys
    .map((key) => ({ key, text: translate(key) }))
    .filter((entry) => entry.text && entry.text !== entry.key)
    .map((entry) => entry.text);
</script>

<Nav content={contentId} />

<div id={contentId} class="container" data-about-page>
  <section class="hero">
    <div class="hero-content">
      <p class="eyebrow">{translate('about.subtitle')}</p>
      <h1>{translate('about.title')}</h1>
      <p class="mission">{translate('about.mission')}</p>
      <div class="overview">
        {#each overviewTexts as paragraph}
          <p>{paragraph}</p>
        {/each}
      </div>
    </div>
  </section>

  <section class="stats-section">
    <div class="stats-grid">
      {#each stats as stat}
        <div class="stat-card" data-stat-id={stat.id}>
          <div class="stat-value">{stat.value}</div>
          <div class="stat-label">{stat.label}</div>
        </div>
      {/each}
    </div>
  </section>

  <section class="domains-section">
    <header class="section-header">
      <h2>{translate('about.subtitle')}</h2>
      <p>{translate('about.mission')}</p>
    </header>
    <div class="domains-grid">
      {#each domains as domain}
        <article class="domain-card">
          <div class="domain-icon">{domain.icon}</div>
          <h3>{domain.title}</h3>
          <p>{domain.description}</p>
        </article>
      {/each}
    </div>
  </section>

  <section class="principles-section">
    <h2>{translate('about.principles.title')}</h2>
    <ul>
      {#each principles as principle, index}
        <li>
          <span class="count">{String(index + 1).padStart(2, '0')}</span>
          <p>{principle}</p>
        </li>
      {/each}
    </ul>
  </section>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

  .container {
    min-height: 100vh;
    width: 100%;
    background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #2a2f4a 100%);
    font-family: 'Inter', sans-serif;
    color: #fff;
    padding-top: 4rem;
    padding-bottom: 6rem;
  }

  section {
    max-width: 1100px;
    margin: 0 auto;
    padding: 2rem 2rem 0;
  }

  .hero {
    padding-top: 5rem;
  }

  .hero-content {
    background: rgba(255, 255, 255, 0.03);
    border-radius: 24px;
    padding: 3rem;
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 25px 60px rgba(10, 14, 39, 0.45);
    backdrop-filter: blur(16px);
  }

  .hero h1 {
    font-size: 3rem;
    margin: 0.5rem 0 1rem;
  }

  .eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.6);
    margin: 0;
  }

  .mission {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0;
    color: rgba(255, 255, 255, 0.95);
  }

  .overview {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.8;
  }

  .stats-section {
    margin-top: 3rem;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
  }

  .stat-card {
    padding: 1.75rem;
    border-radius: 20px;
    background: rgba(102, 126, 234, 0.1);
    border: 1px solid rgba(102, 126, 234, 0.25);
    box-shadow: 0 12px 35px rgba(10, 14, 39, 0.4);
    backdrop-filter: blur(10px);
  }

  .stat-value {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .stat-label {
    color: rgba(255, 255, 255, 0.7);
  }

  .domains-section {
    margin-top: 4rem;
  }

  .section-header h2 {
    margin: 0;
    font-size: 2rem;
  }

  .section-header p {
    color: rgba(255, 255, 255, 0.75);
    margin: 0.5rem 0 2rem;
  }

  .domains-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.5rem;
  }

  .domain-card {
    padding: 1.75rem;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    transition: transform 0.3s ease, border-color 0.3s ease;
    min-height: 220px;
  }

  .domain-card:hover {
    transform: translateY(-6px);
    border-color: rgba(255, 255, 255, 0.3);
  }

  .domain-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .domain-card h3 {
    margin: 0 0 0.5rem;
  }

  .domain-card p {
    margin: 0;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
  }

  .principles-section {
    margin-top: 4rem;
    padding-bottom: 4rem;
  }

  .principles-section h2 {
    margin-bottom: 1.5rem;
    font-size: 2rem;
  }

  .principles-section ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .principles-section li {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    padding: 1.25rem 1.5rem;
  }

  .principles-section .count {
    font-weight: 700;
    color: rgba(102, 126, 234, 0.9);
    font-size: 1rem;
    letter-spacing: 0.2em;
  }

  .principles-section p {
    margin: 0;
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.6;
  }

  @media screen and (max-width: 768px) {
    section {
      padding: 1.5rem 1.25rem 0;
    }

    .hero h1 {
      font-size: 2.25rem;
    }

    .hero-content {
      padding: 2rem;
    }
  }
</style>

