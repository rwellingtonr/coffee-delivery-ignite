import banner from "~/assets/illustration/homeBanner.svg"
import { topicElements } from "./elements"
import { BannerContainer, HeadingWrapper, IconWrapper, TopicContainer } from "./styles"

export function Banner() {
	return (
		<BannerContainer>
			<div className="heading">
				<HeadingWrapper>
					<h1>Encontre o café perfeito para qualquer hora do dia</h1>
					<p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
				</HeadingWrapper>
				<div className="information">
					{topicElements.map((topic) => (
						<TopicContainer key={topic.label}>
							<IconWrapper variant={topic.variant}>{topic.icon}</IconWrapper>
							<p>{topic.label}</p>
						</TopicContainer>
					))}
				</div>
			</div>
			<img
				src={banner}
				alt="Imagem de um copo de café inclinado com o logo da marca Coffee Delivery e ao fundo amarelo tem grãos de café"
			/>
		</BannerContainer>
	)
}
