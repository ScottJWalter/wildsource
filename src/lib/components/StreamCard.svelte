<script lang="ts">
	import { resolve } from '$app/paths';
	import { getHost, toneOf } from '#lib/catalog.ts';
	import type { Stream } from '#lib/types.ts';
	import Scene from './Scene.svelte';

	let { stream, onBg = false }: { stream: Stream; onBg?: boolean } = $props();

	const host = $derived(getHost(stream.hostId));
</script>

<a
	href={resolve('/streams/[id]', { id: stream.id })}
	class={[
		'flex flex-col overflow-hidden rounded-[20px] border border-line text-ink no-underline',
		onBg ? 'bg-bg' : 'bg-surface'
	]}
>
	<div class="relative aspect-video">
		<Scene tone={toneOf(stream)} />
		<span
			class="absolute top-3 left-3 rounded-full bg-pill px-2.5 py-1 text-xs font-bold text-pill-ink"
		>
			{stream.live ? 'Live' : 'Offline'}
		</span>
	</div>
	<div class="flex flex-col gap-2.5 px-5 pt-[18px] pb-[22px]">
		<span class="font-display text-[21px] font-semibold">{stream.title}</span>
		<div class="flex items-center gap-2.5 text-sm text-muted">
			<span aria-hidden="true" class="size-7 flex-none rounded-full bg-avatar"></span>
			<span>{host?.name ?? 'Unknown host'} · {stream.habitat} · {stream.region}</span>
		</div>
	</div>
</a>
