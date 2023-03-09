import styled from "styled-components"

export const InputContainer = styled.div`
	display: flex;
	align-items: center;
	padding: ${(props) => props.theme.sizes["xsm"]};
	gap: 0.25rem;
	width: 100%;

	background: ${(props) => props.theme.colors["base-input"]};
	border: 1px solid ${(props) => props.theme.colors["base-button"]};
	border-radius: 4px;
	outline: transparent;

	&:active,
	&:focus-within {
		outline: 1px solid ${(props) => props.theme.colors["yellow-dark"]};
	}

	.optional {
		color: ${(props) => props.theme.colors["base-label"]};
		font-size: ${(props) => props.theme.sizes["xsm"]};
		font-style: italic;
		text-align: right;
	}
`

export const InputTextContainer = styled.input`
	background: inherit;
	outline: transparent;
	border: none;
	width: 100%;

	color: ${(props) => props.theme.colors["base-text"]};
	font-size: ${(props) => props.theme.sizes["sm"]};

	&::placeholder {
		color: ${(props) => props.theme.colors["base-label"]};
	}
	&:disabled {
		cursor: not-allowed;
		opacity: 0.7;
	}
`
