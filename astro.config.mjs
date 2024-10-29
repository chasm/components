// @ts-check
import { defineConfig } from 'astro/config';
import basicSsl from "@vitejs/plugin-basic-ssl"

// https://astro.build/config
export default defineConfig({
	devToolbar: {
		enabled: false,
	},
	markdown: {
		syntaxHighlight: "prism",
	},
	vite: {
		plugins: [
			basicSsl({
				name: "localhost",
				domains: ["*.localhost", "localhost"],
				certDir: "/Users/guy/.ssh",
			}),
		],
		server: {
			https: true,
		},
	}
});
