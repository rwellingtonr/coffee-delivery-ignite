import { Layout } from "~/layout"
import { createBrowserRouter } from "react-router-dom"
import { ErrorBoundary } from "~/pages/ErrorBoundary"
import { Home } from "~/pages/Home"
import { Checkout } from "~/pages/Checkout"

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorBoundary />,
		children: [
			{ index: true, element: <Home />, errorElement: <ErrorBoundary /> },
			{
				element: <Checkout />,
				errorElement: <ErrorBoundary />,
				path: "checkout",
			},
		],
	},
])
