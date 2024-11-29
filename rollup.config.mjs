import babel from '@rollup/plugin-babel';
import cleaner from 'rollup-plugin-cleaner';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import svgr from '@svgr/rollup';
import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: 'dist/index.cjs',
				format: 'cjs',
				sourcemap: true,
			},
			{
				file: 'dist/index.js',
				format: 'esm',
				sourcemap: true,
			},
		],
		plugins: [
			cleaner({
				targets: [
					'./dist',
				],
			}),
			url({destDir: 'dist/public/fonts', include: ['**/*.woff*'], publicPath: '/fonts/'}),
			svgr({jsxRuntime: 'classic'}),
			peerDepsExternal(),
			resolve(),
			commonjs({
				exclude: 'src/**',
			}),
			babel({
				babelHelpers: 'bundled',
				exclude: 'node_modules/**',
			}),
			typescript({
				exclude: [".storybook/**/*.ts", "**/.stories.tsx", "**/*.test.ts"]
			}),
			copy({
				targets: [
					{src: 'src/images/*', dest: 'dist/public'},
					{src: 'src/themes/theme.d.ts', dest: 'dist/@types/common', rename: 'index.d.ts'},
				],
			}),
		],
	},
];
