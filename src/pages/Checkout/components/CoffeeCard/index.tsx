import { ItemToCheckout } from "../ItemToCheckout"

export function CoffeeCard() {
	return (
		<section>
			<ItemToCheckout />

			<div>
				<div>
					<p>Total de itens</p>
					<p>R$ xx,xx</p>
				</div>
				<div>
					<p>Entrega</p>
					<p>R$ xx,xx</p>
				</div>
				<div>
					<p>Total</p>
					<p>R$ xx,xx</p>
				</div>
			</div>
			<button type="button">Confirmar pedido</button>
		</section>
	)
}
