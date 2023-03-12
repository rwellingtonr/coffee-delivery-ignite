import { MapPin } from "phosphor-react"
import { Controller, useFormContext } from "react-hook-form"
import { InputText } from "~/components/InputText"
import * as Styled from "./styles"
import { useCepAddress } from "~/hook/useCepAddress"
import type { AddressSchemaType } from "../../validation"
import { useEffect } from "react"

export function AddressForm() {
	const {
		register,
		watch,
		setValue,
		formState: { errors },
	} = useFormContext<AddressSchemaType>()

	const cep = watch("cep")
	console.log(cep)

	const { address, isCepFilled, isLoading } = useCepAddress(cep)

	useEffect(() => {
		if (address && !isLoading) {
			Object.entries(address).forEach(([key, valeu]) => {
				setValue(`${key}` as keyof AddressSchemaType, valeu)
			})
		}
	}, [address, isLoading])

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
				<Styled.InputsContainer>
					<div>
						<Styled.InputMaskWrapper
							mask={"99999-999"}
							maskChar={null}
							maskPlaceholder={"_"}
							alwaysShowMask={true}
							placeholder="99999-999"
							{...register("cep")}
						/>
					</div>
					{isLoading ? (
						<p>Buscando...</p>
					) : (
						<>
							<InputText
								error={!!errors.address}
								required={true}
								placeholder="Endereço"
								disabled={!isCepFilled}
								label="address"
								register={register}
							/>
							<div className="additional-address">
								<InputText
									required={false}
									placeholder="Número"
									disabled={!isCepFilled}
									label="number"
									register={register}
									error={!!errors.number}
								/>
								<InputText
									register={register}
									placeholder="Complemento"
									disabled={!isCepFilled}
									label="additional"
									error={!!errors.additional}
								/>
							</div>
							<div className="city-address">
								<InputText
									required={false}
									label="neighborhood"
									placeholder="Bairro"
									disabled={!isCepFilled}
									register={register}
									error={!!errors.neighborhood}
								/>
								<InputText
									required={false}
									placeholder="Cidade"
									register={register}
									disabled={!isCepFilled}
									label="city"
									error={!!errors.city}
								/>
								<InputText
									label="state"
									required={false}
									placeholder="UF"
									disabled={!isCepFilled}
									register={register}
									error={!!errors.state}
								/>
							</div>
						</>
					)}
				</Styled.InputsContainer>
			</Styled.ContentWrapper>
		</Styled.CheckoutContainer>
	)
}
