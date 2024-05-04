import styled, { keyframes, css } from 'styled-components'

type SkeletonContainerStyles = {
	readonly $width: string
	readonly $height: string
}

const pulse = keyframes`
  from {
    opacity: 0.8;
  }
  to {
    opacity: 0.3;
  }
`

export const SkeletonContainer = styled.div<SkeletonContainerStyles>`
	${(props) => css`
		width: ${props.$width};
		height: ${props.$height};
		border-radius: 0.5rem;
		background-color: ${props.theme.colors['base-hover']};
	`}

	animation: ${pulse} 1s ease-in-out infinite;
`
