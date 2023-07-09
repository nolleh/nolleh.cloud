<script lang="ts">
	import Intersection from '../components/intersection.svelte';
  import MemoListing from '../components/memo-listing.svelte';
  import BoxListing from '../components/box-listing.svelte'; 

	interface Repo {
		url: string;
		name: string;
		lang: Lang;
		merged: boolean;
	}

	enum Lang {
		HELM,
		GO,
		VIM_SCRIPT,
		PYTHON,
		TYPE_SCRIPT
	}

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
		}
	];

	const ownCode: Repo[] = [
		{
			url: 'https://github.com/nolleh/caption-json-formatter',
			name: 'caption-json-formatter',
			lang: Lang.GO,
			merged: true
		},
		{ url: 'https://github.com/nolleh/ctxlog', name: 'ctxlog', lang: Lang.GO, merged: true },
		{
			url: 'https://github.com/nolleh/serialize-interceptor',
			name: 'serialize-interceptor',
			lang: Lang.VIM_SCRIPT,
			merged: true
		},
		{
			url: 'https://github.com/nolleh/jest-badge-deploy-action',
			name: 'jest-badge-deploy-action',
			lang: Lang.VIM_SCRIPT,
			merged: true
		}
	];
</script>

<div class="container">
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

			<div class="tags">#MultiThread #TCP/IP #WebSocket #Frameworks #boost #windows</div>

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
			<p>Senior Engineer for C++, C# based RPC Framework with Socket Programming</p>

			<div class="tags">#Restful Api #Asp.Net #Platform #Contents (Game/Fintech) #BlockChain</div>
		</section>
	</Intersection>

	<Intersection let:intersecting>
		<section id="sc-projects" class={`hidden snap ${intersecting ? 'show' : ''}`}>
			<h1>Projects</h1>
			<div class="logos">
				<img
					class={`logo hidden ${intersecting ? 'show' : ''}`}
					src="projects/newmatgo.png"
					alt="pmang new matgo mobile"
					width="100px"
				/>
				<img
					class={`logo hidden ${intersecting ? 'show' : ''}`}
					src="projects/poker.png"
					alt="pmang poker mobile"
					width="100px"
				/>
				<img
					class={`logo hidden ${intersecting ? 'show' : ''}`}
					src="projects/heybit.webp"
					alt="heybit"
					width="100px"
				/>
				<img
					class={`logo hidden ${intersecting ? 'show' : ''}`}
					src="projects/bp.jpeg"
					alt="browndust puzzle"
					width="100px"
				/>
				<img
					class={`logo hidden ${intersecting ? 'show' : ''}`}
					src="projects/bugs.png"
					alt="music player bugs"
					width="100px"
				/>
			</div>
		</section>
	</Intersection>

	<Intersection let:intersecting>
		<section id="sc-personal" class={`hidden snap ${intersecting ? 'show' : ''}`}>
			<h1>Personal Activities #1</h1>

			<h3>OpenSource Contribution</h3>
      <BoxListing repos={contribution} />
			
      <h3>Original Open Source</h3>
      <BoxListing repos={ownCode} />

		</section>
	</Intersection>
	<Intersection let:intersecting>
		<section id="sc-personal2" class={`hidden snap ${intersecting ? 'show' : ''}`}>
			<h1>Personal Activities #2</h1>
			<h3>Android App</h3>
		</section>
	</Intersection>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700&display=swap');
	.container {
		display: flex;
		overflow: auto;
		height: 100vh;
		flex-flow: column nowrap;
		/* scroll-snap-type: y mandatory; */
	}

	section {
		display: grid;
		place-items: center;
		align-content: center;
		min-height: 100vh;
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
		scroll-snap-align: start;
		/* scroll-snap-stop: always; */
	}

	.logos {
		display: flex;
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
