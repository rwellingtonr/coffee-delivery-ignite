import * as Styles from "./styles"
import { coffeeElements } from "~/repository/coffee"
import { Buy } from "../Buy"
import { useShoppingCart } from "~/context/ShoppingCart"

export function CoffeeList() {
	const { handleBuyCoffee } = useShoppingCart()

	const handleAddToShippingCart = (id: number) => {
		const coffee = coffeeElements.find((coffee) => coffee.id === id)
		if (coffee) {
			handleBuyCoffee({
				...coffee,
				quantity: 1,
			})
		}
	}

	return (
		<>
			<Styles.MainContainer>
				<h2>Nosso Café</h2>

				<Styles.CardGridContainer>
					{coffeeElements.map((coffee) => (
						<Styles.CardContainer key={coffee.id}>
							<img src={coffee.coffeeImage} alt="..." />
							<div className="coffeeTypes">
								{coffee.type.map((type) => (
									<span key={type}>{type}</span>
								))}
							</div>
							<h5 className="title">{coffee.title}</h5>
							<p className="description">{coffee.description}</p>

							<Buy id={coffee.id} handleBought={handleAddToShippingCart} price={coffee.price} />
						</Styles.CardContainer>
					))}
				</Styles.CardGridContainer>
			</Styles.MainContainer>
		</>
	)
}
