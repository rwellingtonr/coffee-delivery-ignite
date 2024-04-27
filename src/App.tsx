import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { Provider } from './Provider'

export function App() {
	return (
		<Provider>
			<RouterProvider router={router} />
		</Provider>
	)
}
