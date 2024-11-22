import aspectRatio from "@tailwindcss/aspect-ratio";
import containerQueries from "@tailwindcss/container-queries";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		colors: {
			"rose-pine-base": "#232136",
			"rose-pine-surface": "#2a273f",
			"rose-pine-overlay": "#393552",
			"rose-pine-love": "#eb6f92",
			"rose-pine-rose": "#ea9a97",
			"rose-pine-gold": "#f6c177",
			"rose-pine-iris": "#c4a7e7",
			"rose-pine-pine": "#31748f",
			"rose-pine-foam": "#9ccfd8",
			"rose-pine-text": "#e0def4",
		},
		fontFamily: {
      mono: ["mononoki", "mono"],

		},
		extend: {},
	},

	plugins: [typography, forms, containerQueries, aspectRatio],
} satisfies Config;
