import styled from "styled-components"

export const DeliveryContainer = styled.main`
	display: flex;
	align-items: flex-end;
	justify-content: center;
	gap: 6.375rem;
	margin-top: 5rem;

	img {
		width: 30.75rem;
	}

	.heading {
		margin-bottom: 40px;

		& > h1 {
			color: ${(props) => props.theme.colors["yellow-dark"]};
			font-weight: 800;
			font-size: ${(props) => props.theme.sizes["4xlg"]};
		}
		& > p {
			margin-top: 0.25rem;
			color: ${(props) => props.theme.colors["base-subtitle"]};
			font-size: ${(props) => props.theme.sizes["xlg"]};
		}
	}

	@media (max-width: 1062px) {
		flex-direction: column;
		align-items: center;
		gap: 3rem;
	}
`
