import { ReactNode } from "react"
import type { CoffeeElements } from "~/interface/coffee"

export type ShoppingCartProviderProps = {
	children: ReactNode
}

export type CoffeeState = CoffeeElements & {
	quantity: number
}
type CoffeeOrder = {
	id: number
	quantity: number
}
export type ShoppingReducerState = {
	coffee: CoffeeState[]
	coffeeOrder: CoffeeOrder[]
}

export type ShoppingCartContextProps = {
	handleBuyCoffee: (coffee: CoffeeState) => void
	handleCleanShoppingCart: () => void
	handleRemoveFromCart: (id: number) => void
	handleSetPaymentMethod: (method: string) => void
	handleChangeQuantity: (id: number, quantity: number) => void
	shoppingCart: ShoppingReducerState
	itemsPrice: string
	deliveryCost: string
	totalCost: string
	paymentMethod: string
}
