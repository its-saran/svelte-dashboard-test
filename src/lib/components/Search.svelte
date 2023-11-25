<script lang="ts">
	import Search from '$lib/components/icons/Search.svelte';
</script>

<div class="relative flex w-full items-baseline">
	<div class="mr-2 text-violet-950 mt-auto"><Search /></div>
	<input
		type="text"
		name="search"
		placeholder="Search by keyword"
		class="w-full border-b-2 border-dashed border-b-pastelPurple bg-transparent font-sansSerif text-base text-black outline-none focus:border-solid focus:border-b-lavenderIndigo md:w-[14rem] lg:w-72 lg:text-xl"
	/>
	<button class="font-sansSerif text-lg lg:text-xl font-black text-violet-950 ml-2">Search</button>
</div>
