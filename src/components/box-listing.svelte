<script lang="ts">
  import type { Repo } from '../libs/repo';

  export let repos: Repo[];
  export type { Repo };
</script>

<!--source: https://www.theguardian.com/music/2021/nov/30/the-50-best-albums-of-2021-->
<div class="container">
  <!-- <h1>Top 10 albums of 2021</h1> -->
  <!-- <cite>Source: <a href="https://www.theguardian.com/music/2021/nov/30/the-50-best-albums-of-2021">The Guardian</a></cite> -->
  <ol>
    {#each repos as repo}
      <li>
        <div>
          <span>{repo.name}</span>
          {#if repo.merged} <span class="badge"> merged </span> {/if}
        </div>
        <span><a href={repo.url}>{repo.url}</a></span>
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
    font-size: 1rem;
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

  /* li { */
  /* 	break-inside: avoid; */
  /* } */

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
    font-size: 1.3em;
  }

  li span:last-child {
    font-style: italic;
  }

  li div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
  }

  .badge {
    /* position:absolute; */
    /* right: -25px; */
    /* top: -12px; */
    width: 60px;
    /* transform: rotate(10deg); */
    background-color: seagreen;
    color: white;
    border-radius: 5px;
    text-align: center;
    padding: 0.35rem;
    font-size: 0.8em;
    box-shadow: 1px 1px 0 mediumseagreen, 2px 2px 0 gray;
  }
</style>
