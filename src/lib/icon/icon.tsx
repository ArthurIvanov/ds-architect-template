import { FC } from "react";
import styled from "styled-components";
import { icons } from "./icons-set";

export interface ISvgProps {
	/**
	 * Меняет display с inline-block на block
	 */
	block?: boolean;

	/**
	 * Название иконки
	 */
	iconName?: string;

	/**
	 * Размер иконки
	 */
	size?: number;
}

const Svg = styled.svg<ISvgProps>`
	display: ${(props) => (props.block ? "block" : "inline-block")};
	vertical-align: middle;
	shape-rendering: inherit;
	transform: translate3d(0, 0, 0);
`;

const Path = styled.path`
	fill: currentColor;
`;

/**
 * Компонент иконка
 */
export const Icon: FC<ISvgProps> = ({
	iconName = "browser",
	block = false,
	size = 24,
	...props
}) => {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={size}
			height={size}
			block={block}
			{...props}
		>
			<Path d={icons[iconName]} />
		</Svg>
	);
};
