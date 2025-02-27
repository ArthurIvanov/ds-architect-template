import { colors, spacing, zIndices, typography } from "./tokens";

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

	spacing: {
		inner: {
			noGap: 0,
			closest: spacing[2],
			close: spacing[4],
			related: spacing[8],
			grouped: spacing[16],
		},

		outer: {
			close: spacing[4],
			related: spacing[8],
			grouped: spacing[16],
			subSection: spacing[24],
			section: spacing[48],
		},

		paddings: {
			compact: spacing[8],
			default: spacing[16],
			relaxed: spacing[24],
			large: spacing[32],
		},

		height: {
			xxxSmall: spacing[4],
			xxSmall: spacing[8],
			xSmall: spacing[16],
			small: spacing[24],
			base: spacing[40],
			large: spacing[48],
			xLarge: spacing[56],
			xxLarge: spacing[64],
		},
	},

	shadows: {
		surface: {
			elevated: `0px 1px 6px rgba(34, 49, 69, 0.12)`,
			dragged: `0px 2px 12px rgba(34, 49, 69, 0.12)`,
		},
		overlay: {
			content: `0px 2px 4px rgba(14, 19, 27, 0.16)`,
			tooltip: `0px 2px 8px rgba(14, 19, 27, 0.12)`,
			drawer: `0px 2px 12px rgba(14, 19, 27, 0.12)`,
			modal: `0px 2px 24px rgba(34, 49, 69, 0.16)`,
			notification: `0px 2px 24px rgba(34, 49, 69, 0.16)`,
		},
	},

	typography: {
		family: {
			base: typography.fontFamily.base,
			heading: typography.fontFamily.heading,
			monospace: typography.fontFamily.monospace,
		},
		fontSize: {
			h1: typography.fontSize.h1,
			h2: typography.fontSize.h2,
			h3: typography.fontSize.h3,
			h4: typography.fontSize.h4,
			h5: typography.fontSize.h5,
			h6: typography.fontSize.h6,
			base: typography.fontSize.base,
			small: typography.fontSize.small,
		},

		lineHeight: {
			h1: typography.lineHeight.h1,
			h2: typography.lineHeight.h2,
			h3: typography.lineHeight.h3,
			h4: typography.lineHeight.h4,
			h5: typography.lineHeight.h5,
			h6: typography.lineHeight.h6,
			base: typography.lineHeight.base,
			small: typography.lineHeight.small,
		},

		fontWeight: {
			regular: typography.fontWeight.regular,
			medium: typography.fontWeight.medium,
			semiBold: typography.fontWeight.semiBold,
		},
	},

	cornerRadius: {
		projectBase: spacing[1],
		micro: spacing[2],
		componentInner: spacing[4],
		componentBase: spacing[8],
		sectionInner: spacing[16],
		sectionBase: spacing[24],
	},

	zIndices: {
		...zIndices,
	},

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
