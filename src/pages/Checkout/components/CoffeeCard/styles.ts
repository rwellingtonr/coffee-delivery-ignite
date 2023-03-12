import styled from "styled-components"

export const CoffeeCardContainer = styled.section`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	gap: ${(props) => props.theme.sizes["3xlg"]};
	padding: 2.5rem;

	background-color: ${(props) => props.theme.colors["base-card"]};
	border-radius: 6px 44px;
`
export const TotalPriceContainer = styled.dl`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;

	gap: 0.75rem;
	width: 100%;

	dt {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;

		gap: 0.5rem;

		.order-information {
			font-size: ${(props) => props.theme.sizes["sm"]};
			color: ${(props) => props.theme.colors["base-text"]};
		}
		.order-value {
			color: ${(props) => props.theme.colors["base-text"]};
		}

		span {
			font-weight: 700;
			font-size: ${(props) => props.theme.sizes["xlg"]};
			color: ${(props) => props.theme.colors["base-subtitle"]};
		}
	}
`
export const ConfirmOrderButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.75rem 0.5rem;
	gap: 0.25rem;
	width: 100%;

	background: ${(props) => props.theme.colors["yellow"]};
	border-radius: 6px;
	border: none;

	color: ${(props) => props.theme.colors["white"]};
	font-size: ${(props) => props.theme.sizes["sm"]};
	text-transform: uppercase;
	line-height: ${(props) => props.theme.lineHeight["lg"]};

	cursor: pointer;
	transition: all 0.1s ease-in;

	&:not(:disabled):hover {
		background: ${(props) => props.theme.colors["yellow-dark"]};
	}

	&:disabled {
		background: ${(props) => props.theme.colors["yellow-dark"]};
		opacity: 0.6;
		cursor: not-allowed;
	}
`
