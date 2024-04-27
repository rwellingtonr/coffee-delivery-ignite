import { AddressForm } from './components/AddressForm'
import { CoffeeCard } from './components/CoffeeCard'
import { PaymentMethod } from './components/PaymentMethod'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import * as Styled from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import { AddressSchema, AddressSchemaType } from './validation'
import { submitOrder } from '~/repository/order'
import { Order } from '~/interface/order'
import { useNavigate } from 'react-router-dom'
import { useShoppingCart } from '~/context/ShoppingCart'
import { useState } from 'react'

const formInitialValues = {
	additional: '',
	address: '',
	cep: '',
	city: '',
	neighborhood: '',
	number: '',
	state: '',
}

export function Checkout() {
	const navigate = useNavigate()
	const {
		itemsPrice,
		totalCost,
		deliveryCost,
		shoppingCart,
		paymentMethod,
		handleCleanShoppingCart,
	} = useShoppingCart()

	const hookFormProps = useForm<AddressSchemaType>({
		resolver: zodResolver(AddressSchema),
		defaultValues: formInitialValues,
	})

	const handleSubmitOrder: SubmitHandler<AddressSchemaType> = async (props) => {
		const order: Order = {
			coffeeId: shoppingCart.coffee.map((coffee) => coffee.id),
			address: {
				...props,
			},
			payment: {
				deliveryCost,
				productsPrice: itemsPrice,
				totalPrice: totalCost,
				method: paymentMethod,
			},
		}
		await submitOrder(order)

		handleCleanShoppingCart()
		navigate('/delivery', { state: order })
	}

	const {
		formState: { isSubmitting },
	} = hookFormProps

	return (
		<Styled.FormCheckoutContainer onSubmit={hookFormProps.handleSubmit(handleSubmitOrder)}>
			<FormProvider {...hookFormProps}>
				<Styled.CheckoutContainer>
					<h5>Complete seu pedido</h5>
					<AddressForm />
					<PaymentMethod />
				</Styled.CheckoutContainer>
				<Styled.CheckoutContainer>
					<h5>Cafés selecionados</h5>
					<CoffeeCard isSubmitting={isSubmitting} />
				</Styled.CheckoutContainer>
			</FormProvider>
		</Styled.FormCheckoutContainer>
	)
}
