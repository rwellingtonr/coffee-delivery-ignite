import { Minus, Plus } from "phosphor-react"
import { useState } from "react"
import { CounterContainer } from "./styles"

export function Counter() {
	const [count, setCount] = useState(1)

	const increaseCounter = () => {
		if (count < 10) {
			setCount((prev) => prev + 1)
		}
	}
	const decreaseCounter = () => {
		if (count > 1) {
			setCount((prev) => prev - 1)
		}
	}

	return (
		<CounterContainer>
			<Minus size={16} weight="bold" onClick={decreaseCounter} />
			<span>{count}</span>
			<Plus size={16} weight="bold" onClick={increaseCounter} />
		</CounterContainer>
	)
}
