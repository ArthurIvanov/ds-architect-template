import { FC } from "react";

export interface PlaceholderProps {
	/**
	 * Текстовое поля для ввода пользователем
	 */
	text: string;
}

/**
 * Тестовый компонент заглушка
 */
export const Placeholder: FC<PlaceholderProps> = ({ text = "Привет" }) => {
	return <div>{text}</div>;
};
