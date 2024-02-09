import { Placeholder } from "./placeholder";

export default {
	title: "Компоненты/Placeholder",
	component: Placeholder,
	parameters: {
		layout: "centered",
		status: {
			type: "beta", // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
		},
		tags: ["autodocs"],
	},

	tags: ["autodocs"],
};

export const Base = {
	args: {
		text: "Привет дружище!",
	},
};
