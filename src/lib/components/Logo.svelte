<script lang="ts">
	let { size = 34 }: { size?: number } = $props();
</script>

<svg width={size} height={size} viewBox="0 0 34 34" aria-hidden="true">
	<circle cx="17" cy="17" r="17" style="fill: var(--c-primary)" />
	<path d="M9 25c0-9 6-15 16-15 0 9-6 15-16 15z" style="fill: var(--c-accent)" />
	<path
		d="M9 25L20 14"
		style="stroke: var(--c-primary)"
		stroke-width="1.6"
		stroke-linecap="round"
	/>
</svg>
