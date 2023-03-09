import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react"
import * as Styled from "./styles"

export function PaymentMethod() {
	return (
		<Styled.PaymentContainer>
			<div>
				<CurrencyDollar weight="regular" size={22} />
				<div>
					<p>Endereço de Entrega</p>
					<p>Informe o endereço onde deseja receber seu pedido</p>
				</div>
			</div>
			<div>
				<button type="button">
					<CreditCard size={16} />
					<p>Cartão de crédito</p>
				</button>
				<button type="button">
					<Bank size={16} />
					<p>cartão de débito</p>
				</button>
				<button type="button">
					<Money size={16} />
					<p>dinheiro</p>
				</button>
			</div>
		</Styled.PaymentContainer>
	)
}
