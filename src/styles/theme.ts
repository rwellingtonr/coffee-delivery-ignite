const colors = {
	transparent: 'transparent',
	white: '#FFF',
	black: '#0000',
	background: '#FAFAFA',

	'yellow-dark': '#C47F17',
	yellow: '#DBAC2C',
	'yellow-light': '#F1E9C9',

	'purple-dark': '#4B2995',
	purple: '#8047F8',
	'purple-light': '#EBE5F9',

	'base-card': '#F3F2F2',
	'base-input': '#EDEDED',
	'base-button': '#E6E5E5',
	'base-hover': '#D7D5D5',

	'base-label': '#8D8686',
	'base-text': '#574F4D',
	'base-subtitle': '#403937',
	'base-title': '#272221',
} as const

const fonts = {
	roboto: "'Roboto', sans-serif",
	baloo: "'Baloo 2', cursive",
} as const

const sizes = {
	'2xsm': '0.625rem',
	xsm: '0.75rem',
	sm: '0.875rem',
	md: '1rem',
	lg: '1.125rem',
	xlg: '1.25rem',
	'3xlg': '1.5rem',
	'4xlg': '2rem',
	'5xlg': '3rem',
} as const

const lineHeight = {
	md: 1.3,
	lg: 1.6,
} as const

export const defaultTheme = {
	colors,
	fonts,
	sizes,
	lineHeight,
} as const
