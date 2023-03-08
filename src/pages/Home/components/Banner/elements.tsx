import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react"

export type TopicVariants = "yellow-dark" | "yellow" | "base-text" | "purple"

type TopicElementProps = {
	label: string
	icon: JSX.Element
	variant: TopicVariants
}

export const topicElements: TopicElementProps[] = [
	{
		label: "Compra simples e segura",
		variant: "yellow-dark",
		icon: <ShoppingCart weight="fill" size={16} />,
	},

	{
		icon: <Package size={16} weight="fill" />,
		label: "Embalagem mantém o café intacto",
		variant: "base-text",
	},
	{
		icon: <Timer size={16} weight="fill" />,
		label: "Entrega rápida e rastreada",
		variant: "yellow",
	},
	{
		icon: <Coffee size={16} weight="fill" />,
		label: "O café chega fresquinho até você",
		variant: "purple",
	},
]
