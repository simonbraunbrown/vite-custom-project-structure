import { defineConfig } from 'vite';
import Unocss from 'unocss/vite';
import { presetIcons } from 'unocss';
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders';
import path from 'path';

export default defineConfig({
	root: './templating/',
	base: '',

	resolve: {
		preserveSymlinks: true,
	},

	cacheDir: path.resolve(__dirname, 'node_modules/.vite'),
	publicDir: path.resolve(__dirname, './../public/'),

	css: {
		devSourcemap: true,
	},

	build: {
		outDir: path.resolve(__dirname, './../dist/'),
		emptyOutDir: true,
		manifest: true,
		ssrManifest: true,
		minify: 'esbuild',

		rollupOptions: {
			output: {
				assetFileNames: (assetInfo) => {
					let extType = assetInfo.name.split('.').at(1);
					if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
						extType = 'img';
					}
					return `assets/${extType}/[name]-[hash][extname]`;
				},
				chunkFileNames: 'assets/js/[name]-[hash].js',
				entryFileNames: 'assets/js/[name]-[hash].js',
			},
		},
	},

	plugins: [
		Unocss({
			presets: [
				presetIcons({
					prefix: 'icon-',
					collections: {
						custom: FileSystemIconLoader('./templating/src/icons/', (svg) =>
							svg.replace(/#fff/, 'currentColor')
						),
					},
				}),
			],
		}),
	],
});
