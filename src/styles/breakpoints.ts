import { css, type CSSObject, type Interpolation, type ThemedStyledProps } from 'styled-components'
import type { defaultTheme } from './theme'

const device = {
	sm: '600px',
	md: '900px',
	lg: '1280px',
} as const

type InterpolationProps = Array<Interpolation<ThemedStyledProps<{}, typeof defaultTheme>>>

type MediaFunction = (
	first: TemplateStringsArray | CSSObject,
	...interpolations: InterpolationProps
) => ReturnType<typeof css>

interface Media {
	sm: MediaFunction
	md: MediaFunction
	lg: MediaFunction
}

export const media: Media = {
	sm: (...args) => css`
		@media (min-width: ${device.sm}) {
			${css(...args)};
		}
	`,
	md: (...args) => css`
		@media (min-width: ${device.md}) {
			${css(...args)};
		}
	`,
	lg: (...args) => css`
		@media (min-width: ${device.lg}) {
			${css(...args)};
		}
	`,
}
