import dmnoAstroIntegration from '@dmno/astro-integration';
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import paraglide from "@inlang/paraglide-astro"

// https://astro.build/config
export default defineConfig({
  i18n: {
		locales: ["en", "es", "fr", "de"],
		defaultLocale: "en",
	},
	integrations: [
		paraglide({
			// recommended settings
			project: "./project.inlang",
			outdir: "./src/paraglide", //where your files should be
		}),
dmnoAstroIntegration(), react(), sitemap()]
});