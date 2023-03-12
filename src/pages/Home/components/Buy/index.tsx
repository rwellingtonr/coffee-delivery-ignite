import { Counter } from "~/components/Counter"
import { ShoppingCart } from "~/components/ShoppingCart"

import * as Styles from "./styles"

type BuyProps = {
	id: number
	price: string
	handleBought: (id: number) => void
}

export function Buy({ handleBought, price, id }: BuyProps) {
	return (
		<Styles.CardFooter>
			<Styles.TotalPriceWrapper>
				<span>R$</span>
				<h5>{price}</h5>
			</Styles.TotalPriceWrapper>

			<Styles.CounterShippingCart>
				<Counter id={id} />
				<ShoppingCart variant="secondary" onClick={() => handleBought(id)} />
			</Styles.CounterShippingCart>
		</Styles.CardFooter>
	)
}
