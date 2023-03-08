import styled from "styled-components"

export const CounterContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.25rem;
	padding: 0.5rem;
	border-radius: 6px;
	background: ${(props) => props.theme.colors["base-button"]};

	svg {
		color: ${(props) => props.theme.colors["purple"]};

		&:hover {
			color: ${(props) => props.theme.colors["purple-dark"]};
		}
	}

	span {
		color: ${(props) => props.theme.colors["base-title"]};
	}
`