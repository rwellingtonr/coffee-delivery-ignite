import styled from 'styled-components'

export const CounterContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.25rem;
	padding: 0.5rem;
	border-radius: 6px;
	width: 4.5rem;
	background: ${(props) => props.theme.colors['base-button']};

	.ghost_button {
		all: unset;

		svg {
			color: ${(props) => props.theme.colors['purple']};
			cursor: pointer;

			&:hover {
				color: ${(props) => props.theme.colors['purple-dark']};
			}
		}
	}

	.counter {
		color: ${(props) => props.theme.colors['base-title']};
	}
`
