import styled from "styled-components"

export const PaymentContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.75rem;
`

export const PaymentButtonWrapper = styled.button`
	display: flex;
	align-items: center;
	gap: 0.75rem;
	padding: 1rem;
	width: 11.167rem;

	text-transform: uppercase;
	color: ${(props) => props.theme.colors["base-text"]};
	font-size: ${(props) => props.theme.sizes["xsm"]};

	cursor: pointer;

	background-color: ${(props) => props.theme.colors["base-button"]};
	border: 1px solid transparent;
	border-radius: 6px;
	transition: all 0.1s ease-in;

	&:hover {
		background-color: ${(props) => props.theme.colors["base-hover"]};
		color: ${(props) => props.theme.colors["base-subtitle"]};
	}

	&:active {
		background-color: ${(props) => props.theme.colors["purple-light"]};
		border: 1px solid ${(props) => props.theme.colors.purple};
	}

	svg {
		color: ${(props) => props.theme.colors.purple};
	}
`
