import styled from "styled-components"

export const HeaderContainer = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 10rem;

	img {
		height: 2.5rem;
		width: auto;
	}
`

export const ActionsWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 0.75rem;
`

export const LocationWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.5rem;
	gap: 4px;
	background: ${(props) => props.theme.colors["purple-light"]};
	border-radius: 6px;

	svg {
		color: ${(props) => props.theme.colors["purple"]};
	}

	p {
		color: ${(props) => props.theme.colors["purple-dark"]};
	}
`
