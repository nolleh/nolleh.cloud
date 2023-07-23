<script lang="ts">
  import type { Repo } from '../libs/repo';

  export let repos: Repo[];
  export type { Repo };
</script>

<div class="container">
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
    margin: 0 auto;
    max-width: 98vw;
    overflow-x: scroll;
  }

  a {
    color: inherit;
  }

  ol {
    padding: 1.2rem 1.2rem 1.2rem 3.2em;
    border: 0.3rem solid turquoise;
    columns: 25rem;
    column-rule: 4px dotted turquoise;
    border-radius: 0.5rem;
  }

  ol > * + * {
    margin-top: 1rem;
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
    width: 60px;
    background-color: seagreen;
    color: white;
    border-radius: 5px;
    text-align: center;
    padding: 0.35rem;
    font-size: 0.8em;
    box-shadow: 1px 1px 0 mediumseagreen, 2px 2px 0 gray;
  }
</style>
