import * as Styles from "./styles"
import { MapPin } from "phosphor-react"
import logo from "~/assets/illustration/logo.svg"
import { Link } from "react-router-dom"
import { ShoppingCart } from "../ShoppingCart"
import { useShoppingCart } from "~/context/ShoppingCart"

export function Header() {
	const { shoppingCart } = useShoppingCart()

	const totalOfItensOnCart = shoppingCart.coffee?.length

	return (
		<Styles.HeaderContainer>
			<Link to={"/"}>
				<img src={logo} alt="Logo da marca com um texto de Coffee Delivery" />
			</Link>
			<Styles.ActionsWrapper>
				<Styles.LocationWrapper>
					<MapPin size={22} weight="fill" />
					<p>Vinhedo, SP</p>
				</Styles.LocationWrapper>
				<Link to={"/checkout"}>
					<Styles.ShoppingIconWithNotification>
						<ShoppingCart variant="primary" />
						{totalOfItensOnCart ? <span>{totalOfItensOnCart}</span> : <></>}
					</Styles.ShoppingIconWithNotification>
				</Link>
			</Styles.ActionsWrapper>
		</Styles.HeaderContainer>
	)
}
