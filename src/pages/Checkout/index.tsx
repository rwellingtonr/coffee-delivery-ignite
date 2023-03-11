import { AddressForm } from "./components/AddressForm"
import { CoffeeCard } from "./components/CoffeeCard"
import { PaymentMethod } from "./components/PaymentMethod"
import { FormProvider, useForm } from "react-hook-form"
import * as Styled from "./styles"
import { zodResolver } from "@hookform/resolvers/zod"
import { AddressSchema, AddressSchemaType } from "./validation"

const formInitialValues = {
	additional: "",
	address: "",
	cep: "",
	city: "",
	neighborhood: "",
	number: "",
	state: "",
}

export function Checkout() {
	const hookFormProps = useForm<AddressSchemaType>({
		resolver: zodResolver(AddressSchema),
		defaultValues: formInitialValues,
	})

	return (
		<Styled.FormCheckoutContainer>
			<FormProvider {...hookFormProps}>
				<Styled.CheckoutContainer>
					<h5>Complete seu pedido</h5>
					<AddressForm />
					<PaymentMethod />
				</Styled.CheckoutContainer>
				<Styled.CheckoutContainer>
					<h5>Cafés selecionados</h5>
					<CoffeeCard />
				</Styled.CheckoutContainer>
			</FormProvider>
		</Styled.FormCheckoutContainer>
	)
}
