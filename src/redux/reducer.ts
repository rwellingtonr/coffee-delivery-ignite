import { ActionProps, ShoppingCartEnum } from "./actions"
import { produce } from "immer"
import type { ShoppingReducerState } from "~/context/ShoppingCart/types"

export const shoppingReducer = (
	state: ShoppingReducerState,
	{ type, payload }: ActionProps,
): ShoppingReducerState => {
	switch (type) {
		case ShoppingCartEnum.ADD_TO_SHOPPING_CART: {
			return produce(state, (draft) => {
				draft.coffee.push(payload.coffee)
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

		default: {
			return state
		}
	}
}
