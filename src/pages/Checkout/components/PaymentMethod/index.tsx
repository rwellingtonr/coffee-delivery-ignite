import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react"

export function PaymentMethod() {
	return (
		<section>
			<div>
				<CurrencyDollar weight="regular" size={22} />
				<div>
					<p>Endereço de Entrega</p>
					<p>Informe o endereço onde deseja receber seu pedido</p>
				</div>
			</div>
			<div>
				<button>
					<CreditCard size={16} />
					<p>Cartão de crédito</p>
				</button>
				<button>
					<Bank size={16} />
					<p>cartão de débito</p>
				</button>
				<button>
					<Money size={16} />
					<p>dinheiro</p>
				</button>
			</div>
		</section>
	)
}
