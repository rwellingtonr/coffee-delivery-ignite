import { DeliveryInformation } from "./components/DeliveryInformation"
import motoboy from "~/assets/illustration/motoboy.svg"
import { DeliveryContainer } from "./styles"

export function Delivery() {
	return (
		<DeliveryContainer>
			<div className="content">
				<div className="heading">
					<h1>Uhu! Pedido confirmado</h1>
					<p>Agora é só aguardar que logo o café chegará até você</p>
				</div>
				<DeliveryInformation />
			</div>
			<img src={motoboy} alt="Entregador em uma motocicleta roxa levando uma caixa marrom" />
		</DeliveryContainer>
	)
}
