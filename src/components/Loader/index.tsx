import { LoaderContainer, LoaderSpanContainer } from './styles'

export type LoaderProps = {
	size: number
}

export function Loader({ size }: LoaderProps) {
	return (
		<LoaderContainer>
			<LoaderSpanContainer data-testid="span-loader" $size={size} />
		</LoaderContainer>
	)
}
