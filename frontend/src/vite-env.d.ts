/// <reference types="vite/client" />
// Declare module for .glb files
declare module '*.glb' {
	const src: string;
	export default src;
}
