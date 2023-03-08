import { MapPin } from "phosphor-react"
import { InputText } from "~/components/InputText"

export function AddressForm() {
	return (
		<section>
			<div>
				<MapPin weight="regular" size={22} />
				<div>
					<p>Endereço de Entrega</p>
					<p>Informe o endereço onde deseja receber seu pedido</p>
				</div>
			</div>
			<form action="">
				<InputText />
				<InputText placeholder="Rua | Avenida" />
				<div>
					<InputText />
					<InputText />
				</div>
				<div>
					<InputText />
					<InputText />
					<InputText />
				</div>
			</form>
		</section>
	)
}
