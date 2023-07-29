<script lang="ts">
  import Nav from '../components/nav.svelte';
  import Intersection from '../components/intersection.svelte';
  import BoxListing from '../components/box-listing.svelte';
  import Collapsible from '../components/collapsible.svelte';

  import type { Repo } from '../libs/repo';
  import { Lang } from '../libs/repo';

  let content: string = 'scrollable-content';
  let playedProject: string = '';
  let playedGif: string | null;

  const contribution: Repo[] = [
    { url: 'https://github.com/helm/charts', name: 'helm', lang: Lang.HELM, merged: true },
    { url: 'https://github.com/sirupsen/logrus', name: 'logrus', lang: Lang.GO, merged: true },
    {
      url: 'https://github.com/NLKNguyen/pipe-mysql.vim',
      name: 'pipe-mysql.vim',
      lang: Lang.VIM_SCRIPT,
      merged: true
    },
    {
      url: 'https://github.com/vimwiki/vimwiki',
      name: 'vimwiki',
      lang: Lang.VIM_SCRIPT,
      merged: true
    },
    {
      url: 'https://github.com/nekipelov/redisclient',
      name: 'redisclient c++',
      lang: Lang.CPP,
      merged: false
    }
  ];

  const ownCode: Repo[] = [
    {
      url: 'https://github.com/nolleh/caption_json_formatter',
      name: 'caption-json-formatter',
      lang: Lang.GO,
      merged: false
    },
    { url: 'https://github.com/nolleh/ctxlog', name: 'ctxlog', lang: Lang.GO, merged: false },
    {
      url: 'https://github.com/nolleh/serialize-interceptor',
      name: 'serialize-interceptor',
      lang: Lang.VIM_SCRIPT,
      merged: false
    },
    {
      url: 'https://github.com/nolleh/jest-badge-deploy-action',
      name: 'jest-badge-deploy-action',
      lang: Lang.VIM_SCRIPT,
      merged: false
    }
  ];

  interface Project {
    id: string;
    src: string;
    desc: string;
    gif?: string;
  }

  const projects: Project[] = [
    {
      id: 'newmatgo',
      src: 'projects/newmatgo.png',
      desc: 'pmang newmatgo mobile',
      gif: 'projects/newmatgo.gif'
    },
    {
      id: 'poker',
      src: 'projects/poker.png',
      desc: 'pmang poker',
      gif: 'projects/poker.gif'
    },
    {
      id: 'heybit',
      src: 'projects/heybit.webp',
      desc: 'heybit'
    },
    {
      id: 'bp',
      src: 'projects/bp.jpeg',
      desc: 'brown dust puzzle'
    },
    {
      id: 'bugs',
      src: 'projects/bugs.png',
      desc: 'music player bugs'
    }
  ];

  function gifPlay(id: string | null = null) {
    if (!id || playedProject === id) {
      playedProject = '';
      playedGif = null;
      return '';
    }

    const project = projects.find((x) => x.id === id);
    playedGif = project?.gif ?? null;
    playedProject = id;
    return '';
  }
</script>

<Nav {content} />
<div id={content} class="container">
  <Intersection let:intersecting>
    <section id="sc-intro" class="snap">
      <div class={`wrap hidden ${intersecting ? 'show' : ''}`}>
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

  <Intersection let:intersecting>
    <section id="sc-skill" class="snap">
      <div class={`wrap hidden ${intersecting ? 'show' : ''}`}>
        <h1>Skills</h1>
        <h2>Realtime Game Server</h2>
        <p>Senior Engineer for C++, C# based RPC Framework with Socket Programming</p>

        <div class="tags">#MultiThread #TCP/IP #WebSocket #Frameworks #boost.Asio #windows</div>

        <div class="logos">
          <img
            class={`logo hidden ${intersecting ? 'show' : ''}`}
            src="skills/aws.webp"
            alt="aws"
            width="100px"
          />
          <img
            class={`logo hidden ${intersecting ? 'show' : ''}`}
            src="skills/k8s.png"
            alt="k8s"
            width="100px"
          />
        </div>

        <h2>Backend Server</h2>
        <Collapsible>
          <p>have experience DevOps in K8S/AWS/Terraform</p>
          <p>Developed Membership/Auth/Platform Service</p>
          <p>
            Developed Game Contents (League, Campaign, Store, Mission, Battle Pass, Guild,
            Inventory, Chat..)
          </p>
          <p>Developed Fintech Contents (140 million)</p>
          <div class="tags">
            #Restful Api #Asp.Net #Node.js #Platform #Contents (Game/Fintech) #BlockChain #MSA
          </div>
        </Collapsible>
      </div>
    </section>
  </Intersection>

  <Intersection let:intersecting>
    <section
      id="sc-projects"
      class={`snap ${intersecting && playedProject ? 'play' : gifPlay()}`}
      style="background-image:{intersecting && playedGif ? `url(${playedGif})` : 'none'}"
    >
      <div
        class={`wrap hidden ${intersecting ? 'show' : ''} ${
          intersecting && playedProject ? 'play' : ''
        }`}
      >
        <h1>Projects</h1>
        <div class="logos">
          {#each projects as project}
            <div
              class={`flip-card hidden ${intersecting ? 'show' : ''}`}>
              <div class={`flip-card-inner ${playedProject === project.id ? 'is-flipped' : ''}`}>
                <button class="flip-card-front" type="button" on:click={() => gifPlay(project.id)}>
                  <img class="" src={project.src} alt={project.desc} width="100px" />
                </button>
                <button class="flip-card-back">
                  <h2>{project.id}</h2>
                </button>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </section>
  </Intersection>

  <Intersection let:intersecting>
    <section id="sc-personal" class="snap">
      <div class={`wrap hidden ${intersecting ? 'show' : ''}`}>
        <h1>Personal Activities #1</h1>
        <h3>OpenSource Contribution</h3>
        <BoxListing repos={contribution} />
      </div>
    </section>
  </Intersection>
  <Intersection let:intersecting>
    <section id="sc-personal2" class="snap">
      <div class={`wrap hidden ${intersecting ? 'show' : ''}`}>
        <h1>Personal Activities #2</h1>
        <h3>Original Open Source</h3>
        <BoxListing repos={ownCode} />
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

  @keyframes flip {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(180deg);
    }
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
    display: inline-flex;
  }

  .logo,
  .flip-card /* scene */ {
    width: 100px;
    height: 100px;
    margin: 10px;
    /* border-radius: 10px; */
    background-color: #131316;
    padding: 0;
  }

  /* card */
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 1s;
    transform-style: preserve-3d;
  }

  .flip-card-inner.is-flipped {
    transform: rotateY(-180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .flip-card-back {
    background-color: dodgerblue;
    color: white;
    transform: rotateY(180deg);
  }

  .logoimg {
    display: block;
    overflow-x: scroll;
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
</style>
