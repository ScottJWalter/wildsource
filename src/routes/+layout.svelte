<script lang="ts">
	import './layout.css';
	import { dev } from '$app/env';
	import { PUBLIC_VERCEL_ANALYTICS } from '$app/env/public';
	import { page } from '$app/state';
	import { inject, pageview } from '@vercel/analytics';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit-next';
	import favicon from '#lib/assets/favicon.svg';
	import SiteHeader from '#lib/components/SiteHeader.svelte';
	import SiteFooter from '#lib/components/SiteFooter.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	// Enable Vercel's scripts only when the deployment serves their endpoints.
	//
	// @vercel/analytics/sveltekit uses $app/stores, which SvelteKit 3 removed, so we use
	// the plain inject() and report page views ourselves from $app/state instead.
	if (PUBLIC_VERCEL_ANALYTICS) {
		inject({ mode: dev ? 'development' : 'production', disableAutoTrack: true });
		injectSpeedInsights();
	}

	$effect(() => {
		// Group views by route (/streams/[id]) as well as the actual path.
		if (PUBLIC_VERCEL_ANALYTICS && page.route.id)
			pageview({ route: page.route.id, path: page.url.pathname });
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<SiteHeader />
<main>
	{@render children()}
</main>
<SiteFooter />
