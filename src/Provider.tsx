import { ThemeProvider } from 'styled-components'
import { ShippingCartProvider } from './context/ShoppingCart'
import { GlobalStyle } from './styles/globas'
import { defaultTheme } from './styles/theme'

type ProviderProps = {
	children: React.ReactElement
}

export function Provider({ children }: ProviderProps) {
	return (
		<ThemeProvider theme={defaultTheme}>
			<ShippingCartProvider>{children}</ShippingCartProvider>
			<GlobalStyle />
		</ThemeProvider>
	)
}
