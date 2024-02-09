import { colors } from "./tokens";

export const lightTheme = {
	colors: {
		bg: {
			calm: {
				section: colors.white,
				global: colors.grey[50],
				disabled: colors.grey[100],
			},
		},

		text: {
			calm: {
				main: colors.grey[50],
			},
			loud: {
				main: colors.grey[800],
				secondary: colors.grey[500],
				disabled: colors.grey[300],
			},
		},
	},

	spacing: {},

	shadows: {},

	typography: {},

	cornerRadius: {},

	zIndices: {},

	animation: {
		base: `0.2s ease-in-out`,
	},
};

export const darkTheme = {
	...lightTheme,
	colors: {
		bg: {
			calm: {
				section: colors.black,
				global: colors.grey[900],
				disabled: colors.grey[600],
			},
		},

		text: {
			calm: {
				main: colors.grey[700],
			},
			loud: {
				main: colors.grey[100],
				secondary: colors.grey[300],
				disabled: colors.grey[500],
			},
		},
	},
};
