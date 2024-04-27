import { css, CSSObject, type SimpleInterpolation } from 'styled-components'

const device = {
	sm: '600px',
	md: '900px',
	lg: '1280px',
} as const

type MediaFunction = (
	first: TemplateStringsArray | CSSObject,
	...interpolations: SimpleInterpolation[]
) => ReturnType<typeof css>

interface Media {
	sm: MediaFunction
	md: MediaFunction
	lg: MediaFunction
}

export const media: Media = {
	sm: (...args) => css`
		@media (max-width: ${device.sm}) {
			${css(...args)};
		}
	`,
	md: (...args) => css`
		@media (max-width: ${device.md}) {
			${css(...args)};
		}
	`,
	lg: (...args) => css`
		@media (max-width: ${device.lg}) {
			${css(...args)};
		}
	`,
}
