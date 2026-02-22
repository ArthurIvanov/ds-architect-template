import type { StorybookConfig } from "@storybook/react-vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		"@storybook/addon-onboarding",
		"@storybook/addon-docs",
		"@storybook/addon-themes",
	],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	docs: {
		autodocs: "tag",
	},
	viteFinal: (config) => {
		// Storybook 10: пакет @storybook/blocks удалён, блоки экспортируются из addon-docs
		config.resolve = config.resolve || {};
		config.resolve.alias = {
			...config.resolve.alias,
			"@storybook/blocks": "@storybook/addon-docs/blocks",
		};
		// Обход: addon-docs подставляет file:// URL в скомпилированный MDX;
		// 1) resolveId — резолвим file:// в реальный путь к модулю
		// 2) transform — подменяем file:// на пакетный путь в коде (на случай другого порядка плагинов)
		const mdxShimPath = path.resolve(
			__dirname,
			"../node_modules/@storybook/addon-docs/dist/mdx-react-shim.js"
		);
		config.plugins = config.plugins || [];
		config.plugins.push({
			name: "fix-mdx-react-shim-import",
			enforce: "post",
			resolveId(source) {
				if (
					source.startsWith("file://") &&
					source.includes("mdx-react-shim.js")
				) {
					return mdxShimPath;
				}
				return null;
			},
			transform(code, id) {
				if (
					code.includes("mdx-react-shim") &&
					code.includes("file://")
				) {
					return {
						code: code.replace(
							/file:\/\/\/[^"']+mdx-react-shim\.js/g,
							"@storybook/addon-docs/mdx-react-shim"
						),
						map: null,
					};
				}
				return null;
			},
		});
		return config;
	},
};
export default config;
