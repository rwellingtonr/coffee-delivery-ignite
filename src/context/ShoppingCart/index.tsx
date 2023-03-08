import { createContext, useContext, useEffect, useReducer } from "react"
import { addToShoppingCart, cleanShoppingCart, removeFromShoppingCart } from "~/redux/actions"
import { shoppingReducer } from "~/redux/reducer"
import type { CoffeeState, ShoppingCartContextProps, ShoppingCartProviderProps } from "./types"

const ShoppingCartContext = createContext({} as ShoppingCartContextProps)

export const useShoppingCart = () => useContext(ShoppingCartContext)

export function ShippingCartProvider({ children }: ShoppingCartProviderProps) {
	const [shoppingCart, dispatch] = useReducer(shoppingReducer, [], () => {
		const storageStateAsJson = sessionStorage.getItem("@ignite-coffee-v1.0.0")
		if (storageStateAsJson) {
			return JSON.parse(storageStateAsJson)
		}
		return {
			coffee: [],
		}
	})

	useEffect(() => {
		if (shoppingCart) {
			const stringifyCart = JSON.stringify(shoppingCart)
			sessionStorage.setItem("@ignite-coffee-v1.0.0", stringifyCart)
		}
	}, [shoppingCart])

	const handleBuyCoffee = (coffee: CoffeeState) => {
		console.log("Added", coffee)

		dispatch(addToShoppingCart(coffee))
	}

	const handleCleanShoppingCart = () => {
		dispatch(cleanShoppingCart())
	}
	const handleRemoveFromCart = (id: number) => {
		dispatch(removeFromShoppingCart(id))
	}

	return (
		<ShoppingCartContext.Provider
			value={{ shoppingCart, handleBuyCoffee, handleCleanShoppingCart, handleRemoveFromCart }}
		>
			{children}
		</ShoppingCartContext.Provider>
	)
}
