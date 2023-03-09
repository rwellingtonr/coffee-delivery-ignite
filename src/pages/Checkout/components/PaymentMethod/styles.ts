import styled from "styled-components"

export const PaymentContainer = styled.section`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 2.5rem;
	gap: 2rem;

	width: 40rem;

	background: ${(props) => props.theme.colors["base-card"]};
	border-radius: 6px;
`
