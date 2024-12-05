import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		rollupOptions: {
			output: {
				// Control asset file naming (e.g., for images, fonts, etc.)
				assetFileNames: 'assets/[name].[hash][extname]',
			},
		},
	},
	resolve: {
		// Optional: Customize how module paths are resolved
		alias: {
			$components: '/src/components',
			$lib: '/src/lib',
		},
	},
	server: {
		// Adjust server options if needed for local development
		fs: {
			// Allow serving files from one level up to the project root
			allow: ['..'],
		},
	},
});
