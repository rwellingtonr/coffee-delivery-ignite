import { RouterProvider } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { router } from "./routes"
import { GlobalStyle } from "./styles/globas"
import { defaultTheme } from "./styles/theme"

export function App() {
	return (
		<>
			<ThemeProvider theme={defaultTheme}>
				<RouterProvider router={router} />
				<GlobalStyle />
			</ThemeProvider>
		</>
	)
}
