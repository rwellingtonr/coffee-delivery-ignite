import styled, { css } from 'styled-components'
import { media } from '~/styles/breakpoints'

export const PaymentContainer = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 0.75rem;

	${media.md`
		grid-template-columns: repeat(3, 11.25rem);
	`}
`

export const PaymentButtonWrapper = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.75rem;
	padding: 1rem;
	width: 100%;

	cursor: pointer;
	text-transform: uppercase;

	border: 1px solid transparent;
	border-radius: 6px;
	transition: all 0.1s ease-in;

	${({ theme }) => css`
		color: ${theme.colors['base-text']};
		font-size: ${theme.sizes['xsm']};
		background-color: ${theme.colors['base-button']};

		&:enabled:hover {
			background-color: ${theme.colors['base-hover']};
			color: ${theme.colors['base-subtitle']};
		}

		&:enabled:focus {
			background-color: ${theme.colors['purple-light']};
			border: 1px solid ${theme.colors.purple};
		}

		svg {
			color: ${theme.colors.purple};
		}
	`}
`
