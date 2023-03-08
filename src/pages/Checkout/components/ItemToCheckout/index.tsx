import arabian from "~/assets/coffee/arabian.svg"
import { Counter } from "~/components/Counter"

export function ItemToCheckout() {
	const first = (num: number) => {}
	return (
		<>
			<div>
				<div>
					<img src={arabian} alt="" />
					<div>
						<p>Nome do Café</p>
						<div>
							<Counter currentValue={1} handleCounter={first} />
							<span>Remover</span>
						</div>
					</div>
				</div>

				<span>R$ 9,90</span>
			</div>
			<hr />
		</>
	)
}
