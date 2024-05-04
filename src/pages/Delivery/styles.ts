import styled from 'styled-components'
import { media } from '~/styles/breakpoints'

export const DeliveryContainer = styled.main`
	display: flex;
	justify-content: center;
	margin-top: 5rem;
	flex-direction: column;
	align-items: center;
	gap: 3rem;

	img {
		width: 100%;
	}

	.content {
		padding: 0 0.5rem;

		.heading {
			margin-bottom: 40px;
			text-align: center;

			& > h1 {
				color: ${(props) => props.theme.colors['yellow-dark']};
				font-weight: 800;
				font-size: ${(props) => props.theme.sizes['4xlg']};
			}
			& > p {
				margin-top: 0.25rem;
				color: ${(props) => props.theme.colors['base-subtitle']};
				font-size: ${(props) => props.theme.sizes['xlg']};
			}
		}
	}

	${media.lg`
		align-items: flex-end;
		gap: 6.375rem;
		flex-direction: row;

		img {
			width: 30.75rem;
		}
		.content{
			padding: 0;

			.heading {
				text-align: left;
			}
		}
	`}
`
