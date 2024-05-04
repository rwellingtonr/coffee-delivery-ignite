import styled from 'styled-components'
import { media } from '~/styles/breakpoints'

export const PaymentContainer = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 1.5rem;
	border-radius: 6px;
	background: ${(props) => props.theme.colors['base-card']};

	${media.lg`
		padding: 2.5rem;
	`}
`
export const PaymentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	gap: 2rem;
	width: 100%;
`

export const PaymentHeading = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 0.5rem;
	width: 100%;

	svg {
		color: ${(props) => props.theme.colors['purple']};
	}

	.payment-information {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 2px;

		.payment-title {
			color: ${(props) => props.theme.colors['base-subtitle']};
		}

		.payment-description {
			color: ${(props) => props.theme.colors['base-text']};
			font-size: ${(props) => props.theme.sizes['sm']};
		}
	}
`
