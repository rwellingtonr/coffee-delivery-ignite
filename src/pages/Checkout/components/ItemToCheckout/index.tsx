import { Trash } from 'phosphor-react'
import { Fragment } from 'react'
import { Counter } from '~/components/Counter'
import { useShoppingCart } from '~/context/ShoppingCart'
import { CoffeeSelectedContainer, Divider, RemoverButtonContainer } from './styles'

export function ItemToCheckout() {
	const { handleRemoveFromCart, handleChangeQuantityFromCart, shoppingCart } = useShoppingCart()

	const formatTotalPrice = (price: number) => {
		const [decimal, fraction] = price.toString().split('.')
		const cents = fraction?.padEnd(2, '0')?.slice(0, 2)
		return `${decimal},${cents}`
	}

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
									<Counter id={coffee.id} onChangeQuantity={handleChangeQuantityFromCart} />
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

						<span>{`R$ ${formatTotalPrice(coffee.totalPrice)}`}</span>
					</CoffeeSelectedContainer>
					<Divider />
				</Fragment>
			))}
		</>
	)
}
