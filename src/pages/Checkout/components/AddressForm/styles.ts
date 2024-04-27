import styled from 'styled-components'
import InputMask from 'react-input-mask'

export const CheckoutContainer = styled.section`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	background: ${(props) => props.theme.colors['base-card']};
	border-radius: 6px;
	padding: 2.5rem;
`
export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 2rem;
	width: 35rem;
`

export const CheckoutHeading = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 0.5rem;
	width: 100%;

	svg {
		color: ${(props) => props.theme.colors['yellow-dark']};
	}

	.address-information {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 2px;

		.address-title {
			color: ${(props) => props.theme.colors['base-subtitle']};
		}

		.address-description {
			color: ${(props) => props.theme.colors['base-text']};
			font-size: ${(props) => props.theme.sizes['sm']};
		}
	}
`
export const InputsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 1rem;
	width: 100%;

	.additional-address {
		display: grid;
		width: 100%;
		align-items: center;
		grid: auto-flow / auto 1fr;
		gap: ${(props) => props.theme.sizes['xsm']};
	}

	.city-address {
		display: grid;
		width: 100%;
		align-items: center;
		grid: auto-flow / auto 1fr 3.75rem;
		gap: ${(props) => props.theme.sizes['xsm']};
	}
`
export const InputMaskWrapper = styled(InputMask)`
	display: flex;
	align-items: center;
	padding: ${(props) => props.theme.sizes['xsm']};
	gap: 0.25rem;
	width: 100%;

	color: ${(props) => props.theme.colors['base-text']};
	font-size: ${(props) => props.theme.sizes['sm']};

	background: ${(props) => props.theme.colors['base-input']};
	border: 1px solid ${(props) => props.theme.colors['base-button']};
	border-radius: 4px;
	outline: transparent;

	&:active,
	&:focus-within {
		outline: 1px solid ${(props) => props.theme.colors['yellow-dark']};
	}

	&::placeholder {
		color: ${(props) => props.theme.colors['base-label']};
	}
`
