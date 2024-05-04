import styled, { css } from 'styled-components'
import { media } from '~/styles/breakpoints'

export const CoffeeCardContainer = styled.section`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;

	gap: ${({ theme }) => theme.sizes['3xlg']};
	padding: 1.5rem;

	background-color: ${({ theme }) => theme.colors['base-card']};
	border-radius: 6px 44px;

	${media.lg`
		padding: 2.5rem;
	`}
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

		${({ theme }) => css`
			.order-information {
				font-size: ${theme.sizes['sm']};
				color: ${theme.colors['base-text']};
			}
			.order-value {
				color: ${theme.colors['base-text']};
			}

			span {
				font-weight: 700;
				font-size: ${theme.sizes['xlg']};
				color: ${theme.colors['base-subtitle']};
			}
		`}
	}
`
export const ConfirmOrderButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.75rem 0.5rem;
	gap: 0.25rem;
	width: 100%;
	text-transform: uppercase;
	border-radius: 6px;
	border: none;

	cursor: pointer;
	transition: all 0.1s ease-in;

	${({ theme }) => css`
		background: ${theme.colors['yellow']};

		color: ${theme.colors['white']};
		font-size: ${theme.sizes['sm']};
		line-height: ${theme.lineHeight['lg']};

		&:enabled:hover {
			background: ${theme.colors['yellow-dark']};
		}

		&:disabled {
			background: ${theme.colors['yellow-dark']};
			opacity: 0.6;
			cursor: not-allowed;
		}
	`}
`
