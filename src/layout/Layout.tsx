import { Outlet } from "react-router-dom"

export function Layout() {
	return (
		<div>
			<header></header>
			<Outlet />
		</div>
	)
}
