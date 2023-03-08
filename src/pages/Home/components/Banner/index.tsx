import banner from "~/assets/illustration/homeBanner.svg"

export function Banner() {
	return (
		<section>
			<div className="grid">
				<section>
					<h1>Encontre o café perfeito para qualquer hora do dia</h1>
					<p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
				</section>
				<div className="grid">
					<div>item 1</div>
					<div>item 2</div>
					<div>item 3</div>
					<div>item 4</div>
				</div>
			</div>
			<img
				src={banner}
				alt="Imagem de um copo de café inclinado com o logo da marca Coffee Delivery e ao fundo amarelo tem grãos de café"
			/>
		</section>
	)
}
