import styled from "styled-components";
import { iconTypes } from "../icon/icon-types.ts";
import { Icon } from "../icon";

interface IBadgeProps {
	color?: "orange" | "blue" | "grey";
	disabled?: boolean;
	iconAfter?: iconTypes;
	text?: string;
}

// Больше рекомендация, обычно называют именем компонента а нет тега
const StyledBadge = styled.div<IBadgeProps>`
	${(props) =>
		`
        display: inline-flex;
		justify-content: center;
		align-items: center;
		gap: ${props.theme.spacing.inner.close};
		font-family: ${props.theme.typography.fontFamily.text};
		font-size: ${props.theme.typography.fontSize.text.small};
	    line-height: ${props.theme.typography.lineHeight.text.small};
		font-weight: ${props.theme.typography.fontWeight.medium};
		border-radius: ${props.theme.borderRadius};
		padding: ${props.theme.spacing.padding.extraSmall} ${props.theme.spacing.padding.small};;
		background: unset;
    `}

    ${(props) =>
		props.color === "orange" &&
		`
        color: ${props.theme.colors.text.orange};
        background: ${props.theme.colors.background.orange};
    `}

	${(props) =>
		props.color === "blue" &&
		`
        color: ${props.theme.colors.text.blue};
        background: ${props.theme.colors.background.blue};
    `}

	${(props) =>
		props.color === "grey" &&
		`
        color: ${props.theme.colors.text.grey};
        background: ${props.theme.colors.background.grey};
    `}
`

export const Badge: React.FC<IBadgeProps> = ({
	color = "blue",
	iconAfter,
	text = "Топ цена",
}) => {
	return (
		<StyledBadge color={color}>
			{text}
			{iconAfter ? (
				<Icon iconName={iconAfter} size={12}/>
			) : null}
		</StyledBadge>
	);
};
