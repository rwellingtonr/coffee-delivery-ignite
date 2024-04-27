import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	${({ theme }) => css`
		body {
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			font-family: ${theme.fonts.roboto};
			line-height: ${theme.lineHeight.md};
			background: ${theme.colors.background};
		}
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			font-family: ${theme.fonts.baloo};
			line-height: ${theme.lineHeight.md};
		}
		body,
		input,
		textarea,
		button {
			font-family: ${theme.fonts.roboto};
			font-weight: 400;
			font-size: ${theme.sizes.md};
		}
	`}
	
`
