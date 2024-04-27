import { ShoppingCart as Cart } from 'phosphor-react'
import { ComponentProps, forwardRef } from 'react'
import { type ShoppingCartVariant, ShoppingCartWrapper } from './styles'

type ShoppingCartProps = ComponentProps<'button'> & {
	variant: ShoppingCartVariant
}

export const ShoppingCart = forwardRef<HTMLButtonElement, ShoppingCartProps>(
	({ variant, ...props }, forwardRef) => (
		<ShoppingCartWrapper {...props} $variant={variant} ref={forwardRef}>
			<Cart size={22} weight="fill" />
		</ShoppingCartWrapper>
	),
)

ShoppingCart.displayName = 'ShoppingCart'
