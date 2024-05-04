import { MapPin } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { InputText } from '~/components/InputText'
import * as Styled from './styles'
import { useCepAddress } from '~/hook/useCepAddress'
import type { AddressSchemaType } from '../../validation'
import { useEffect } from 'react'
import { Loader } from './Loader'

export function AddressForm() {
	const {
		register,
		watch,
		setValue,
		formState: { errors },
	} = useFormContext<AddressSchemaType>()

	const cep = watch('cep')

	const { address, isCepFilled, isLoading } = useCepAddress(cep)

	useEffect(() => {
		if (address && !isLoading) {
			Object.entries(address).forEach(([key, valeu]) => {
				const keyValue = key as keyof AddressSchemaType
				setValue(keyValue, valeu)
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
							mask={'99999-999'}
							maskChar={null}
							maskPlaceholder={'_'}
							alwaysShowMask={true}
							placeholder="99999-999"
							{...register('cep')}
						/>
					</div>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<InputText
								error={!!errors.address}
								required={true}
								placeholder="Endereço"
								disabled={!isCepFilled}
								{...register('address')}
							/>
							<div className="additional-address">
								<InputText
									required={false}
									placeholder="Número"
									disabled={!isCepFilled}
									{...register('number')}
									error={!!errors.number}
								/>
								<InputText
									placeholder="Complemento"
									disabled={!isCepFilled}
									{...register('additional')}
									error={!!errors.additional}
								/>
							</div>
							<div className="city-address">
								<InputText
									required={false}
									placeholder="Bairro"
									disabled={!isCepFilled}
									{...register('neighborhood')}
									error={!!errors.neighborhood}
								/>
								<InputText
									required={false}
									placeholder="Cidade"
									{...register('city')}
									disabled={!isCepFilled}
									error={!!errors.city}
								/>
								<InputText
									required={false}
									placeholder="UF"
									disabled={!isCepFilled}
									{...register('state')}
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
