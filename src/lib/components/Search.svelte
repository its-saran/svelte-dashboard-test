<script lang="ts">
	import Search from '$lib/components/icons/Search.svelte';
</script>

<div class="relative flex w-full items-baseline">
	<div class="mr-2 text-violet-950 mt-auto"><Search /></div>
	<input
		type="text"
		name="search"
		placeholder="Search by keyword"
		class="w-21 border-b-2 border-dashed border-b-violet-950 bg-transparent font-sansSerif text-xl text-black outline-none focus:border-b-violet-500 focus:border-solid"
	/>
	<button class="font-sansSerif text-xl font-black text-violet-950 ml-2">Search</button>
</div>
