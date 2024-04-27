import styled from 'styled-components'

const shoppingCartVariant = {
	primary: {
		background: 'yellow-light',
		color: 'yellow-dark',
		bgHover: 'yellow',
	},
	secondary: {
		background: 'purple-dark',
		color: 'white',
		bgHover: 'purple',
	},
} as const

export type ShoppingCartVariant = keyof typeof shoppingCartVariant

type VariantProps = {
	readonly $variant: ShoppingCartVariant
}

export const ShoppingCartWrapper = styled.button<VariantProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${(props) => props.theme.colors[shoppingCartVariant[props.$variant].background]};
	border-radius: 6px;
	padding: 0.5rem;
	cursor: pointer;
	transition: all 0.1s ease-in;
	border: none;

	&:hover {
		background: ${(props) => props.theme.colors[shoppingCartVariant[props.$variant].bgHover]};
	}

	svg {
		color: ${(props) => props.theme.colors[shoppingCartVariant[props.$variant].color]};
	}
`
