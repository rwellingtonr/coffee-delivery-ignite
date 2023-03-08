import { AddressForm } from "./components/AddressForm"
import { CoffeeCard } from "./components/CoffeeCard"
import { PaymentMethod } from "./components/PaymentMethod"

export function Checkout() {
	return (
		<main>
			<div>
				<h5>Complete seu pedido</h5>
				<AddressForm />
				<PaymentMethod />
			</div>
			<div>
				<h5>Cafés selecionados</h5>
				<CoffeeCard />
			</div>
		</main>
	)
}
