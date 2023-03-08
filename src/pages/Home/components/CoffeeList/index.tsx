import { ShippingCart } from "~/components/ShippingCart"
import { coffeeElements } from "./elements"
import {
	CardContainer,
	CardGridContainer,
	MainContainer,
	CardFooter,
	TotalPriceWrapper,
	CounterShippingCart,
} from "./styles"

export function CoffeeList() {
	return (
		<>
			<MainContainer>
				<h2>Nosso Café</h2>

				<CardGridContainer>
					{coffeeElements.map((coffee) => (
						<CardContainer key={coffee.id}>
							<img src={coffee.coffeeImage} alt="..." />
							<div className="coffeeTypes">
								{coffee.type.map((type) => (
									<span key={type}>{type}</span>
								))}
							</div>
							<h5 className="title">{coffee.title}</h5>
							<p className="description">{coffee.description}</p>

							<CardFooter>
								<TotalPriceWrapper>
									<span>R$</span>
									<h5>9,90</h5>
								</TotalPriceWrapper>

								<CounterShippingCart>
									<p>Counter</p>
									<ShippingCart variant="secondary" />
								</CounterShippingCart>
							</CardFooter>
						</CardContainer>
					))}
				</CardGridContainer>
			</MainContainer>
		</>
	)
}
