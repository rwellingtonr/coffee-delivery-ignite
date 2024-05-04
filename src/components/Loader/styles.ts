import styled, { keyframes } from 'styled-components'

const motion = keyframes`
    0% {
			box-shadow: 2px 0px #000, 12px 0px #121213,
				20px 0px rgba(255, 255, 255, 0);
		}
		50% {
			box-shadow: 2px -5px #000, 12px -3px #121214,
				20px -2px #121213;
		}
		100% {
			box-shadow: 2px -8px #121212, 12px -5px #121614,
				20px -5px #121213;
		}
`

type LoaderStyles = {
	readonly $size: number
}

export const LoaderContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const LoaderSpanContainer = styled.span<LoaderStyles>`
	width: ${(props) => props.$size}rem;
	height: ${(props) => props.$size * 0.83}rem;
	margin-top: ${(props) => props.$size * 0.625}rem;
	display: inline-block;
	position: relative;
	background-color: ${(props) => props.theme.colors['base-subtitle']};
	border-radius: 15% 15% 35% 35%;

	&::after {
		content: '';
		box-sizing: border-box;
		position: absolute;
		left: ${(props) => props.$size * 0.91}rem;
		top: 0.5rem;
		border: 4px solid ${(props) => props.theme.colors['base-text']};
		width: ${(props) => props.$size * 0.33}rem;
		height: ${(props) => props.$size * 0.41}rem;
		border-radius: 0 4px 4px 0;
	}

	&::before {
		content: '';
		position: absolute;
		width: 1px;
		height: 0.75rem;
		top: -1rem;
		left: 0.75rem;
		box-sizing: border-box;
		animation: ${motion} 0.5s ease infinite;
	}
`
