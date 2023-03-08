import { ShoppingCart as Cart } from "phosphor-react"
import { ButtonHTMLAttributes } from "react"
import { ShoppingCartWrapper } from "./styles"

type ShoppingCartProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant: "primary" | "secondary"
}
export function ShoppingCart({ variant, ...props }: ShoppingCartProps) {
	return (
		<ShoppingCartWrapper variant={variant} {...props}>
			<Cart size={22} weight="fill" />
		</ShoppingCartWrapper>
	)
}
