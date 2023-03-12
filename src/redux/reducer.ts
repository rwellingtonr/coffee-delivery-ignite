import { ActionProps, ShoppingCartEnum } from "./actions"
import { produce } from "immer"
import type { ShoppingReducerState } from "~/context/ShoppingCart/types"

export const shoppingReducer = (
	state: ShoppingReducerState,
	{ type, payload }: ActionProps,
): ShoppingReducerState => {
	switch (type) {
		case ShoppingCartEnum.ADD_TO_SHOPPING_CART: {
			const coffeeOrder = state.coffeeOrder.find((coffee) => coffee.id === payload.coffee.id)
			return produce(state, (draft) => {
				const toAdd = {
					...payload.coffee,
					quantity: coffeeOrder?.quantity ?? 1,
				}

				console.log(toAdd)

				draft.coffee.push(toAdd)
			})
		}
		case ShoppingCartEnum.REMOVE_FROM_SHOPPING_CART: {
			const filteredCoffee = state.coffee.filter((coffee) => coffee.id !== payload.id)
			return produce(state, (draft) => {
				draft.coffee = filteredCoffee
			})
		}
		case ShoppingCartEnum.CLEAN_SHOPPING_CART: {
			return produce(state, (draft) => {
				draft.coffee = []
			})
		}

		case ShoppingCartEnum.CHANGE_QUANTITY: {
			const index = state?.coffeeOrder?.findIndex((coffee) => coffee.id === payload.id)
			return produce(state, (draft) => {
				if (index >= 0) {
					console.log(`Index: ${index}, quantidade ${payload.quantity}`)
					draft.coffeeOrder[index].quantity = payload.quantity
					return
				}
				if (!index) {
					draft.coffeeOrder = []
				}
				draft.coffeeOrder.push({ quantity: 1, id: payload.id })
			})
		}

		default: {
			return state
		}
	}
}
