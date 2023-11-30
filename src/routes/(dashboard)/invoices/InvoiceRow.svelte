<script lang="ts">
	import Tag from '$lib/components/Tag.svelte';
	import View from '$lib/components/icons/View.svelte';
	import ThreeDots from '$lib/components/icons/ThreeDots.svelte';
	import { sumLineItems } from '$lib/utils/moneyHelper';

	export let invoice: Invoice;
</script>

<div
	class="invoice-table invoice-row items-center rounded-lg bg-white py-3 shadow-tableRow lg:py-6"
>
	<div class="status"><Tag className="ml-auto lg:ml-0" label={invoice.invoiceStatus} /></div>
	<div class="text-sm lg:text-lg dueDate">{invoice.dueDate}</div>
	<div class="text-sm lg:text-lg invoiceNumber">{invoice.invoiceNumber}</div>
	<div class="text-base lg:text-xl font-bold clientName">{invoice.client.name}</div>
	<div class="text-sm lg:text-lg font-mono font-bold amount text-right">
		{sumLineItems(invoice.lineItems)}
	</div>
	<div class="text-sm lg:text-lg center viewButton hidden lg:block">
		<a href="" class="text-pastelPurple hover:text-daisyBush"><View /></a>
	</div>
	<div class="text-sm lg:text-lg center moreButton hidden lg:block">
		<button class="text-pastelPurple hover:text-daisyBush"><ThreeDots /></button>
	</div>
</div>

<style class="postcss">
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
