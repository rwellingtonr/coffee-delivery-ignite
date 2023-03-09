import { MapPin } from "phosphor-react"
import { useForm } from "react-hook-form"
import { InputText } from "~/components/InputText"
import { AddressSchema, AddressSchemaType } from "./validation"
import { zodResolver } from "@hookform/resolvers/zod"
import * as Styled from "./styles"
import { useCepAddress } from "~/hook/useCepAddress"

export function AddressForm() {
	const { register, watch } = useForm<AddressSchemaType>({
		resolver: zodResolver(AddressSchema),
	})

	const cep = watch("cep")
	const { address, isCepFilled, isLoading } = useCepAddress(cep)

	return (
		<Styled.CheckoutContainer>
			<Styled.ContentWrapper>
				<Styled.CheckoutHeading>
					<MapPin weight="regular" size={22} />
					<div className="address-information">
						<p className="address-title">Endereço de Entrega</p>
						<p className="address-description">Informe o endereço onde deseja receber seu pedido</p>
					</div>
				</Styled.CheckoutHeading>
				<Styled.FormContainer>
					<div>
						<Styled.InputMaskWrapper
							mask={"99999-999"}
							maskChar={null}
							alwaysShowMask={true}
							placeholder="99999-999"
							{...register("cep")}
						/>
						{isLoading && <p>Carregando...</p>}
					</div>
					<InputText
						isOptional={true}
						placeholder="Rua | Avenida"
						disabled={!isCepFilled}
						{...register("address")}
						defaultValue={address?.address}
					/>
					<div className="additional-address">
						<InputText
							isOptional={false}
							placeholder="Número"
							disabled={!isCepFilled}
							{...register("number")}
						/>
						<InputText
							isOptional={true}
							placeholder="Complemento"
							disabled={!isCepFilled}
							{...register("additional")}
							defaultValue={address?.additional}
						/>
					</div>
					<div className="city-address">
						<InputText
							isOptional={false}
							placeholder="Bairro"
							disabled={!isCepFilled}
							{...register("neighborhood")}
							defaultValue={address?.additional}
						/>
						<InputText
							isOptional={false}
							placeholder="Cidade"
							disabled={!isCepFilled}
							{...register("city")}
							defaultValue={address?.city}
						/>
						<InputText
							isOptional={false}
							placeholder="UF"
							disabled={!isCepFilled}
							{...register("state")}
							defaultValue={address?.state}
						/>
					</div>
				</Styled.FormContainer>
			</Styled.ContentWrapper>
		</Styled.CheckoutContainer>
	)
}
