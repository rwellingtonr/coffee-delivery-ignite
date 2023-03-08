import styled from "styled-components"

export const CardFooter = styled.footer`
	display: flex;
	flex-direction: row;
	gap: 1.812rem;
	margin-top: 2rem;
`
export const TotalPriceWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 0.25rem;

	color: ${(props) => props.theme.colors["base-text"]};

	span {
		font-size: ${(props) => props.theme.sizes.sm};
	}

	h5 {
		font-weight: 800;
		font-size: ${(props) => props.theme.sizes["3xlg"]};
	}
`
export const CounterShippingCart = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 0.5rem;
`
