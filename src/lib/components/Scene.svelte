<!--
	Illustrated placeholder landscape, used wherever a stream thumbnail would go
	until real snapshots exist (v0.4). Purely decorative.
-->
<script lang="ts">
	let {
		tone = 0,
		variant = 'card'
	}: { tone?: number; variant?: 'card' | 'hero' | 'wide' | 'small' } = $props();

	const sky = $derived(`fill: var(--tile-${tone}-sky)`);
	const ground = $derived(`fill: var(--tile-${tone}-ground)`);
	// The hero scenes add a second, teal hill in front, as in the design.
	const front = 'fill: var(--tile-4-ground)';
	const sun = 'fill: var(--c-accent)';
</script>

{#if variant === 'hero'}
	<svg
		viewBox="0 0 400 420"
		preserveAspectRatio="xMidYMid slice"
		aria-hidden="true"
		class="absolute inset-0 size-full"
	>
		<rect width="400" height="420" style={sky} />
		<circle cx="290" cy="120" r="52" style={sun} />
		<path d="M0 300 C80 240 160 280 240 230 S360 250 400 220 V420 H0Z" style={ground} />
		<path d="M0 350 C90 310 170 350 260 320 S360 330 400 310 V420 H0Z" style={front} />
	</svg>
{:else if variant === 'wide'}
	<svg
		viewBox="0 0 640 360"
		preserveAspectRatio="xMidYMid slice"
		aria-hidden="true"
		class="absolute inset-0 size-full"
	>
		<rect width="640" height="360" style={sky} />
		<circle cx="470" cy="110" r="46" style={sun} />
		<path d="M0 250 C120 200 220 250 330 205 S540 220 640 190 V360 H0Z" style={ground} />
		<path d="M0 300 C140 262 240 305 360 275 S560 285 640 262 V360 H0Z" style={front} />
	</svg>
{:else if variant === 'small'}
	<svg
		viewBox="0 0 200 172"
		preserveAspectRatio="xMidYMid slice"
		aria-hidden="true"
		class="absolute inset-0 size-full"
	>
		<rect width="200" height="172" style={sky} />
		<path d="M0 110 C50 90 100 120 200 96 V172 H0Z" style={ground} />
	</svg>
{:else}
	<svg
		viewBox="0 0 320 180"
		preserveAspectRatio="xMidYMid slice"
		aria-hidden="true"
		class="absolute inset-0 size-full"
	>
		<rect width="320" height="180" style={sky} />
		<path d="M0 120 C70 96 150 130 230 108 S300 110 320 104 V180 H0Z" style={ground} />
	</svg>
{/if}
