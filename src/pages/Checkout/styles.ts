import styled from "styled-components"

export const FormCheckoutContainer = styled.form`
	display: flex;
	justify-content: center;

	gap: 2rem;

	@media (max-width: 1120px) {
		flex-direction: column;
		align-items: center;
	}
`

export const CheckoutContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 0.75rem;

	& > h5 {
		color: ${(props) => props.theme.colors["base-subtitle"]};
		font-weight: 700;
		font-size: ${(props) => props.theme.sizes["lg"]};
	}
`
