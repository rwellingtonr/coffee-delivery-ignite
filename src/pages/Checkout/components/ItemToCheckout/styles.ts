import styled from "styled-components"

export const CoffeeSelectedContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	padding: 0.5rem 0.25rem;
	width: 23rem;

	.information {
		display: flex;
		align-items: center;
		gap: 1.25rem;

		img {
			width: 4rem;
		}

		.details {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 0.5rem;

			color: ${(props) => props.theme.colors["base-subtitle"]};

			.actions {
				display: flex;
				align-items: center;
				gap: 0.5rem;
			}
		}
	}
`

export const RemoverButtonContainer = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;

	padding: 0.5rem;
	gap: 0.25rem;
	cursor: pointer;

	border: none;
	border-radius: 6px;
	background-color: ${(props) => props.theme.colors["base-button"]};

	text-transform: uppercase;
	font-size: ${(props) => props.theme.sizes["xsm"]};
	color: ${(props) => props.theme.colors["base-text"]};
	line-height: 1.6;

	transition: all 0.1s ease-in;

	&:hover {
		color: ${(props) => props.theme.colors["base-subtitle"]};
		background-color: ${(props) => props.theme.colors["base-hover"]};
	}

	svg {
		color: ${(props) => props.theme.colors["purple"]};
	}
`

export const Divider = styled.div`
	width: 100%;
	height: 1px;
	background: ${(props) => props.theme.colors["base-button"]};
`
