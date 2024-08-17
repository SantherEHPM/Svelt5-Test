import nodeAdapter from '@sveltejs/adapter-node';
import staticAdapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sveltePreprocess } from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	preprocess: sveltePreprocess({
		sass:{}
	}),
	kit: {
		adapter: staticAdapter(),
		adapter: nodeAdapter(),
		paths: {
			assets: process.argv.includes('dev') ? '' : process.env.VITE_BASE_URL,
			base: process.argv.includes('dev') ? '' : process.env.VITE_BASE_URL
		}
	}
};

export default config;
