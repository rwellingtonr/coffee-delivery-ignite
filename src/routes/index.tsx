import { Layout } from "~/layout"
import { createBrowserRouter } from "react-router-dom"
import { ErrorBoundary } from "~/pages/ErrorBoundary"
import { Home } from "~/pages/Home"
import { Checkout } from "~/pages/Checkout"
import { Delivery } from "~/pages/Delivery"

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorBoundary />,
		children: [
			{
				index: true,
				element: <Home />,
				errorElement: <ErrorBoundary />,
			},
			{
				element: <Checkout />,
				errorElement: <ErrorBoundary />,
				path: "checkout",
			},
			{
				element: <Delivery />,
				errorElement: <ErrorBoundary />,
				path: "delivery",
			},
		],
	},
])
