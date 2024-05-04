import styled, { css } from 'styled-components'
import { media } from '~/styles/breakpoints'

export const CoffeeSelectedContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	padding: 0.5rem 0.25rem;
	width: 100%;

	.information {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 1.25rem;

		img {
			width: 6rem;
		}

		.details {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 0.5rem;

			color: ${(props) => props.theme.colors['base-subtitle']};

			.actions {
				display: flex;
				align-items: center;
				gap: 0.5rem;
			}
		}

		${media.lg`
			flex-direction: row;

			img {
				width: 4rem;
			}
		`}
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
	text-transform: uppercase;
	line-height: 1.6;
	transition: all 0.1s ease-in;

	${({ theme }) => css`
		background-color: ${theme.colors['base-button']};

		font-size: ${theme.sizes['xsm']};
		color: ${theme.colors['base-text']};

		&:enabled:hover {
			color: ${theme.colors['base-subtitle']};
			background-color: ${theme.colors['base-hover']};
		}

		svg {
			color: ${theme.colors['purple']};
		}
	`}
`

export const Divider = styled.div`
	width: 100%;
	height: 1px;
	background: ${({ theme }) => theme.colors['base-button']};
`
