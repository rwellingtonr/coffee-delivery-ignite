import { useState } from "react"
import { Counter } from "~/components/Counter"
import { ShoppingCart } from "~/components/ShoppingCart"

import * as Styles from "./styles"

type BuyProps = {
	id: number
	price: string
	handleBought: (id: number, quantity: number) => void
}

export function Buy({ handleBought, price, id }: BuyProps) {
	const [counter, setCounter] = useState(1)

	return (
		<Styles.CardFooter>
			<Styles.TotalPriceWrapper>
				<span>R$</span>
				<h5>{price}</h5>
			</Styles.TotalPriceWrapper>

			<Styles.CounterShippingCart>
				<Counter currentValue={counter} handleCounter={setCounter} />
				<ShoppingCart variant="secondary" onClick={() => handleBought(id, counter)} />
			</Styles.CounterShippingCart>
		</Styles.CardFooter>
	)
}
