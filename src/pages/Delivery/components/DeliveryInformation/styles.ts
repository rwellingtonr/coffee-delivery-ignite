import styled from "styled-components"

const iconVariants = {
	purple: "purple",
	yellow: "yellow",
	darkYellow: "yellow-dark",
} as const

type IconVariantProps = {
	variant: keyof typeof iconVariants
}

export const DeliveryInformationContainer = styled.section`
	padding: 1px;
	border-radius: 6px 36px;
	background: linear-gradient(
		to right,
		${(props) => props.theme.colors["yellow"]},
		${(props) => props.theme.colors["purple"]}
	);
`
export const DeliveryContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	border-radius: 6px 36px;
	background-color: ${(props) => props.theme.colors["background"]};
	padding: 2.5rem;
	gap: 2rem;

	.delivery-information {
		display: flex;
		align-items: center;
		gap: 0.75rem;

		.payment {
			text-transform: capitalize;
		}
	}
`

export const IconWrapper = styled.div<IconVariantProps>`
	background-color: ${(props) => props.theme.colors[iconVariants[props.variant]]};
	display: flex;
	justify-content: center;
	align-items: center;

	padding: 0.5rem;
	border-radius: 50%;

	svg {
		color: ${(props) => props.theme.colors["background"]};
	}
`
export const DeliveryInformationWrapper = styled.div`
	color: ${(props) => props.theme.colors["base-text"]};

	span {
		font-weight: 700;
	}
`
