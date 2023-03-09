import { AddressForm } from "./components/AddressForm"
import { CoffeeCard } from "./components/CoffeeCard"
import { PaymentMethod } from "./components/PaymentMethod"
import * as Styled from "./styles"

export function Checkout() {
	return (
		<Styled.MainCheckoutContainer>
			<Styled.CheckoutInformationContainer>
				<h5>Complete seu pedido</h5>
				<AddressForm />
				<PaymentMethod />
			</Styled.CheckoutInformationContainer>
			<div>
				<h5>Cafés selecionados</h5>
				<CoffeeCard />
			</div>
		</Styled.MainCheckoutContainer>
	)
}
