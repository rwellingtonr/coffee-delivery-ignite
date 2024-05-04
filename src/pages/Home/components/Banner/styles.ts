import styled from 'styled-components'
import type { TopicVariants } from './elements'
import backgroundImage from '~/assets/illustration/Background.png'
import { media } from '~/styles/breakpoints'

type IconVariant = {
	variant: TopicVariants
}

export const BannerContainer = styled.section`
	display: flex;
	background: center/cover url(${backgroundImage}) no-repeat;
	gap: 3.5rem;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	height: auto;

	.heading {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 4.125rem;
	}

	.information {
		display: grid;
		grid-template-columns: auto;
		gap: 1.25rem 2.5rem;
		flex-wrap: wrap;
		justify-content: center;
		width: 100%;
	}

	img {
		width: 20rem;
		height: auto;
	}

	${media.sm`
		.information{
			grid-template-columns: repeat(2, 1fr);
			padding: 0 1.5rem;
		}

		img {
			width: 25rem;
		}
	`}

	${media.lg`
		flex-direction: row;
		height: 34rem;
		padding: 0 2rem;
		.information {
			grid-template-columns: repeat(2, auto);
			justify-content: flex-start;
		}

		img {
			width: 29.75rem;
			height: auto;
		}

	`}
`
export const HeadingWrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;

	h1,
	p {
		text-align: center;
	}

	h1 {
		font-weight: 800;
		font-size: ${(props) => props.theme.sizes['4xlg']};
		color: ${(props) => props.theme.colors['base-title']};
	}
	p {
		font-size: ${(props) => props.theme.sizes['lg']};
		color: ${(props) => props.theme.colors['base-subtitle']};
	}

	${media.sm`
			p{
				font-size: ${(props) => props.theme.sizes['xlg']};
			}
			h1{
				font-size: ${(props) => props.theme.sizes['6xl']};
			}
		`}

	${media.lg`
		align-items: flex-start;
		
			h1,
			p {
				text-align: left;
			}

			h1{
				font-size: ${(props) => props.theme.sizes['5xlg']};
			}
	`}
`

export const TopicContainer = styled.div`
	display: flex;
	gap: 0.75rem;
	align-items: center;

	p {
		color: ${(props) => props.theme.colors['base-text']};
		font-size: ${(props) => props.theme.sizes['md']};
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
