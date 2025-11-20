<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  import { t } from '$lib/i18n';
  import { locale } from '$lib/stores/locale';
  import { projects } from '$lib/stores/project';
  import { goto } from '$app/navigation';
  
  // Reactive translation helper
  $: translate = (key: string) => t(key, $locale);
  
  // 프로젝트 목록 (사용자가 언급한 프로젝트들)
  const projectIds = ['ai', 'dndn', 'heybit', 'bp', 'newmatgo'];
  
  // 프로젝트 아이콘 매핑 (ai는 querypie 아이콘 사용)
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
    return project?.src || '';
  }
  
  let hoveredProject: string | null = null;
  
  function handleCardClick(projectId: string) {
    goto(`/projects/${projectId}`);
  }
  
  function getProjectDetail(id: string, field: string): string {
    return translate(`projects.details.${id}.${field}`);
  }
  
  function hasProjectDetail(id: string, field: string): boolean {
    const value = translate(`projects.details.${id}.${field}`);
    return value !== `projects.details.${id}.${field}` && value !== '';
  }
</script>

<Nav content="projects-content" />
<div id="projects-content" class="container" data-project-page>
  <div class="projects-wrapper">
    <div class="project-selector">
      <h1 class="main-title">{translate('projects.title')}</h1>
      <div class="project-list">
        {#each projectIds as projectId, index}
          {@const isHovered = hoveredProject === projectId}
          <div 
            class="project-card"
            class:hovered={isHovered}
            style="--index: {index}"
            on:mouseenter={() => hoveredProject = projectId}
            on:mouseleave={() => hoveredProject = null}
            on:click={() => handleCardClick(projectId)}
            on:keydown={(e) => e.key === 'Enter' && handleCardClick(projectId)}
            role="button"
            tabindex="0"
          >
            <img 
              class="card-icon-bg" 
              src={getProjectIconSrc(projectId)} 
              alt={getProjectDetail(projectId, 'title')}
            />
            <div class="card-content">
              <div class="card-number">{String(index + 1).padStart(2, '0')}</div>
              <div class="card-title">{getProjectDetail(projectId, 'title')}</div>
            </div>
            <div class="card-overlay"></div>
            <div class="card-glow"></div>
          </div>
        {/each}
      </div>
    </div>
    
    <!-- 오른쪽 상세 정보 영역 -->
    <div class="detail-panel" class:active={hoveredProject !== null}>
      {#if hoveredProject}
        <div class="detail-content">
          <div class="detail-header">
            <div class="detail-number">{String(projectIds.indexOf(hoveredProject) + 1).padStart(2, '0')}</div>
            <h2 class="detail-title">{getProjectDetail(hoveredProject, 'title')}</h2>
          </div>
          
          <div class="detail-body hover-preview">
            {#if hasProjectDetail(hoveredProject, 'overview')}
              <div class="detail-section full-width">
                <h3 class="section-title">{translate('projects.details.overview')}</h3>
                <p class="section-text">{getProjectDetail(hoveredProject, 'overview')}</p>
              </div>
            {:else if hasProjectDetail(hoveredProject, 'description')}
              <div class="detail-section full-width">
                <h3 class="section-title">{translate('projects.details.description')}</h3>
                <p class="section-text">{getProjectDetail(hoveredProject, 'description')}</p>
              </div>
            {/if}
            <div class="click-hint">
              <p class="hint-text">클릭하여 상세 정보 보기</p>
              <p class="hint-text-en">Click to view details</p>
            </div>
          </div>
        </div>
      {:else}
        <div class="empty-state">
          <div class="empty-icon">👈</div>
          <p class="empty-text">프로젝트에 마우스를 올려보세요</p>
          <p class="empty-text-en">Hover over a project to see details</p>
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
  }
  
  .projects-wrapper {
    display: flex;
    min-height: 100vh;
    position: relative;
  }
  
  /* 왼쪽 프로젝트 선택 영역 */
  .project-selector {
    width: 400px;
    min-width: 400px;
    min-height: 100vh;
    padding: 3rem 2rem;
    background: rgba(15, 20, 35, 0.8);
    backdrop-filter: blur(10px);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    flex-direction: column;
    z-index: 10;
    position: relative;
  }
  
  .main-title {
    font-size: 2.5rem;
    font-weight: 800;
    color: #fff;
    margin-bottom: 3rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .project-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
    overflow-y: auto;
    padding-right: 0.5rem;
  }
  
  .project-list::-webkit-scrollbar {
    width: 6px;
  }
  
  .project-list::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 3px;
  }
  
  .project-list::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
  }
  
  .project-list::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.3);
  }
  
  .project-card {
    position: relative;
    width: 100%;
    height: 140px;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 1.25rem;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
    transform: translateX(calc(var(--index) * -20px));
    opacity: 0.7;
  }
  
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
  
  .project-card:hover .card-icon-bg,
  .project-card.hovered .card-icon-bg {
    opacity: 0.4;
    filter: blur(0px);
    transform: scale(1.1);
  }
  
  .project-card:nth-child(1) {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%);
  }
  
  .project-card:nth-child(2) {
    background: linear-gradient(135deg, rgba(240, 147, 251, 0.15) 0%, rgba(245, 87, 108, 0.15) 100%);
  }
  
  .project-card:nth-child(3) {
    background: linear-gradient(135deg, rgba(79, 172, 254, 0.15) 0%, rgba(0, 242, 254, 0.15) 100%);
  }
  
  .project-card:nth-child(4) {
    background: linear-gradient(135deg, rgba(67, 233, 123, 0.15) 0%, rgba(56, 249, 215, 0.15) 100%);
  }
  
  .project-card:nth-child(5) {
    background: linear-gradient(135deg, rgba(250, 112, 154, 0.15) 0%, rgba(254, 225, 64, 0.15) 100%);
  }
  
  .project-card:hover {
    transform: translateX(0) scale(1.02);
    opacity: 1;
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
  }
  
  .project-card.hovered {
    transform: translateX(0) scale(1.05);
    opacity: 1;
    border-color: rgba(102, 126, 234, 0.5);
    box-shadow: 0 12px 40px rgba(102, 126, 234, 0.4);
    z-index: 20;
  }
  
  .card-glow {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(102, 126, 234, 0.2) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
  }
  
  .project-card.hovered .card-glow {
    opacity: 1;
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
    transition: opacity 0.4s ease;
  }
  
  .project-card:hover .card-overlay,
  .project-card.hovered .card-overlay {
    opacity: 0.7;
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
  
  .detail-panel {
    flex: 1;
    height: 100vh;
    padding: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0.3;
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
  
  .empty-state {
    text-align: center;
    color: rgba(255, 255, 255, 0.3);
  }
  
  .empty-icon {
    font-size: 4rem;
    margin-bottom: 1rem;
    opacity: 0.5;
  }
  
  .empty-text {
    font-size: 1.25rem;
    font-weight: 500;
    margin: 0.5rem 0;
  }
  
  .empty-text-en {
    font-size: 1rem;
    font-weight: 400;
    opacity: 0.6;
    margin: 0.5rem 0;
  }
  
  .hover-preview {
    max-height: 60vh;
    overflow-y: auto;
  }
  
  .click-hint {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    text-align: center;
  }
  
  .hint-text {
    font-size: 0.875rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.5);
    margin: 0.25rem 0;
  }
  
  .hint-text-en {
    font-size: 0.75rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.4);
    margin: 0.25rem 0;
  }
  
  /* 반응형 디자인 */
  @media screen and (max-width: 1024px) {
    .projects-wrapper {
      flex-direction: column;
    }
    
    .project-selector {
      width: 100%;
      height: auto;
      min-height: auto;
      padding: 2rem 1.5rem;
      border-right: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .project-list {
      flex-direction: row;
      overflow-x: auto;
      overflow-y: hidden;
      padding-bottom: 0.5rem;
    }
    
    .project-card {
      min-width: 200px;
      height: 100px;
      transform: translateY(calc(var(--index) * -10px));
    }
    
    .project-card:hover,
    .project-card.hovered {
      transform: translateY(0) scale(1.05);
    }
    
    .detail-panel {
      height: auto;
      min-height: 60vh;
      padding: 2rem 1.5rem;
    }
    
    .detail-title {
      font-size: 2rem;
    }
    
    .main-title {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  }
  
  @media screen and (max-width: 768px) {
    .main-title {
      font-size: 1.5rem;
    }
    
    .project-card {
      min-width: 160px;
      height: 100px;
      padding: 0.75rem;
    }
    
    .card-number {
      font-size: 0.65rem;
    }
    
    .card-title {
      font-size: 0.875rem;
    }
    
    .detail-title {
      font-size: 1.5rem;
    }
    
    .detail-header {
      flex-direction: column;
      gap: 0.5rem;
    }
    
    .section-title {
      font-size: 1.25rem;
    }
    
    .section-text {
      font-size: 1rem;
    }
  }
</style>
