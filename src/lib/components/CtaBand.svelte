<script lang="ts">
	import type { ResolvedPathname } from '$app/types';

	let {
		title,
		body,
		label,
		href,
		externalHref
	}: {
		title: string;
		body: string;
		label: string;
		/** An in-app link, from resolve(). */
		href?: ResolvedPathname;
		/** A link to another site. */
		externalHref?: string;
	} = $props();

	const linkClass =
		'inline-flex min-h-14 items-center rounded-[14px] bg-accent px-8 text-[17px] font-bold text-on-accent no-underline';
</script>

<section class="bg-band py-[clamp(48px,9vw,80px)] text-on-band">
	<div class="container-page flex flex-wrap items-center justify-between gap-8">
		<div class="flex flex-[1_1_480px] flex-col gap-3.5">
			<h2 class="m-0 font-display text-[clamp(28px,6vw,42px)] leading-[1.1] font-semibold">
				{title}
			</h2>
			<p class="m-0 max-w-[620px] text-lg text-pretty text-band-muted">{body}</p>
		</div>
		{#if externalHref}
			<a href={externalHref} rel="external" class={linkClass}>{label}</a>
		{:else if href}
			<a {href} class={linkClass}>{label}</a>
		{/if}
	</div>
</section>
