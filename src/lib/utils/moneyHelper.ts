import { invoices } from "$lib/stores/invoiceStore";

export const sumLineItems = (lineItems: LineItem[] | undefined): number => {
    if (!lineItems) return 0
    return lineItems.reduce((prevValue, curValue) => prevValue + curValue.amount, 0)
}

export const centsToDollars = (cents: number): string => {
    const dollars = cents / 100;
    const addDecimals = twoDecimals(dollars);
    return addThousandsSeparator(addDecimals);
}

export const twoDecimals = (myNum: number): string => {
    return myNum.toFixed(2)
}

export const addThousandsSeparator = (myNum: string): string => {
    return myNum.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export const sumInvoices = (invoices: Invoice[] | undefined): number => {
    if (!invoices) return 0
    return invoices.reduce((prevValue, curValue) => {
        const invoiceSum = sumLineItems(curValue.lineItems);
        return prevValue + invoiceSum;
    }, 0)
}