<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  import { t } from '$lib/i18n';
  import { locale } from '$lib/stores/locale';
  import { projects } from '$lib/stores/project';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  
  // Reactive translation helper
  $: translate = (key: string) => t(key, $locale);
  
  // 프로젝트 목록
  const projectIds = ['ai', 'dndn', 'heybit', 'bp', 'newmatgo'];
  
  // 현재 프로젝트 ID
  $: projectId = $page.params.id || '';
  $: currentIndex = projectIds.indexOf(projectId);
  
  // 프로젝트 아이콘 매핑
  const projectIconMap: Record<string, string> = {
    'ai': 'querypie',
    'dndn': 'dndn',
    'heybit': 'heybit',
    'bp': 'bp',
    'newmatgo': 'newmatgo'
  };
  
  function getProjectIconSrc(projectId: string): string {
    const iconId = projectIconMap[projectId] || projectId;
    const project = $projects.find(p => p.id === iconId);
    return "../" + project?.src || '';
  }
  
  function handleCardClick(id: string) {
    if (id !== projectId) {
      goto(`/projects/${id}`);
    }
  }
  
  function goBack() {
    goto('/projects');
  }
  
  function getProjectDetail(id: string, field: string): string {
    return translate(`projects.details.${id}.${field}`);
  }
  
  function hasProjectDetail(id: string, field: string): boolean {
    const value = translate(`projects.details.${id}.${field}`);
    return value !== `projects.details.${id}.${field}` && value !== '';
  }
</script>

