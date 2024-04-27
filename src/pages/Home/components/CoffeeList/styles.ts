import styled from 'styled-components'

export const MainContainer = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 2rem;

	h2 {
		max-width: 70rem;
		width: 100%;
		text-align: left;
		margin-bottom: 3.375rem;
		font-size: ${(props) => props.theme.sizes['4xlg']};
		font-weight: 800;
		color: ${(props) => props.theme.colors['base-subtitle']};
	}
`

export const CardGridContainer = styled.div`
	display: grid;
	width: 100%;
	max-width: 70rem;
	grid-template-columns: repeat(auto-fit, 15.6rem);
	justify-content: center;
	grid-template-rows: 19.375rem;
	grid-gap: 2rem 2.5rem;
`

export const CardContainer = styled.article`
	height: 19.375rem;
	width: 16rem;
	background: ${(props) => props.theme.colors['base-card']};
	border-radius: 6px 36px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	img {
		margin-top: -1.25rem;
		width: 7.5rem;
		height: 7.5rem;
	}

	.coffeeTypes {
		margin-top: 1rem;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 0.25rem;

		span {
			padding: 0.25rem 0.5rem;
			border-radius: 100px;
			background: ${(props) => props.theme.colors['yellow-light']};

			text-transform: uppercase;
			color: ${(props) => props.theme.colors['yellow-dark']};
			font-size: ${(props) => props.theme.sizes['2xsm']};
			font-weight: 700;
		}
	}

	.title {
		font-weight: 700;
		margin-top: 1rem;
		text-align: center;
		font-size: ${(props) => props.theme.sizes['xlg']};
		line-height: ${(props) => props.theme.sizes['3xlg']};
		color: ${(props) => props.theme.colors['base-subtitle']};
	}

	.description {
		margin-top: 0.5rem;
		font-size: ${(props) => props.theme.sizes['sm']};
		text-align: center;
		width: 13.5rem;
		color: ${(props) => props.theme.colors['base-label']};
	}
`
