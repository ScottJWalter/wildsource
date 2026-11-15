<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	let {
		id,
		label,
		value = $bindable(''),
		hint,
		error,
		multiline = false,
		...rest
	}: {
		id: string;
		label: string;
		value?: string;
		hint?: string;
		/** Shown, and the field marked invalid, when set. */
		error?: string | false;
		multiline?: boolean;
	} & Omit<HTMLInputAttributes, 'value' | 'id'> = $props();

	const describedBy = $derived(
		[hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(' ') || undefined
	);
</script>

<div class="flex flex-col gap-1.5">
	<label for={id} class="text-base font-bold">{label}</label>
	{#if multiline}
		<textarea {id} rows="4" bind:value aria-describedby={describedBy} class="field resize-y py-3"
		></textarea>
	{:else}
		<input
			{id}
			bind:value
			aria-invalid={error ? 'true' : undefined}
			aria-describedby={describedBy}
			class={['field', error && 'border-err']}
			{...rest}
		/>
	{/if}
	{#if hint}
		<span id="{id}-hint" class="text-sm text-muted">{hint}</span>
	{/if}
	{#if error}
		<span id="{id}-error" class="text-sm font-bold text-err">{error}</span>
	{/if}
</div>
