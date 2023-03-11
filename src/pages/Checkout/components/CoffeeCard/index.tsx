import { useShoppingCart } from "~/context/ShoppingCart"
import { ItemToCheckout } from "../ItemToCheckout"
import * as Styled from "./styles"

export function CoffeeCard() {
	const { shoppingCart } = useShoppingCart()

	const priceOfAllItens = shoppingCart.coffee.reduce((acc, coffee) => {
		const priceToNumber = +coffee.price.replace(",", ".")
		return acc + priceToNumber
	}, 0)

	const shippingPrice = priceOfAllItens * shoppingCart.coffee?.length * 0.035

	const totalPrice = shippingPrice + priceOfAllItens

	const priceOfAllItensString = priceOfAllItens.toString().replace(".", ",")
	const shippingPriceString = shippingPrice.toString().replace(".", ",")
	const totalPriceString = totalPrice.toString().replace(".", ",")

	return (
		<Styled.CoffeeCardContainer>
			<ItemToCheckout />

			<Styled.TotalPriceContainer>
				<dt>
					<p className="order-information">Total de itens</p>
					<p className="order-value">{`R$ ${priceOfAllItensString}`}</p>
				</dt>
				<dt>
					<p className="order-information">Entrega</p>
					<p className="order-value">{`R$ ${shippingPriceString}`}</p>
				</dt>
				<dt>
					<span>Total</span>
					<span>{`R$ ${totalPriceString}`}</span>
				</dt>
			</Styled.TotalPriceContainer>
			<Styled.ConfirmOrderButton type="submit">Confirmar pedido</Styled.ConfirmOrderButton>
		</Styled.CoffeeCardContainer>
	)
}
