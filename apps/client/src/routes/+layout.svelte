<script lang="ts">
	import Navbar from "$lib/components/Navbar.svelte";
	import { onMount } from "svelte";
	import "../app.css";

	import interFont from "@fontsource/inter/files/inter-latin-400-normal.woff2?url";
	import interFont700 from "@fontsource/inter/files/inter-latin-700-normal.woff2?url";

	const { children } = $props();

	onMount(() => {
		if (!window?.indexedDB) {
			console.error(
				"It seems that your browser doesn't support IndexedDB. Falling back to localStorage, albeit, it may be limited.",
			);
		}
	});
</script>

<svelte:head>
	<!-- Preload fonts -->
	<link
		rel="preload"
		as="font"
		href={interFont}
		crossorigin="anonymous"
		fetchpriority="high"
	/>
	<link
		rel="preload"
		as="font"
		href={interFont700}
		crossorigin="anonymous"
		fetchpriority="high"
	/>
</svelte:head>

<Navbar />
<div id="wrapper" class="flex gap-x-4">
	<!-- <aside class="shrink-0">sidebar</aside> -->
	<div
		class="flex-1 dark:bg-neutral-900 bg-white dark:border-neutral-800 p-3 rounded-tl-sm h-[calc(theme(height.dvh)-calc(var(--nav-padding-y)*4))]"
	>
		<main id="skip-content">
			{@render children()}
		</main>
	</div>
</div>
