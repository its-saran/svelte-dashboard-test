<script lang="ts">
	import { invoices, loadInvoices } from '$lib/stores/invoiceStore';
	import { onMount } from 'svelte';
	import Search from '$lib/components/Search.svelte';
	import CircledAmount from '$lib/components/circledAmount.svelte';
	import InvoiceRow from './InvoiceRow.svelte';

	onMount(() => {
		loadInvoices();
		console.log($invoices);
	});
</script>

<svelte:head>
	<title>Invoices | The Dollar</title>
</svelte:head>

<div
	class="flex flex-col-reverse md:flex-row items-start justify-between md:items-center mb-7 lg:mb-10 gap-y-5 md:gap-y-4"
>
	<!-- Search field -->
	<Search />

	<!-- New invoice Button -->
	<div>
		<button
			class="relative translate-y-0 whitespace-nowrap rounded-lg bg-lavenderIndigo px-5 py-2 font-sansSerif text-base font-black text-white shadow-colored transition-all hover:-translate-y-2 hover:shadow-coloredHover lg:px-10 lg:py-3 lg:text-xl"
			>+ Invoice</button
		>
	</div>
</div>

<!-- List of invoices -->
<div>
	<!-- header -->
	<div class="table-header invoice-table text-violet-700 hidden lg:grid">
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
	{#each $invoices as invoice}
		<InvoiceRow {invoice} />
	{/each}
</div>

<CircledAmount label="Total" amount="$1,500.00" />

<style lang="postcss">
	.table-header {
		@apply text-xl font-bold leading-snug;
	}
</style>
