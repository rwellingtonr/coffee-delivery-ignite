import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { ShippingCartProvider } from './context/ShoppingCart'
import { ThemeProvider } from './provider/ThemeProvider'

export const App = () => (
	<ThemeProvider>
		<ShippingCartProvider>
			<RouterProvider router={router} />
		</ShippingCartProvider>
	</ThemeProvider>
)

