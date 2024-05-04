import * as Styles from './styles'
import { MapPin } from 'phosphor-react'
import logo from '~/assets/illustration/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import { ShoppingCart } from '../ShoppingCart'
import { useShoppingCart } from '~/context/ShoppingCart'

export function Header() {
	const { shoppingCart } = useShoppingCart()
	const navigate = useNavigate()

	const totalOfItensOnCart = shoppingCart.coffee?.length

	const handleNavigateToCheckout = () => {
		const isThereProducts = totalOfItensOnCart !== 0
		if (isThereProducts) {
			navigate('/checkout')
		}
	}

	return (
		<Styles.HeaderContainer>
			<Link to={'/'} title="Logo da marca com um texto de Coffee Delivery">
				<img src={logo} alt="Logo da marca com um texto de Coffee Delivery" />
			</Link>
			<Styles.ActionsWrapper>
				<Styles.LocationWrapper>
					<MapPin size={22} weight="fill" />
					<p>Vinhedo, SP</p>
				</Styles.LocationWrapper>

				<Styles.ShoppingIconWithNotification data-testid='shopping-cart' type="button" onClick={handleNavigateToCheckout}>
					<ShoppingCart variant="primary" />
					{totalOfItensOnCart ? <span data-testid='notification-badge'>{totalOfItensOnCart}</span> : <></>}
				</Styles.ShoppingIconWithNotification>
			</Styles.ActionsWrapper>
		</Styles.HeaderContainer>
	)
}
