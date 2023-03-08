import { ReactNode } from "react"
import type { CoffeeElements } from "~/interface/coffee"

export type ShoppingCartProviderProps = {
	children: ReactNode
}

export type CoffeeState = CoffeeElements & {
	quantity: number
}
export type ShoppingReducerState = {
	coffee: CoffeeState[]
}

export type ShoppingCartContextProps = {
	handleBuyCoffee: (coffee: CoffeeState) => void
	handleCleanShoppingCart: () => void
	handleRemoveFromCart: (id: number) => void
}
