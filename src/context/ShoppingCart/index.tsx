import { createContext, useContext, useEffect, useReducer, useState } from "react"
import {
	addToShoppingCart,
	changeQuantity,
	cleanShoppingCart,
	removeFromShoppingCart,
} from "~/redux/actions"
import { shoppingReducer } from "~/redux/reducer"
import type { CoffeeState, ShoppingCartContextProps, ShoppingCartProviderProps } from "./types"

const ShoppingCartContext = createContext({} as ShoppingCartContextProps)

export const useShoppingCart = () => useContext(ShoppingCartContext)

export function ShippingCartProvider({ children }: ShoppingCartProviderProps) {
	const [paymentMethod, setPaymentMethod] = useState<string>("")
	const [shoppingCart, dispatch] = useReducer(shoppingReducer, [], () => {
		const storageStateAsJson = sessionStorage.getItem("@ignite-coffee-v1.0.0")
		if (storageStateAsJson) {
			return JSON.parse(storageStateAsJson)
		}
		return {
			coffee: [],
			coffeeOrder: [],
		}
	})

	useEffect(() => {
		if (shoppingCart) {
			const stringifyCart = JSON.stringify(shoppingCart)
			sessionStorage.setItem("@ignite-coffee-v1.0.0", stringifyCart)
		}
	}, [shoppingCart])

	const priceOfAllItens = shoppingCart.coffee.reduce((acc, coffee) => {
		const priceToNumber = +coffee.price.replace(",", ".")
		return acc + priceToNumber
	}, 0)

	const shippingPrice = priceOfAllItens * shoppingCart.coffee?.length * 0.035

	const totalPrice = shippingPrice + priceOfAllItens

	const [intOfPriceItens, fracOfPriceItens] = String(priceOfAllItens).split(".")
	const centsOfItensPrice = fracOfPriceItens?.padEnd(2, "0")
	const itemsPrice = `${intOfPriceItens},${centsOfItensPrice}`

	const [intDelivery, floatDelivery] = shippingPrice.toString().split(".")
	const centsOfDelivery = floatDelivery?.padEnd(2, "0")?.slice(0, 2)
	const deliveryCost = `${intDelivery},${centsOfDelivery}`

	const [intTotal, floatTotal] = totalPrice.toString().split(".")
	const centsOfTotal = floatTotal?.padEnd(2, "0")?.slice(0, 2)
	const totalCost = `${intTotal},${centsOfTotal}`

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

	const handleSetPaymentMethod = (method: string) => {
		setPaymentMethod(method)
	}

	const handleChangeQuantity = (id: number, quantity: number) => {
		console.log(quantity)

		dispatch(changeQuantity(id, quantity))
	}

	return (
		<ShoppingCartContext.Provider
			value={{
				paymentMethod,
				handleChangeQuantity,
				shoppingCart,
				handleBuyCoffee,
				handleCleanShoppingCart,
				handleSetPaymentMethod,
				handleRemoveFromCart,
				deliveryCost,
				itemsPrice,
				totalCost,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	)
}
