import { Bank, CreditCard, Money } from 'phosphor-react'

type PaymentMethodProps = {
	label: string
	value: string
	icon: JSX.Element
}

export const paymentMethods: PaymentMethodProps[] = [
	{
		label: 'Cartão de crédito',
		value: 'cartao-de-credito',
		icon: <CreditCard size={16} />,
	},
	{
		icon: <Bank size={16} />,
		label: 'cartão de débito',
		value: 'cartao-de-debito',
	},
	{
		icon: <Money size={16} />,
		label: 'dinheiro',
		value: 'dinheiro',
	},
]
