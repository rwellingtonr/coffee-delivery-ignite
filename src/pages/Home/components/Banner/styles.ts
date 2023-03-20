import styled from "styled-components"
import type { TopicVariants } from "./elements"
import backgroundImage from "~/assets/illustration/Background.png"

type IconVariant = {
	variant: TopicVariants
}

export const BannerContainer = styled.section`
	display: flex;
	background: center/cover url(${backgroundImage}) no-repeat;
	gap: 3.5rem;
	justify-content: center;
	align-items: center;
	height: 34rem;

	.heading {
		display: flex;
		width: 36.75rem;
		flex-direction: column;
		align-items: flex-start;
		gap: 4.125rem;
	}
	.information {
		display: grid;
		grid-template-columns: repeat(2, auto);
		gap: 1.25rem 2.5rem;
		flex-wrap: wrap;
	}

	img {
		width: 29.75rem;
		height: auto;
	}

	@media (max-width: 860px) {
		flex-direction: column;
		height: auto;

		.information {
			width: 100%;
			grid-template-columns: repeat(1, auto);
			justify-content: center;
		}
		img {
			display: none;
		}
	}
`
export const HeadingWrapper = styled.section`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	h1 {
		font-weight: 800;
		font-size: ${(props) => props.theme.sizes["5xlg"]};
		color: ${(props) => props.theme.colors["base-title"]};
	}
	p {
		font-size: ${(props) => props.theme.sizes["xlg"]};
		color: ${(props) => props.theme.colors["base-subtitle"]};
	}
	@media (max-width: 860px) {
		align-items: center;
		width: 100%;
		h1 {
			font-size: ${(props) => props.theme.sizes["xlg"]};
		}
		p {
			font-size: ${(props) => props.theme.sizes["sm"]};
		}
	}
`

export const TopicContainer = styled.div`
	display: flex;
	gap: 0.75rem;
	align-items: center;

	p {
		color: ${(props) => props.theme.colors["base-text"]};
		font-size: ${(props) => props.theme.sizes["md"]};
		flex: 1;
	}
`

export const IconWrapper = styled.div<IconVariant>`
	background-color: ${(props) => props.theme.colors[props.variant]};
	color: ${(props) => props.theme.colors.white};
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.5rem;

	border-radius: 50%;
`
