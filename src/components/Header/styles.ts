import styled from 'styled-components'

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

	@media (max-width: 1120px) {
		padding: 2rem;
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
	background: ${(props) => props.theme.colors['purple-light']};
	border-radius: 6px;

	svg {
		color: ${(props) => props.theme.colors['purple']};
	}

	p {
		color: ${(props) => props.theme.colors['purple-dark']};
	}

	@media (max-width: 1120px) {
		p {
			font-size: ${(props) => props.theme.sizes['sm']};
		}
	}
`
export const ShoppingIconWithNotification = styled.button`
	position: relative;
	border: none;
	background-color: ${(props) => props.theme.colors.transparent};

	span {
		position: absolute;
		right: -8.35px;
		top: -8px;
		font-size: ${(props) => props.theme.sizes['sm']};
		color: ${(props) => props.theme.colors.white};
		font-weight: 700;
		text-align: center;
		border-radius: 50%;
		background: ${(props) => props.theme.colors['yellow-dark']};
		width: 1.25rem;
		height: 1.25rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`
