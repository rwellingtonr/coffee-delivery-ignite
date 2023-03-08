import { Minus, Plus } from "phosphor-react"
import { useState } from "react"
import { CounterContainer } from "./styles"

type CounterProps = {
	handleCounter: (num: number) => void
	currentValue: number
}

export function Counter({ handleCounter, currentValue = 1 }: CounterProps) {
	const increaseCounter = () => {
		if (currentValue < 10) {
			handleCounter(currentValue + 1)
		}
	}
	const decreaseCounter = () => {
		if (currentValue > 1) {
			handleCounter(currentValue - 1)
		}
	}

	return (
		<CounterContainer>
			<Minus size={16} weight="bold" onClick={decreaseCounter} />
			<span>{currentValue}</span>
			<Plus size={16} weight="bold" onClick={increaseCounter} />
		</CounterContainer>
	)
}
