<script lang="ts">
  import type { PageData } from './$types'

  const { data }: { data: PageData } = $props()
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a>
   to read the documentation
</p>

<ul>
  {#each data.media.docs as media}
    <li>
      {media.alt}
    </li>
  {/each}
</ul>
