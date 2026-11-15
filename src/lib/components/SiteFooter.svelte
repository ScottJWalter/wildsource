<script lang="ts">
	import { resolve } from '$app/paths';
	import { REPO_URL } from '#lib/config.ts';
</script>

<footer class="border-t border-line">
	<div
		class="container-page flex flex-wrap justify-between gap-x-10 gap-y-4 py-9 text-[15px] text-muted"
	>
		<span>WildSource is open source. Streams belong to the people who run them.</span>
		<span class="flex flex-wrap gap-x-7 gap-y-2">
			<a href={resolve('/reuse')} class="text-link">Reuse the catalog</a>
			<a href={REPO_URL} rel="external" class="text-link">Source code</a>
			<a href="{REPO_URL}/blob/main/LICENSE" rel="external" class="text-link">License</a>
		</span>
	</div>
</footer>
