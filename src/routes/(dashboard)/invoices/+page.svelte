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

<div
	class="flex flex-col-reverse md:flex-row items-start justify-between md:items-center mb-7 lg:mb-16 gap-y-5 md:gap-y-4"
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
	<div
		class="invoice-table invoice-row items-center rounded-lg bg-white py-3 shadow-tableRow lg:py-6"
	>
		<div class="status"><Tag className="ml-auto lg:ml-0" label="draft" /></div>
		<div class="text-sm lg:text-lg dueDate">8/1/2023</div>
		<div class="text-sm lg:text-lg invoiceNumber">12345</div>
		<div class="text-base lg:text-xl font-bold clientName">Compressed.fm</div>
		<div class="text-sm lg:text-lg font-mono font-bold amount text-right">$500.00</div>
		<div class="text-sm lg:text-lg center viewButton hidden lg:block">
			<a href="" class="text-pastelPurple hover:text-daisyBush"><View /></a>
		</div>
		<div class="text-sm lg:text-lg center moreButton hidden lg:block">
			<button class="text-pastelPurple hover:text-daisyBush"><ThreeDots /></button>
		</div>
	</div>
</div>

<CircledAmount label="Total" amount="$1,500.00" />

<style lang="postcss">
	.table-header {
		@apply text-xl font-bold leading-snug;
	}

	.invoice-row {
		grid-template-areas:
			'invoiceNumber invoiceNumber'
			'clientName amount'
			'dueDate status';
	}

	@media (min-width: 1024px) {
		.invoice-row {
			grid-template-areas: 'status dueDate invoiceNumber clientName amount viewButton moreButton';
		}
	}

	.invoice-row .status {
		grid-area: status;
	}

	.invoice-row .dueDate {
		grid-area: dueDate;
	}

	.invoice-row .invoiceNumber {
		grid-area: invoiceNumber;
	}

	.invoice-row .clientName {
		grid-area: clientName;
	}

	.invoice-row .amount {
		grid-area: amount;
	}

	.invoice-row .viewButton {
		grid-area: viewButton;
	}

	.invoice-row .moreButton {
		grid-area: moreButton;
	}
</style>
