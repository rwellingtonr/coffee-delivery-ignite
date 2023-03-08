import { RouterProvider } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { ShippingCartProvider } from "./context/ShoppingCart"
import { router } from "./routes"
import { GlobalStyle } from "./styles/globas"
import { defaultTheme } from "./styles/theme"

export function App() {
	return (
		<>
			<ThemeProvider theme={defaultTheme}>
				<ShippingCartProvider>
					<RouterProvider router={router} />
				</ShippingCartProvider>
				<GlobalStyle />
			</ThemeProvider>
		</>
	)
}
