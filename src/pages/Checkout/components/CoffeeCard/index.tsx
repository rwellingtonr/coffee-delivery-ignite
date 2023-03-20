import { useFormContext } from "react-hook-form"
import { Loader } from "~/components/Loader"
import { useShoppingCart } from "~/context/ShoppingCart"
import type { AddressSchemaType } from "../../validation"
import { ItemToCheckout } from "../ItemToCheckout"
import * as Styled from "./styles"

type CoffeeCardProps = {
	isSubmitting: boolean
}

export function CoffeeCard({ isSubmitting }: CoffeeCardProps) {
	const { itemsPrice, totalCost, paymentMethod, deliveryCost } = useShoppingCart()

	const { watch } = useFormContext<AddressSchemaType>()
	const cep = watch("cep")

	const isSubmitButtonEnabled = !!paymentMethod && !!cep

	return (
		<Styled.CoffeeCardContainer>
			<ItemToCheckout />

			<Styled.TotalPriceContainer>
				<dt>
					<p className="order-information">Total de itens</p>
					<p className="order-value">{`R$ ${itemsPrice}`}</p>
				</dt>
				<dt>
					<p className="order-information">Entrega</p>
					<p className="order-value">{`R$ ${deliveryCost}`}</p>
				</dt>
				<dt>
					<span>Total</span>
					<span>{`R$ ${totalCost}`}</span>
				</dt>
			</Styled.TotalPriceContainer>
			{isSubmitting ? (
				<Loader size={2} />
			) : (
				<Styled.ConfirmOrderButton type="submit" disabled={!isSubmitButtonEnabled}>
					Confirmar pedido
				</Styled.ConfirmOrderButton>
			)}
		</Styled.CoffeeCardContainer>
	)
}
