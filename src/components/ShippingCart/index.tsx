import { ShoppingCart } from "phosphor-react"
import { ShippingCartWrapper } from "./styles"

type ShippingCartProps = {
	variant: "primary" | "secondary"
}
export function ShippingCart({ variant }: ShippingCartProps) {
	return (
		<ShippingCartWrapper variant={variant}>
			<ShoppingCart size={22} weight="fill" />
		</ShippingCartWrapper>
	)
}
