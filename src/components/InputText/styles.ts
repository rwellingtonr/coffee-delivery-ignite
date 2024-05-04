import styled from 'styled-components'

type ContainerProps = {
	readonly $error: 'true' | 'false'
}

export const InputContainer = styled.div<ContainerProps>`
	display: flex;
	align-items: center;
	padding: ${({ theme }) => theme.sizes['xsm']};
	gap: 0.25rem;
	width: 100%;

	background: ${(props) => props.theme.colors['base-input']};
	border: 1px solid
		${(props) => (props.$error === 'true' ? '#ff6a5a' : props.theme.colors['base-button'])};
	border-radius: 4px;
	outline: transparent;

	&:active,
	&:focus-within {
		outline: 1px solid ${({ theme }) => theme.colors['yellow-dark']};
	}

	.input_text {
		background: inherit;
		outline: transparent;
		border: none;
		width: 100%;

		color: ${({ theme }) => theme.colors['base-text']};
		font-size: ${({ theme }) => theme.sizes['sm']};

		&::placeholder {
			color: ${({ theme }) => theme.colors['base-label']};
		}
		&:disabled {
			cursor: not-allowed;
			opacity: 0.7;
		}
	}

	.optional {
		color: ${(props) => props.theme.colors['base-label']};
		font-size: ${(props) => props.theme.sizes['xsm']};
		font-style: italic;
		text-align: right;
	}
`
