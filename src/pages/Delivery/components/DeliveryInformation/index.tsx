import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useLocation } from 'react-router-dom'
import type { Order } from '~/interface/order'
import { paymentAccepted } from '~/repository/payments'
import { brazilianStates } from '~/repository/states'

import * as Styled from './styles'

export function DeliveryInformation() {
	const location = useLocation()
	const orderProps = location.state as Order

	const { address, number, city, state } = orderProps.address

	const payment = paymentAccepted.find((payment) => payment.value === orderProps.payment.method)

	const brState = state as keyof typeof brazilianStates

	return (
		<Styled.DeliveryInformationContainer>
			<Styled.DeliveryContentWrapper>
				<div className="delivery-information">
					<Styled.IconWrapper variant="purple">
						<MapPin weight="fill" size={16} />
					</Styled.IconWrapper>
					<Styled.DeliveryInformationWrapper>
						<p>
							Entrega em <span>{`${address}, ${number}`}</span>
						</p>
						<p>{`${city}, ${brazilianStates[brState]?.toUpperCase()}, ${state}`}</p>
					</Styled.DeliveryInformationWrapper>
				</div>
				<div className="delivery-information">
					<Styled.IconWrapper variant="yellow">
						<Timer weight="fill" size={16} />
					</Styled.IconWrapper>
					<Styled.DeliveryInformationWrapper>
						<p>Previsão de entrega</p>
						<p>
							<span>20 min - 30 min</span>
						</p>
					</Styled.DeliveryInformationWrapper>
				</div>
				<div className="delivery-information">
					<Styled.IconWrapper variant="darkYellow">
						<CurrencyDollar weight="fill" size={16} />
					</Styled.IconWrapper>
					<Styled.DeliveryInformationWrapper>
						<p>Pagamento na entrega</p>
						<p>
							<span className="payment">{payment?.label}</span>
						</p>
					</Styled.DeliveryInformationWrapper>
				</div>
			</Styled.DeliveryContentWrapper>
		</Styled.DeliveryInformationContainer>
	)
}
