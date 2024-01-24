import type { Preview } from "@storybook/react";
import { GlobalStyle } from "../src/lib";
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
		status: {
			statuses: {
				released: {
					background: "#0000ff",
					color: "#ffffff",
					description: "This component is stable and released",
				},
			},
		},
	},
};

export default preview;

export const decorators = [
	(Story, context) => {
		return (
			<>
				<GlobalStyle />
				<Story />
			</>
		);
	},
];
