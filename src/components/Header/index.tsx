import * as Styles from "./styles"
import { MapPin } from "phosphor-react"
import logo from "~/assets/illustration/logo.svg"
import { ShippingCart } from "../ShippingCart"
import { Link } from "react-router-dom"

export function Header() {
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
					<ShippingCart variant="primary" />
				</Link>
			</Styles.ActionsWrapper>
		</Styles.HeaderContainer>
	)
}
