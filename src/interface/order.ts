import type { AddressSchemaType } from "~/pages/Checkout/validation"

type Payment = {
	method: string
	productsPrice: string
	deliveryCost: string
	totalPrice: string
}

export type Order = {
	coffeeId: number[]
	address: AddressSchemaType
	payment: Payment
}
