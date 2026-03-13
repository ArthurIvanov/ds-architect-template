import type { Preview } from "@storybook/react-vite";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "../src/lib";
import React from "react";

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	globalTypes: {
		theme: {
			description: "Global theme for components",
			defaultValue: "light",
			toolbar: {
				title: "Theme",
				icon: "circlehollow",
				items: [
					{
						value: "light",
						title: "Светлая тема",
						icon: "circlehollow",
					},
					{ value: "dark", title: "Темная тема", icon: "circle" },
				],
				dynamicTitle: true,
			},
		},
	},
};

export default preview;

export const decorators = [
	(Story: React.ComponentType, context: { globals: { theme?: string } }) => {
		const theme = context.globals.theme === "dark" ? darkTheme : lightTheme;
		return (
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Story />
			</ThemeProvider>
		);
	},
];
