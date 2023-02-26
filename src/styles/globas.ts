import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

  body{
    -webkit-font-smoothing: antialiased;
		font-family: ${(props) => props.theme.fonts.roboto};
		line-height: ${(props) => props.theme.lineHeight.md};
		background: ${(props) => props.theme.colors.background};
  }
	h1,h2,h3,h4,h5,h6 {
		font-family: ${(props) => props.theme.fonts.baloo};
		line-height: ${(props) => props.theme.lineHeight.md};
	}
	body, input, textarea, button {
		font-family: ${(props) => props.theme.fonts.roboto};
		font-weight: 400;
		font-size: ${(props) => props.theme.sizes.md};
	}

`
