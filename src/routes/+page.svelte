<script lang="ts">
	import Nav from '../components/nav.svelte';
	import Intersection from '../components/intersection.svelte';
	import BoxListing from '../components/box-listing.svelte';
	import Collapsible from '../components/collapsible.svelte';

	import type { Repo } from '../libs/repo';
	import { Lang } from '../libs/repo';

	let content: string = 'scrollable-content';
	let playedProject: string = '';
  let scproject: any;

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

	// src='projects/newmatgo.png'
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
			desc: 'pmang poker'
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

	function gifPlay(id: string) {
    const project = projects.find(x => x.id === id);
    if (playedProject === id) {
      playedProject = '';
      scproject.style.backgroundImage = ''; 
      return;
    }

    if (project && project.gif) {
      scproject.style.backgroundImage = `url(${project.gif})`; 
    }
    
		playedProject = id;
	}
</script>

<Nav {content} />
<div id={content} class="container">
	<Intersection let:intersecting>
		<section id="sc-intro" class={`hidden snap ${intersecting ? 'show' : ''}`}>
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
				<a href="https://www.linkedin.com/in/%EA%B2%BD%EB%AF%B8-%EA%B9%80-a9805a82" target="_blank">
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
		</section>
	</Intersection>

	<Intersection let:intersecting>
		<section id="sc-skill" class={`hidden snap ${intersecting ? 'show' : ''}`}>
			<h1>Skills</h1>
			<h2>Realtime Game Server</h2>
			<p>Senior Engineer for C++, C# based RPC Framework with Socket Programming</p>

			<div class="tags">#MultiThread #TCP/IP #WebSocket #Frameworks #boost.Asio #windows</div>

			<div class="skills logos">
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
					Developed Game Contents (League, Campaign, Store, Mission, Battle Pass, Guild, Inventory,
					Chat..)
				</p>
				<p>Developed Fintech Contents (140 million)</p>
				<div class="tags">
					#Restful Api #Asp.Net #Node.js #Platform #Contents (Game/Fintech) #BlockChain #MSA
				</div>
			</Collapsible>
		</section>
	</Intersection>

	<Intersection let:intersecting>
		<section id="sc-projects" class={`hidden snap ${intersecting ? 'show' : ''}`} bind:this={scproject}>
			<!-- <div class="stack"> -->
				<!-- <img class="play" alt="play" data-animate="${projects[playedProject]?.gif ?? '.'}" /> -->
				<h1>Projects</h1>
				<div class="logos">
					{#each projects as project}
						<!-- TODO -->
						<img
							class={`logo hidden ${intersecting ? 'show' : ''}`}
							src={project.src}
							alt={project.desc}
							width="100px"
							on:click={() => gifPlay(project.id)}
						/>
					{/each}
				</div>
			<!-- </div> -->
		</section>
	</Intersection>

	<Intersection let:intersecting>
		<section id="sc-personal" class={`hidden snap ${intersecting ? 'show' : ''}`}>
			<h1>Personal Activities #1</h1>
			<h3>OpenSource Contribution</h3>
			<BoxListing repos={contribution} />
		</section>
	</Intersection>
	<Intersection let:intersecting>
		<section id="sc-personal2" class={`hidden snap ${intersecting ? 'show' : ''}`}>
			<h1>Personal Activities #2</h1>
			<h3>Original Open Source</h3>
			<BoxListing repos={ownCode} />
		</section>
	</Intersection>
	<Intersection let:intersecting>
		<section id="sc-personal3" class={`hidden snap ${intersecting ? 'show' : ''}`}>
			<h1>Personal Activities #3</h1>
			<h3>Android App</h3>
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
    /* background-image: url('projects/newmatgo.gif'); */
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.5;
	}

	.hidden {
		opacity: 0;
		filter: blur(5px);
		transform: translateX(-50%);
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

  div.stack {
    position: absolute;
    top:0;
    bottom:0;
    width: 100%;
    height: 100%;
  }

	img.play {
		width: 100%;
		height: 100%;
	}

	img:hover {
		opacity: 0.6;
	}

	.badges {
		padding: 20px;
	}

	.tags {
		color: #a3d3d3;
	}

	.snap {
		/* scroll-snap-align: start; */
		scroll-snap-stop: always;
	}

	.logos {
		/* display: flex; */
	}

	.logo {
		margin: 10px;
		border-radius: 10px;
	}

	.logo:nth-child(2) {
		transition-delay: 200ms;
	}
	.logo:nth-child(3) {
		transition-delay: 400ms;
	}
	.logo:nth-child(4) {
		transition-delay: 600ms;
	}
	.logo:nth-child(5) {
		transition-delay: 800ms;
	}
</style>