<Nav content="project-detail-content" />
<div id="project-detail-content" class="container">
  <div class="projects-wrapper">
    <div class="project-selector collapsed">
      <button class="back-button" on:click={goBack} aria-label="Back">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </button>
      <h1 class="main-title small">{translate('projects.title')}</h1>
      <div class="project-list compact">
        {#each projectIds as id, index}
          {@const isActive = id === projectId}
          <div 
            class="project-card compact"
            class:active={isActive}
            style="--index: {index}"
            on:click={() => handleCardClick(id)}
            role="button"
            tabindex="0"
            on:keydown={(e) => e.key === 'Enter' && handleCardClick(id)}
          >
            <img 
              class="card-icon-bg" 
              src={getProjectIconSrc(id)} 
              alt={getProjectDetail(id, 'title')}
            />
            <div class="card-content">
              <div class="card-number">{String(index + 1).padStart(2, '0')}</div>
              <div class="card-title">{getProjectDetail(id, 'title')}</div>
            </div>
            <div class="card-overlay"></div>
          </div>
        {/each}
      </div>
    </div>
    
    <!-- 오른쪽 상세 정보 영역 -->
    <div class="detail-panel active">
      <div class="detail-content">
        <div class="detail-header">
          <div class="detail-number">{String(currentIndex + 1).padStart(2, '0')}</div>
          <h2 class="detail-title">{getProjectDetail(projectId, 'title')}</h2>
        </div>
        
        <div class="detail-body">
          {#if hasProjectDetail(projectId, 'period')}
            <div class="detail-section">
              <span class="section-label">{translate('projects.details.period')}</span>
              <span class="section-value">{getProjectDetail(projectId, 'period')}</span>
            </div>
          {/if}
          
          {#if hasProjectDetail(projectId, 'role')}
            <div class="detail-section">
              <span class="section-label">{translate('projects.details.role')}</span>
              <span class="section-value">{getProjectDetail(projectId, 'role')}</span>
            </div>
          {/if}
          
          {#if hasProjectDetail(projectId, 'overview')}
            <div class="detail-section full-width">
              <h3 class="section-title">{translate('projects.details.overview')}</h3>
              <p class="section-text">{getProjectDetail(projectId, 'overview')}</p>
            </div>
          {/if}
          
          {#if hasProjectDetail(projectId, 'description')}
            <div class="detail-section full-width">
              <h3 class="section-title">{translate('projects.details.description')}</h3>
              <p class="section-text">{getProjectDetail(projectId, 'description')}</p>
            </div>
          {/if}
          
          {#if hasProjectDetail(projectId, 'contribution')}
            <div class="detail-section full-width">
              <h3 class="section-title">{translate('projects.details.contribution')}</h3>
              <p class="section-text">{getProjectDetail(projectId, 'contribution')}</p>
            </div>
          {/if}
          
          {#if hasProjectDetail(projectId, 'technologies')}
            <div class="detail-section full-width">
              <h3 class="section-title">{translate('projects.details.technologies')}</h3>
              <div class="tech-list">
                {#each getProjectDetail(projectId, 'technologies').split(',').filter(t => t.trim()) as tech}
                  <span class="tech-tag">{tech.trim()}</span>
                {/each}
              </div>
            </div>
          {/if}
          
          {#if hasProjectDetail(projectId, 'achievements')}
            <div class="detail-section full-width">
              <h3 class="section-title">{translate('projects.details.achievements')}</h3>
              <ul class="achievement-list">
                {#each getProjectDetail(projectId, 'achievements').split(',').filter(a => a.trim()) as achievement}
                  <li>{achievement.trim()}</li>
                {/each}
              </ul>
            </div>
          {/if}
        </div>
      </div>
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
    overflow: hidden;
    position: relative;
  }
  
  .projects-wrapper {
    display: flex;
    height: 100vh;
    position: relative;
  }
  
  /* 왼쪽 프로젝트 선택 영역 (축소됨) */
  .project-selector.collapsed {
    width: 280px;
    min-width: 280px;
    height: 100vh;
    padding: 2rem 1.5rem;
    background: rgba(15, 20, 35, 0.9);
    backdrop-filter: blur(10px);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    flex-direction: column;
    z-index: 10;
    position: relative;
    transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .back-button {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    transition: all 0.3s ease;
  }
  
  .back-button:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateX(-2px);
  }
  
  .main-title.small {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .project-list.compact {
    gap: 0.75rem;
  }
  
  .project-card.compact {
    height: 80px;
    padding: 0.75rem;
    opacity: 0.6;
    transform: translateX(0);
  }
  
  .project-card.compact.active {
    opacity: 1;
    border-color: rgba(102, 126, 234, 0.5);
    box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);
  }
  
  .project-card.compact:hover {
    opacity: 0.9;
    transform: translateX(4px);
  }
  
  .project-card.compact .card-title {
    font-size: 0.875rem;
  }
  
  .project-card.compact .card-number {
    font-size: 0.65rem;
  }
  
  /* 오른쪽 상세 정보 영역 */
  .detail-panel {
    flex: 1;
    height: 100vh;
    padding: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 1;
    overflow-y: auto;
  }
  
  .detail-panel.active {
    opacity: 1;
  }
  
  .detail-content {
    max-width: 900px;
    width: 100%;
    animation: fadeInUp 0.5s ease;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .detail-header {
    display: flex;
    align-items: baseline;
    gap: 1.5rem;
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    border-bottom: 2px solid rgba(102, 126, 234, 0.3);
  }
  
  .detail-number {
    font-size: 1.5rem;
    font-weight: 700;
    color: rgba(102, 126, 234, 0.6);
    letter-spacing: 2px;
  }
  
  .detail-title {
    font-size: 3rem;
    font-weight: 800;
    color: #fff;
    margin: 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .detail-body {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  
  .detail-section {
    display: flex;
    gap: 1.5rem;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    transition: all 0.3s ease;
  }
  
  .detail-section:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(102, 126, 234, 0.3);
  }
  
  .detail-section.full-width {
    flex-direction: column;
    gap: 1rem;
  }
  
  .section-label {
    font-size: 0.875rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
    letter-spacing: 1px;
    min-width: 100px;
  }
  
  .section-value {
    font-size: 1.125rem;
    font-weight: 500;
    color: #fff;
    flex: 1;
  }
  
  .section-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    margin: 0;
  }
  
  .section-text {
    font-size: 1.125rem;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
  }
  
  .tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }
  
  .tech-tag {
    padding: 0.5rem 1rem;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
    border: 1px solid rgba(102, 126, 234, 0.3);
    border-radius: 8px;
    color: #fff;
    font-size: 0.875rem;
    font-weight: 500;
  }
  
  .achievement-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .achievement-list li {
    font-size: 1.125rem;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.8);
    padding-left: 1.5rem;
    position: relative;
  }
  
  .achievement-list li::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: #667eea;
    font-weight: bold;
    font-size: 1.25rem;
  }
  
  /* 공통 스타일 (목록 페이지와 동일) */
  .card-icon-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.25;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    filter: blur(1px);
  }
  
  .project-card.compact:hover .card-icon-bg,
  .project-card.compact.active .card-icon-bg {
    opacity: 0.4;
    filter: blur(0px);
  }
  
  .card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.1) 50%,
      rgba(0, 0, 0, 0.5) 100%
    );
    z-index: 1;
  }
  
  .card-content {
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .card-number {
    font-size: 0.75rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.6);
    letter-spacing: 2px;
    margin-bottom: 0.25rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }
  
  .card-title {
    font-size: 1rem;
    font-weight: 700;
    color: #fff;
    line-height: 1.3;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
  }
  
  /* 반응형 디자인 */
  @media screen and (max-width: 1024px) {
    .project-selector.collapsed {
      width: 240px;
      min-width: 240px;
    }
    
    .detail-panel {
      padding: 2rem 1.5rem;
    }
    
    .detail-title {
      font-size: 2rem;
    }
  }
  
  @media screen and (max-width: 768px) {
    .projects-wrapper {
      flex-direction: column;
    }
    
    .project-selector.collapsed {
      width: 100%;
      height: auto;
      min-height: auto;
      padding: 1.5rem;
      border-right: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .project-list.compact {
      flex-direction: row;
      overflow-x: auto;
      overflow-y: hidden;
      padding-bottom: 0.5rem;
    }
    
    .project-card.compact {
      min-width: 120px;
      height: 70px;
    }
    
    .detail-panel {
      height: auto;
      min-height: 60vh;
      padding: 2rem 1rem;
    }
    
    .detail-title {
      font-size: 1.5rem;
    }
    
    .main-title.small {
      font-size: 1.25rem;
    }
  }
</style>

