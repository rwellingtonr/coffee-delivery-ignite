import { LoaderContainer, LoaderSpanContainer } from "./styles"

export type LoaderProps = {
	size: number
}

export function Loader({ size }: LoaderProps) {
	return (
		<LoaderContainer>
			<LoaderSpanContainer size={size} />
		</LoaderContainer>
	)
}
