import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import generatePackageJson from "rollup-plugin-generate-package-json";
import pkg from "./package.json";
import { getFolders } from "./scripts/build-util";

const plugins = [
	peerDepsExternal(), // Add the externals for me. [react, react-dom, styled-components]
	nodeResolve(), // Locates modules in the project's node_modules directory
	commonjs(), // converts CommonJS to ES6 modules
	typescript({
		useTsconfigDeclarationDir: true,
		tsconfig: "tsconfig.json",
		tsconfigOverride: {
			// Override base tsconfig.json during build
			exclude: [
				"**/stories/**",
				"**/__tests__/**",
				"**/__mocks__/**",
				"**/util/**",
				"**/custom-types/**",
			],
		},
	}),
	postcss({
		extract: true,
		modules: false,
		plugins: [require("postcss-import")],
	}),
	image(),
	json(),
	terser(), // Helps remove comments, whitespace or logging codes
];

const subfolderPlugins = (folderName) => [
	...plugins,
	generatePackageJson({
		baseContents: {
			name: `${pkg.name}/${folderName}`,
			private: true,
			main: "../cjs/index.js", // point to cjs format entry point
			module: "./index.js", // point to esm format entry point of indiv components
			types: "./index.d.ts", // point to esm format entry point of indiv components
		},
	}),
];

const folderBuildConfigs = getFolders("./src").map((folder) => {
	return {
		input: `src/${folder}/index.ts`,
		output: {
			file: `dist/${folder}/index.js`,
			sourcemap: true,
			exports: "named",
			format: "esm",
		},
		plugins: subfolderPlugins(folder),
		external: ["react", "react-dom", "styled-components"],
	};
});

export default [
	{
		input: "src/index.ts",
		output: [
			{
				file: pkg.module,
				format: "esm",
				sourcemap: true,
				exports: "named",
			},
			{
				file: pkg.main,
				format: "cjs",
				sourcemap: true,
				exports: "named",
			},
		],
		plugins,
		external: ["react", "react-dom", "styled-components"],
	},
	...folderBuildConfigs,
];
