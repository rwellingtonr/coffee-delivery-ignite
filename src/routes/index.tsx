import { Layout } from '~/layout'
import { createBrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from '~/pages/ErrorBoundary'
import { Home } from '~/pages/Home'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorBoundary />,
		children: [
			{
				index: true,
				element: <Home />,
				errorElement: <ErrorBoundary />,
			},
			{
				errorElement: <ErrorBoundary />,
				path: 'checkout',
				async lazy() {
					const { Checkout } = await import('~/pages/Checkout')
					return { Component: Checkout }
				},
			},
			{
				errorElement: <ErrorBoundary />,
				path: 'delivery',
				async lazy() {
					const { Delivery } = await import('~/pages/Delivery')
					return { Component: Delivery }
				},
			},
		],
	},
])
