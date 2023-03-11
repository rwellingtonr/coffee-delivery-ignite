import { CurrencyDollar } from "phosphor-react"
import { PaymentButton } from "../PaymentButton"
import * as Styled from "./styles"

export function PaymentMethod() {
	return (
		<Styled.PaymentContainer>
			<Styled.PaymentWrapper>
				<Styled.PaymentHeading>
					<CurrencyDollar weight="regular" size={22} />
					<div className="payment-information">
						<p className="payment-title">Endereço de Entrega</p>
						<p className="payment-description">
							{" "}
							Informe o endereço onde deseja receber seu pedido
						</p>
					</div>
				</Styled.PaymentHeading>

				<PaymentButton />
			</Styled.PaymentWrapper>
		</Styled.PaymentContainer>
	)
}
