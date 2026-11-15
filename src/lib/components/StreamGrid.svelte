<script lang="ts">
	import type { Stream } from '#lib/types.ts';
	import StreamCard from './StreamCard.svelte';

	let { streams, onBg = false }: { streams: Stream[]; onBg?: boolean } = $props();
</script>

<div class="grid grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))] gap-6">
	{#each streams as stream (stream.id)}
		<StreamCard {stream} {onBg} />
	{/each}
</div>
