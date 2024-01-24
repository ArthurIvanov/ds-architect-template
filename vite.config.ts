import { defineConfig } from "vite";
import * as viteCopy from "vite-plugin-copy";
import dts from "vite-plugin-dts";
import path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [
		viteCopy.copy([{ src: "src/assets/fonts/*", dest: "dist/fonts" }], {
			hook: "writeBundle",
		}),

		react(),

		dts({
			insertTypesEntry: true,
		}),
	],
	build: {
		lib: {
			entry: path.resolve(__dirname, "src/lib/index.ts"),

			name: "DSArchitectCourse",

			formats: ["es", "umd"],

			fileName: (format) => `ui.${format}.js`,
		},

		rollupOptions: {
			external: ["react", "react-dom", "styled-components"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
					"styled-components": "styled",
				},
			},
		},
	},
});
