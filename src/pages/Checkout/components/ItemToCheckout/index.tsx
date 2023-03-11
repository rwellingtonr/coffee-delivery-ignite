import { Trash } from "phosphor-react"
import { Fragment } from "react"
import arabian from "~/assets/coffee/arabian.svg"
import { Counter } from "~/components/Counter"
import { useShoppingCart } from "~/context/ShoppingCart"
import { CoffeeSelectedContainer, Divider, RemoverButtonContainer } from "./styles"

export function ItemToCheckout() {
	const first = (num: number) => {}
	const { handleRemoveFromCart, shoppingCart } = useShoppingCart()

	return (
		<>
			{shoppingCart.coffee.map((coffee) => (
				<Fragment key={coffee.id}>
					<CoffeeSelectedContainer>
						<div className="information">
							<img src={coffee.coffeeImage} alt="" />
							<div className="details">
								<p>{coffee.title}</p>
								<div className="actions">
									<Counter currentValue={1} handleCounter={first} />
									<RemoverButtonContainer
										type="button"
										onClick={() => handleRemoveFromCart(coffee.id)}
									>
										<Trash size={16} weight="regular" />
										<span>Remover</span>
									</RemoverButtonContainer>
								</div>
							</div>
						</div>

						<span>{`R$ ${coffee.price}`}</span>
					</CoffeeSelectedContainer>
					<Divider />
				</Fragment>
			))}
		</>
	)
}
