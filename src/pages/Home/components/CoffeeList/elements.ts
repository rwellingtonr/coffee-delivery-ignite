import american from "~/assets/coffee/american.svg"
import arabian from "~/assets/coffee/arabian.svg"
import caffeeLatte from "~/assets/coffee/caffeeLatte.svg"
import capuccino from "~/assets/coffee/capuccino.svg"
import coldCoffee from "~/assets/coffee/coldCoffee.svg"
import creamExpress from "~/assets/coffee/creamExpress.svg"
import cuba from "~/assets/coffee/cuba.svg"
import express from "~/assets/coffee/express.svg"
import hawaiian from "~/assets/coffee/hawaiian.svg"
import hotChocolate from "~/assets/coffee/hotChocolate.svg"
import irish from "~/assets/coffee/irish.svg"
import latte from "~/assets/coffee/latte.svg"
import macchiato from "~/assets/coffee/macchiato.svg"
import mochaccino from "~/assets/coffee/mochaccino.svg"

export type CoffeeElements = {
	id: number
	type: string[]
	coffeeImage: string
	title: string
	description: string
}

export const coffeeElements: CoffeeElements[] = [
	{
		id: 1,
		type: ["tradicional"],
		coffeeImage: express,
		title: "Expresso Tradicional",
		description: "O tradicional café feito com água quente e grãos moídos",
	},
	{
		id: 2,
		coffeeImage: american,
		type: ["tradicional"],
		title: "Expresso Americano",
		description: "Expresso diluído, menos intenso que o tradicional",
	},
	{
		id: 3,
		coffeeImage: creamExpress,
		type: ["tradicional"],
		description: "Café expresso tradicional com espuma cremosa",
		title: "Expresso Cremoso",
	},
	{
		id: 4,
		type: ["tradicional", "gelado"],
		coffeeImage: coldCoffee,
		description: "Bebida preparada com café expresso e cubos de gelo",
		title: "Expresso Gelado",
	},
	{
		id: 5,
		coffeeImage: caffeeLatte,
		type: ["tradicional", "com leite"],
		description: "Meio a meio de expresso tradicional com leite vaporizado",
		title: "Café com Leite",
	},
	{
		id: 6,
		type: ["tradicional", "com leite"],
		coffeeImage: latte,
		description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
		title: "Latte",
	},
	{
		id: 7,
		coffeeImage: capuccino,
		description: "Bebida com canela feita de doses iguais de café, leite e espuma",
		title: "Capuccino",
		type: ["tradicional", "com leite"],
	},
	{
		id: 8,
		coffeeImage: macchiato,
		description: "Café expresso misturado com um pouco de leite quente e espuma",
		title: "Macchiato",
		type: ["tradicional", "com leite"],
	},
	{
		id: 9,
		coffeeImage: mochaccino,
		description: "Café expresso com calda de chocolate, pouco leite e espuma",
		title: "Mocaccino",
		type: ["tradicional", "com leite"],
	},
	{
		id: 10,
		coffeeImage: hotChocolate,
		description: "Bebida feita com chocolate dissolvido no leite quente e café",
		title: "Chocolate Quente",
		type: ["especial", "com leite"],
	},
	{
		id: 11,
		coffeeImage: cuba,
		description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
		type: ["especial"],
		title: "Cubano",
	},
	{
		id: 12,
		coffeeImage: hawaiian,
		description: "Bebida adocicada preparada com café e leite de coco",
		title: "Havaiano",
		type: ["especial"],
	},
	{
		id: 13,
		coffeeImage: arabian,
		type: ["especial"],
		description: "Bebida preparada com grãos de café árabe e especiarias",
		title: "Árabe",
	},
	{
		id: 14,
		coffeeImage: irish,
		description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
		title: "Irlandês",
		type: ["especial", "alcoólico"],
	},
]
