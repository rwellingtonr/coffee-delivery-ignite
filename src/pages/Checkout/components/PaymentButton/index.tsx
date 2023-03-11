import { paymentMethods } from "./elements"
import * as Styled from "./styles"

export function PaymentButton() {
	return (
		<Styled.PaymentContainer>
			{paymentMethods.map((method) => (
				<Styled.PaymentButtonWrapper type="button" key={method.value}>
					{method.icon}
					<p>{method.label}</p>
				</Styled.PaymentButtonWrapper>
			))}
		</Styled.PaymentContainer>
	)
}
