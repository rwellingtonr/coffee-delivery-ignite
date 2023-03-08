import { Layout } from "~/layout"
import { createBrowserRouter } from "react-router-dom"
import { ErrorBoundary } from "~/pages/ErrorBoundary"
import { Home } from "~/pages/Home"

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorBoundary />,
		children: [{ index: true, element: <Home />, errorElement: <ErrorBoundary /> }],
	},
])
