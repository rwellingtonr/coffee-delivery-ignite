import { CurrencyDollar, MapPin, Timer } from "phosphor-react"

import * as Styled from "./styles"

export function DeliveryInformation() {
	const address = "Entrega em Rua João Daniel Martinelli, 102"
	return (
		<Styled.DeliveryInformationContainer>
			<Styled.DeliveryContentWrapper>
				<div className="delivery-information">
					<Styled.IconWrapper variant="purple">
						<MapPin weight="fill" size={16} />
					</Styled.IconWrapper>
					<Styled.DeliveryInformationWrapper>
						<p>
							Entrega em <span>{address}</span>
						</p>
						<p>cidade, ESTADO, UF</p>
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
							<span>Cartão de Crédito</span>
						</p>
					</Styled.DeliveryInformationWrapper>
				</div>
			</Styled.DeliveryContentWrapper>
		</Styled.DeliveryInformationContainer>
	)
}
