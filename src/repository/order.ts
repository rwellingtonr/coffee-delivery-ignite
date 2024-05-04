import type { Order } from '~/interface/order'

export function submitOrder(order: Order) {
	console.log(order)
	return new Promise((resolve) => setTimeout(resolve, 1000))
}
