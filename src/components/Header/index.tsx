import * as Styles from "./styles"
import { MapPin } from "phosphor-react"
import logo from "~/assets/illustration/logo.svg"
import { ShippingCart } from "../ShippingCart"

export function Header() {
	return (
		<Styles.HeaderContainer>
			<img src={logo} alt="Logo da marca com um texto de Coffee Delivery" />

			<Styles.ActionsWrapper>
				<Styles.LocationWrapper>
					<MapPin size={22} weight="fill" />
					<p>Vinhedo, SP</p>
				</Styles.LocationWrapper>
				<ShippingCart variant="primary" />
			</Styles.ActionsWrapper>
		</Styles.HeaderContainer>
	)
}
