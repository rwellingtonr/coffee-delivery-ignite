import styled from 'styled-components'
import { media } from '~/styles/breakpoints'

export const FormCheckoutContainer = styled.form`
	display: flex;
	justify-items: center;
	align-items: flex-start;
	flex-direction: column;
	padding: 0 1rem;

	gap: 2rem;

	${media.lg`
		flex-direction: row;
		padding: 0 4rem;

		.checkout_container {
			max-width: 40vw;
		}
	`}
`

export const CheckoutContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	align-items: flex-start;
	gap: 0.75rem;

	${media.lg`
		align-items: flex-start;
	`}

	& > h5 {
		color: ${(props) => props.theme.colors['base-subtitle']};
		font-weight: 700;
		font-size: ${(props) => props.theme.sizes['lg']};
	}
`
