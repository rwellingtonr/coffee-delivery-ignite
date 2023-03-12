import { useShoppingCart } from "~/context/ShoppingCart"
import { paymentMethods } from "./elements"
import * as Styled from "./styles"

export function PaymentButton() {
	const { handleSetPaymentMethod } = useShoppingCart()

	return (
		<Styled.PaymentContainer>
			{paymentMethods.map((method) => (
				<Styled.PaymentButtonWrapper
					type="button"
					key={method.value}
					onClick={() => handleSetPaymentMethod(method.value)}
				>
					{method.icon}
					<p>{method.label}</p>
				</Styled.PaymentButtonWrapper>
			))}
		</Styled.PaymentContainer>
	)
}
