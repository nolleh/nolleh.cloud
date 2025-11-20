<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  import { locale } from '$lib/stores/locale';
  import { t } from '$lib/i18n';
  import { getCareerTimeline, type CareerStage } from '$lib/history/data';

  const contentId = 'history-content';

  $: translate = (key: string) => t(key, $locale);
  let stages: CareerStage[] = [];
  $: stages = getCareerTimeline($locale);
  let selectedStageId: string | null = null;

  $: if (stages.length && !selectedStageId) {
    selectedStageId = stages[0]?.id ?? null;
  } else if (stages.length && selectedStageId && !stages.find((stage) => stage.id === selectedStageId)) {
    selectedStageId = stages[0]?.id ?? null;
  }

  let activeStage: CareerStage | undefined = stages.find((stage) => stage.id === selectedStageId);
  $: activeStage = stages.find((stage) => stage.id === selectedStageId);

  function selectStage(stageId: string) {
    selectedStageId = stageId;
  }
</script>

<Nav content={contentId} />

<div id={contentId} class="container" data-history-page>
  <div class="history-wrapper">
    <div class="timeline-selector">
      <h1 class="main-title">{translate('history.title')}</h1>
      <p class="subtitle">{translate('history.subtitle')}</p>

      <div class="stage-list">
        {#each stages as stage, index}
          {@const isActive = stage.id === selectedStageId}
          <button
            type="button"
            class="history-card"
            class:active-card={isActive}
            style="--index: {index}"
            on:mouseenter={() => selectStage(stage.id)}
            on:focus={() => selectStage(stage.id)}
            on:click={() => selectStage(stage.id)}
            aria-pressed={isActive}
          >
            <div class="card-number">{String(index + 1).padStart(2, '0')}</div>
            <div class="card-title">{stage.company}</div>
            <div class="card-role">{stage.role}</div>
            <div class="card-period">{stage.period}</div>
          </button>
        {/each}
      </div>
    </div>

    <div class="detail-panel" class:active={!!activeStage}>
      {#if activeStage}
        <div class="detail-content">
          <div class="detail-header">
            <div class="detail-number">{String(stages.indexOf(activeStage) + 1).padStart(2, '0')}</div>
            <div class="detail-meta">
              <h2 class="detail-title">{activeStage.company}</h2>
              <p class="detail-role">{activeStage.role}</p>
              <p class="detail-period">{activeStage.period}{activeStage.location ? ` - ${activeStage.location}` : ''}</p>
            </div>
          </div>

          <p class="detail-summary">{activeStage.summary}</p>

          {#if activeStage.badges?.length}
            <div class="stage-badges">
              {#each activeStage.badges as badge}
                <span class="badge">{badge}</span>
              {/each}
            </div>
          {/if}

          <div class="project-list">
            {#each activeStage.projects as project}
              <article class="project-card">
                <header class="project-header">
                  <div>
                    <h3 class="project-title">{project.title}</h3>
                    <p class="project-period">{project.period}</p>
                  </div>
                </header>

                <p class="project-summary">{project.summary}</p>

                {#if project.highlights?.length}
                  <div class="project-section">
                    <h4 class="section-title">{translate('history.highlights')}</h4>
                    <ul class="highlight-list">
                      {#each project.highlights as highlight}
                        <li>{highlight}</li>
                      {/each}
                    </ul>
                  </div>
                {/if}

                {#if project.stack?.length}
                  <div class="project-section">
                    <h4 class="section-title">{translate('history.techStack')}</h4>
                    <div class="tech-tags">
                      {#each project.stack as tech}
                        <span class="tech-tag">{tech}</span>
                      {/each}
                    </div>
                  </div>
                {/if}
              </article>
            {/each}
          </div>
        </div>
      {:else}
        <div class="empty-state">
          <div class="empty-icon">✨</div>
          <p class="empty-text">{translate('history.emptyState')}</p>
          <p class="empty-text-en">{translate('history.emptyStateEn')}</p>
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

  .container {
    min-height: 100vh;
    width: 100%;
    background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #2a2f4a 100%);
    font-family: 'Inter', sans-serif;
    position: relative;
    color: #fff;
  }

  .history-wrapper {
    display: flex;
    min-height: 100vh;
    position: relative;
  }

  .timeline-selector {
    width: 420px;
    min-width: 360px;
    min-height: 100vh;
    padding: 3rem 2rem;
    background: rgba(15, 20, 35, 0.85);
    backdrop-filter: blur(12px);
    border-right: 1px solid rgba(255, 255, 255, 0.08);
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .main-title {
    font-size: 2.5rem;
    font-weight: 800;
    margin: 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .subtitle {
    color: rgba(255, 255, 255, 0.75);
    margin: 0;
  }

  .stage-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
    overflow-y: auto;
    padding-right: 0.5rem;
  }

  .stage-list::-webkit-scrollbar {
    width: 6px;
  }

  .stage-list::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
  }

  .history-card {
    position: relative;
    width: 100%;
    text-align: left;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 18px;
    padding: 1.5rem;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateX(calc(var(--index) * -15px));
    opacity: 0.75;
    outline: none;
  }

  .history-card:nth-child(2) {
    background: linear-gradient(135deg, rgba(240, 147, 251, 0.15) 0%, rgba(245, 87, 108, 0.15) 100%);
  }

  .history-card:nth-child(3) {
    background: linear-gradient(135deg, rgba(79, 172, 254, 0.15) 0%, rgba(0, 242, 254, 0.15) 100%);
  }

  .history-card:focus-visible {
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.4);
  }

  .history-card:hover,
  .history-card.active-card {
    transform: translateX(0) scale(1.02);
    opacity: 1;
    border-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.35);
  }

  .card-number {
    font-size: 0.75rem;
    letter-spacing: 2px;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 0.75rem;
  }

  .card-title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
  }

  .card-role {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.7);
  }

  .card-period {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.5);
    margin-top: 0.5rem;
  }

  .detail-panel {
    flex: 1;
    height: 100vh;
    padding: 4rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    opacity: 0.3;
    transition: opacity 0.4s ease;
  }

  .detail-panel.active {
    opacity: 1;
  }

  .detail-content {
    max-width: 960px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .detail-header {
    display: flex;
    align-items: baseline;
    gap: 1.5rem;
    border-bottom: 2px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 1.5rem;
  }

  .detail-number {
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.5);
    letter-spacing: 4px;
  }

  .detail-title {
    font-size: 2.5rem;
    margin: 0;
  }

  .detail-role,
  .detail-period {
    margin: 0.25rem 0 0;
    color: rgba(255, 255, 255, 0.6);
  }

  .detail-summary {
    font-size: 1.1rem;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.85);
    margin: 0;
  }

  .stage-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .badge {
    padding: 0.35rem 0.75rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 999px;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.85);
  }

  .project-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .project-card {
    padding: 1.75rem;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    transition: border-color 0.3s ease, transform 0.3s ease;
  }

  .project-card:hover {
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-4px);
  }

  .project-title {
    margin: 0;
    font-size: 1.25rem;
  }

  .project-period {
    margin: 0.3rem 0 0;
    color: rgba(255, 255, 255, 0.6);
  }

  .project-summary {
    margin: 1rem 0;
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.7;
  }

  .project-section {
    margin-top: 1rem;
  }

  .section-title {
    margin: 0 0 0.5rem;
    font-size: 0.95rem;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
  }

  .highlight-list {
    margin: 0;
    padding-left: 1.25rem;
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.6;
  }

  .tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tech-tag {
    padding: 0.35rem 0.8rem;
    border-radius: 6px;
    background: rgba(102, 126, 234, 0.12);
    border: 1px solid rgba(102, 126, 234, 0.2);
    font-size: 0.85rem;
  }

  .empty-state {
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
  }

  .empty-icon {
    font-size: 3rem;
    margin-bottom: 0.5rem;
  }

  @media screen and (max-width: 1024px) {
    .history-wrapper {
      flex-direction: column;
    }

    .timeline-selector {
      width: 100%;
      min-height: auto;
      border-right: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .stage-list {
      flex-direction: row;
      overflow-x: auto;
      overflow-y: hidden;
    }

    .history-card {
      min-width: 220px;
      transform: translateY(calc(var(--index) * -10px));
    }

    .history-card:hover,
    .history-card.active-card {
      transform: translateY(0) scale(1.05);
    }

    .detail-panel {
      padding: 2rem 1.5rem 4rem;
      height: auto;
    }
  }

  @media screen and (max-width: 768px) {
    .main-title {
      font-size: 1.75rem;
    }

    .history-card {
      min-width: 180px;
      padding: 1rem;
    }

    .detail-header {
      flex-direction: column;
      align-items: flex-start;
    }

    .detail-title {
      font-size: 1.75rem;
    }

    .project-card {
      padding: 1.25rem;
    }
  }
</style>

