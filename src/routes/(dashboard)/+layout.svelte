<script>
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<div class="grid grid-cols-12 md:gap-x-16 bg-slate-200 min-h-screen">
	<Navbar />
	<main class="px-4 pt-4 col-span-12 md:col-span-8 md:pt-10">
		<slot />
	</main>
</div>
