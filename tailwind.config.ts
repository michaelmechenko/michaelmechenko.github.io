import aspectRatio from "@tailwindcss/aspect-ratio";
import containerQueries from "@tailwindcss/container-queries";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		colors: {
			"rose-pine-base": "#47365b",
			"rose-pine-surface": "#2a273f",
			"rose-pine-overlay": "#393552",
			"rose-pine-love": "#eb6f92",
			"rose-pine-rose": "#ea9a97",
			"rose-pine-gold": "#f6c177",
			"rose-pine-iris": "#c4a7e7",
			"rose-pine-pine": "#31748f",
			"rose-pine-foam": "#9ccfd8",
			"rose-pine-text": "#e0def4",

			"1-base": "#1f1d2e", // background
			"1-primary": "#393552", // foreground
			"1-tertiary": "#907aa9", // hyperlinks 493a5a
			"1-tertiary-darker": "#493a5a",
			"1-tertiary-lighter": "#a795bb",
      "1-tertiary-nav": "#272237",
			"1-text": "#e0def4",
		},
		fontFamily: {
			mono: ["Inconsolata", "mononoki", "mono"],
		},
		extend: {},
	},

	plugins: [typography, forms, containerQueries, aspectRatio],
} satisfies Config;
