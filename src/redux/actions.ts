import { CoffeeState } from "~/context/ShoppingCart/types"

export type ActionProps = {
	type: ShoppingCartEnum
	payload: any
}

export enum ShoppingCartEnum {
	ADD_TO_SHOPPING_CART = "ADD_TO_SHIPPING_CART",
	REMOVE_FROM_SHOPPING_CART = "REMOVE_FROM_SHOPPING_CART",
	CLEAN_SHOPPING_CART = "CLEAN_SHOPPING_CART",
}

export const addToShoppingCart = (coffee: CoffeeState): ActionProps => {
	const action = {
		type: ShoppingCartEnum.ADD_TO_SHOPPING_CART,
		payload: { coffee },
	}
	return action
}
export const removeFromShoppingCart = (id: number): ActionProps => {
	const action = {
		type: ShoppingCartEnum.REMOVE_FROM_SHOPPING_CART,
		payload: { id },
	}
	return action
}
export const cleanShoppingCart = (): ActionProps => {
	const action = {
		type: ShoppingCartEnum.CLEAN_SHOPPING_CART,
		payload: null,
	}
	return action
}
