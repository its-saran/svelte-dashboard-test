<script lang="ts">
	import Tag from '$lib/components/Tag.svelte';
	import View from '$lib/components/icons/View.svelte';
	import ThreeDots from '$lib/components/icons/ThreeDots.svelte';
	import { sumLineItems, centsToDollars } from '$lib/utils/moneyHelper';
	import { convertDate, isLate } from '$lib/utils/dateHelper';

	export let invoice: Invoice;

	const getInvoiceLabel = () => {
		if (invoice.invoiceStatus === 'draft') {
			return 'draft';
		} else if (invoice.invoiceStatus === 'sent' && !isLate(invoice.dueDate)) {
			return 'sent';
		} else if (invoice.invoiceStatus === 'sent' && isLate(invoice.dueDate)) {
			return 'late';
		} else if (invoice.invoiceStatus === 'paid') {
			return 'paid';
		}
	};
</script>

<div
	class="invoice-table invoice-row items-center rounded-lg bg-white py-3 shadow-tableRow lg:py-6"
>
	<div class="status"><Tag className="ml-auto lg:ml-0" label={getInvoiceLabel()} /></div>
	<div class="dueDate text-sm lg:text-lg">{convertDate(invoice.dueDate)}</div>
	<div class="invoiceNumber text-sm lg:text-lg">{invoice.invoiceNumber}</div>
	<div class="clientName text-base lg:text-xl font-bold whitespace-nowrap truncate">
		{invoice.client.name}
	</div>
	<div class="amount text-sm lg:text-lg font-mono font-bold text-right">
		${centsToDollars(sumLineItems(invoice.lineItems))}
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
