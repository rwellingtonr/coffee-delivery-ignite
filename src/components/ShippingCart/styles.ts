import styled from "styled-components"

const shippingCartVariant = {
	primary: {
		background: "yellow-light",
		color: "yellow-dark",
		bgHover: "yellow",
	},
	secondary: {
		background: "purple-dark",
		color: "white",
		bgHover: "purple",
	},
} as const

type VariantProps = {
	variant: keyof typeof shippingCartVariant
}

export const ShippingCartWrapper = styled.div<VariantProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${(props) => props.theme.colors[shippingCartVariant[props.variant].background]};
	border-radius: 6px;
	padding: 0.5rem;
	cursor: pointer;
	transition: all 0.1s ease-in;

	&:hover {
		background: ${(props) => props.theme.colors[shippingCartVariant[props.variant].bgHover]};
	}

	svg {
		color: ${(props) => props.theme.colors[shippingCartVariant[props.variant].color]};
	}
`
