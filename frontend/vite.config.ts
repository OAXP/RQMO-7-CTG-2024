import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/RQMO-7-CTG-2024/',
	plugins: [react(), tsconfigPaths()],
	server: {
		watch: {
			usePolling: true,
		},
	},
    assetsInclude: ["**/*.glb"],
});
