<script lang="ts">
	import Search from '$lib/components/Search.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import View from '$lib/components/icons/View.svelte';
	import ThreeDots from '$lib/components/icons/ThreeDots.svelte';
	import CircledAmount from '$lib/components/circledAmount.svelte';
</script>

<svelte:head>
	<title>Invoices | The Dollar</title>
</svelte:head>

<div class="flex justify-between items-center mb-16">
	<!-- Search field -->
	<Search />

	<!-- New invoice Button -->
	<div>
		<button
			class="relative whitespace-nowrap rounded-lg bg-violet-700 px-10 py-3 font-sansSerif text-xl font-black text-white shadow-colored hover:shadow-coloredHover translate-y-0 hover:-translate-y-2 transition-all"
			>+ Invoice</button
		>
	</div>
</div>

<!-- List of invoices -->
<div>
	<!-- header -->
	<div class="table-header invoice-table text-violet-700">
		<h3>Status</h3>
		<h3>Due Date</h3>
		<h3>ID</h3>
		<h3>Client</h3>
		<h3>Amount</h3>
		<div />
		<div />
		<div />
	</div>

	<!-- invoices -->
	<div class="invoice-table items-center bg-white py-6 rounded-lg shadow-tableRow">
		<div><Tag label="current" /></div>
		<div class="text-lg">8/1/2023</div>
		<div class="text-lg">12345</div>
		<div class="text-xl font-bold">Compressed.fm</div>
		<div class="text-lg font-mono font-bold">$500.00</div>
		<div class="text-lg center text-pastelPurple hover:text-daisyBush">
			<a href=""><View /></a>
		</div>
		<div class="text-lg center">
			<button class="text-pastelPurple hover:text-daisyBush"><ThreeDots /></button>
		</div>
	</div>
</div>

<CircledAmount label="Total" amount="$1,500.00" />

<style lang="postcss">
	.table-header {
		@apply text-xl font-bold leading-snug;
	}
</style>
