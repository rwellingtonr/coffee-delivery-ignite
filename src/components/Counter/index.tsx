import { Minus, Plus } from "phosphor-react"
import { useState } from "react"
import { useShoppingCart } from "~/context/ShoppingCart"
import { CounterContainer } from "./styles"

type CounterProps = {
	id: number
}

export function Counter({ id }: CounterProps) {
	const { shoppingCart } = useShoppingCart()
	const [counter, setCounter] = useState(() => {
		const order = shoppingCart.coffeeOrder.find((order) => order.id === id)
		return order ? order.quantity : 1
	})

	const { handleChangeQuantity } = useShoppingCart()

	const increaseCounter = () => {
		if (counter < 10) {
			handleChangeQuantity(id, counter + 1)
			setCounter((prev) => prev + 1)
		}
	}
	const decreaseCounter = () => {
		if (counter > 1) {
			handleChangeQuantity(id, counter - 1)
			setCounter((prev) => prev - 1)
		}
	}

	return (
		<CounterContainer>
			<Minus size={16} weight="bold" onClick={decreaseCounter} />
			<span>{counter}</span>
			<Plus size={16} weight="bold" onClick={increaseCounter} />
		</CounterContainer>
	)
}
