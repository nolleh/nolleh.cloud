<script lang="ts">
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

	export let repos: Repo[];
</script>

<!--source: https://www.theguardian.com/music/2021/nov/30/the-50-best-albums-of-2021-->
<div class="container">
	<!-- <h1>Top 10 albums of 2021</h1> -->
	<!-- <cite>Source: <a href="https://www.theguardian.com/music/2021/nov/30/the-50-best-albums-of-2021">The Guardian</a></cite> -->
	<ol>
		{#each repos as repo}
			<li>
				<span>{repo.name}</span>
				<span><a href={repo.url}>{repo.url}</span>
			</li>
		{/each}
	</ol>

	<!-- <div class="divider"></div> -->
</div>

<style>
	* {
		box-sizing: border-box;
	}

	.container {
		margin: 0;
		padding: clamp(0.5rem, 1vw, 1.5rem);
		font-family: 'Open Sans', sans-serif;
		font-size: 1.0rem;
		max-width: 80rem;
		margin: 0 auto;
	}

	a {
		color: inherit;
	}

	ol {
		padding: 1.5rem 1.5rem 1.5rem 4em;
		border: 0.3rem solid turquoise;
		columns: 25rem;
		column-gap: 7rem;
		column-rule: 4px dotted turquoise;
		border-radius: 0.5rem;
	}

	ol > * + * {
		margin-top: 1rem;
	}

	li {
		break-inside: avoid;
	}

	::marker {
		content: counters(list-item, '') ': ';
		font-weight: 700;
		font-size: 1.2em;
		color: turquoise;
	}

	li span {
		display: block;
	}

	li span:first-child {
		font-size: 1.2em;
	}

	li span:last-child {
		font-style: italic;
	}

	.divider {
		min-height: 6rem;
		background: lavender;
	}
</style>
