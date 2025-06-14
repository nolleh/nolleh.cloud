<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  import Intersection from '$lib/components/Intersection.svelte';
  import BoxListing from '$lib/components/BoxListing.svelte';
  import Collapsible from '$lib/components/Collapsible.svelte';

  import { contribution, ownCode } from '$lib/stores/repo';
  import { projects } from '$lib/stores/project';

  let content: string = 'scrollable-content';
  let playedProject: string = '';
  let playedGif: string | null;

  function gifPlay(id: string | null = null) {
    if (!id || playedProject === id) {
      playedProject = '';
      playedGif = null;
      return '';
    }

    const project = $projects.find((x) => x.id === id);
    playedGif = project?.gif ?? null;
    playedProject = id;
    return '';
  }

  function onIntersectingChanged(event: any) {
    const target = event.detail.container as Element;
    const hiddens = target.querySelectorAll('.hidden');
    for (const h of hiddens) {
      event.detail.intersecting ? h.classList.add('show') : h.classList.remove('show');
    }
  }
</script>

<Nav {content} />
<div id={content} class="container">
  <Intersection on:onIntersectingChanged={onIntersectingChanged}>
    <section id="sc-intro" class="snap">
      <div class="wrap hidden">
        <!-- <div class={`wrap hidden ${intersecting ? 'show' : ''}`}> -->
        <h1>Nolleh (kyeong-mi Kim)</h1>
        <p>Realtime Game Server / Backend Programmer</p>
        <div class="tags">#MultiThread #Framework #WebSocket #devops #Android</div>

        <div class="badges">
          <a href="https://leetcode.com/nolleh7707" target="_blank">
            <img
              class="badge"
              src="https://img.shields.io/badge/dynamic/json?style=for-the-badge&labelColor=black&color=%23ffa116&label=Solved&query=solvedOverTotal&url=https%3A%2F%2Fleetcode-badge.vercel.app%2Fapi%2Fusers%2Fnolleh7707&logo=leetcode&logoColor=yellow"
              alt="leetcode"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/%EA%B2%BD%EB%AF%B8-%EA%B9%80-a9805a82"
            target="_blank"
          >
            <img
              class="badge"
              src="https://img.shields.io/badge/-LinkedIn-blue?style=for-the-badge&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/%EA%B2%BD%EB%AF%B8-%EA%B9%80-a9805a82/"
              alt="linkedin"
            />
          </a>
          <a href="mailto:nolleh7707@gmail.com" target="_blank">
            <img
              class="badge"
              src="https://img.shields.io/badge/Gmail-d14836?style=for-the-badge&logo=Gmail&logoColor=white&link=mailto:nolleh7707@gmail.com)"
              alt="gmail"
            />
          </a>
        </div>
      </div>
    </section>
  </Intersection>

  <Intersection on:onIntersectingChanged={onIntersectingChanged}>
    <section id="sc-skill" class="snap">
      <div class="wrap hidden">
        <h1>Skills</h1>
        <h2>Realtime Game Server</h2>
        <p>Senior Engineer for C++, C# based RPC Framework with Socket Programming</p>

        <div class="tags">#MultiThread #TCP/IP #WebSocket #Frameworks #boost.Asio #windows</div>

        <div class="logos">
          <img class="logo hidden" src="skills/aws.webp" alt="aws" width="100px" />
          <img class="logo hidden" src="skills/k8s.png" alt="k8s" width="100px" />
        </div>

        <h2>Backend Server</h2>
        <Collapsible>
          <p>have experience DevOps in K8S/AWS/Terraform</p>
          <p>Developed Membership/Auth/Platform Service</p>
          <p>
            Developed Game Contents (League, Campaign, Store, Mission, Battle Pass, Guild,
            Inventory, Chat..)
          </p>
          <p>Developed Fintech Contents (22 billion)</p>
          <div class="tags">
            #Restful Api #Asp.Net #Node.js #Platform #Contents (Game/Fintech) #BlockChain #MSA
          </div>
        </Collapsible>
      </div>
    </section>
  </Intersection>

  <Intersection let:intersecting on:onIntersectingChanged={onIntersectingChanged}>
    <section
      id="sc-projects"
      class={`snap ${intersecting && playedProject ? 'play' : gifPlay()}`}
      style="background-image:{intersecting && playedGif ? `url(${playedGif})` : 'none'}"
    >
      <div class="wrap hidden" class:play={intersecting && playedProject}>
        <!-- <div class={`wrap hidden ${intersecting && playedProject ? 'play' : ''}`}> -->
        <h1>Projects</h1>
        <div class="logos">
          {#each $projects as project}
            <div class="logo flip-card hidden">
              <div class="flip-card-inner" class:is-flipped={playedProject === project.id}>
                <button class="flip-card-front" type="button" on:click={() => gifPlay(project.id)}>
                  <img class="logoimg" src={project.src} alt={project.desc} />
                </button>
                <button class="flip-card-back" on:click={() => gifPlay(project.id)}>
                  <h2>{project.id}</h2>
                </button>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </section>
  </Intersection>

  <Intersection on:onIntersectingChanged={onIntersectingChanged}>
    <section id="sc-personal" class="snap">
      <div class="wrap hidden">
        <h1>Personal Activities #1</h1>
        <h3>OpenSource Contribution</h3>
        <BoxListing repos={$contribution} />
      </div>
    </section>
  </Intersection>
  <Intersection let:intersecting>
    <section id="sc-personal2" class="snap">
      <div class={`wrap hidden ${intersecting ? 'show' : ''}`}>
        <h1>Personal Activities #2</h1>
        <h3>Original Open Source</h3>
        <BoxListing repos={$ownCode} />
      </div>
    </section>
  </Intersection>
  <Intersection let:intersecting>
    <section id="sc-personal3" class="snap">
      <div class={`wrap hidden ${intersecting ? 'show' : ''}`}>
        <h1>Personal Activities #3</h1>
        <h3>Android App</h3>
      </div>
    </section>
  </Intersection>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700&display=swap');
  .container {
    display: flex;
    overflow-y: scroll;
    height: 100vh;
    flex: none;
    flex-flow: column nowrap;
    scroll-snap-type: y mandatory;
  }

  section {
    display: grid;
    place-items: center;
    align-content: center;
    width: 100%;
    min-height: 100vh;
    background-repeat: no-repeat;
    /* background-size: 100% auto; */
    background-size: cover;
    background-position: center;
  }

  section.play {
    /* display: flex; */
    /* flex-direction: row column; */
    /* align-items: center; */
    /* justify-items: center; */
    grid-template-rows: auto 1fr;
  }

  @media screen and (max-width: 768px) {
    section.play {
      background-size: 250% auto;
    }
    .play.logo {
      width: 50px;
    }
  }

  .wrap {
    display: grid;
    place-items: center;
    align-content: center;
    opacity: 0.5;
  }

  .hidden {
    opacity: 0;
    filter: blur(5px);
    transform: translateX(-100%);
    transition: all 2s;
  }

  :global(.hidden.show) {
    filter: blur(0);
    transform: translateX(0);
    opacity: 1;
  }

  @media (prefers-reduced-motion) {
    .hidden {
      transition: none;
    }
  }

  img.play {
    width: 100%;
    height: 100%;
  }

  img:hover {
    opacity: 0.6;
  }

  img:active {
    opacity: 0.9;
  }

  .badges {
    padding: 20px;
  }

  .tags {
    color: #a3d3d3;
  }

  .snap {
    scroll-snap-align: center;
  }

  .logos {
    display: flex;
    flex-wrap: wrap;
  }

  .logo {
    width: 100px;
    height: 100px;
    margin: 10px;
    border-radius: 10px;
    padding: 0;
  }

  .flip-card-inner {
    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;
  }

  .flip-card-inner.is-flipped {
    transform: rotateY(-180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    background-color: #4b4b4b;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 10px;
    padding: 0;
  }

  .flip-card-back {
    color: white;
    transform: rotateY(180deg);
    font-size: 0.7rem;
  }

  .logoimg {
    width: 100%;
    height: 100%;
    /* display:inline-block; */
    border-radius: 10px;
  }

  .logo:nth-child(2),
  .logoimg:nth-child(2) {
    transition-delay: 200ms;
  }
  .logo:nth-child(3),
  .logoimg:nth-child(3) {
    transition-delay: 400ms;
  }
  .logo:nth-child(4),
  .logoimg:nth-child(4) {
    transition-delay: 600ms;
  }
  .logo:nth-child(5),
  .logo.logoimg:nth-child(5) {
    transition-delay: 800ms;
  }
  .logo:nth-child(6),
  .logo.logoimg:nth-child(6) {
    transition-delay: 1000ms;
  }
  .logo:nth-child(7),
  .logo.logoimg:nth-child(7) {
    transition-delay: 1200ms;
  }
  .logo:nth-child(8),
  .logo.logoimg:nth-child(8) {
    transition-delay: 1400ms;
  }
</style>
