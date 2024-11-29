import type {StorybookConfig} from '@storybook/react-webpack5';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import path from 'path';

const config: StorybookConfig = {
	addons: [
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-links',
		'@storybook/addon-webpack5-compiler-babel',
		'storybook-addon-pseudo-states'
		],
	core: {
		disableTelemetry: true,
	},
	framework: {
		name: '@storybook/react-webpack5',
		options: {},
	},
	staticDirs: ['./static'],
	stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
	typescript: {
		check: false,
		checkOptions: {},
		reactDocgen: 'react-docgen-typescript',
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			propFilter: prop => {
				if (!prop.declarations) {
					return false;
				}
				for (const declaration of prop.declarations) {
					if (/node_modules/.test(declaration.fileName)) {
						return false;
					}
				}
				return true;
			},
		},
	},
	webpackFinal: async config => {
		const toPath = (filePath: string) => path.join(process.cwd(), filePath);

		config.module = config.module || {};
		config.module.rules = config.module.rules || [];
		config.resolve = config.resolve || {};

		config.module.rules.push({
			test: /\.svg$/,
			use: ['url-loader'],
			include: path.resolve(__dirname, '../storybook-static'),
		});
		return {
			...config,
			resolve: {
				...config.resolve,
				alias: {
					...config.resolve.alias,
					'@emotion/core': toPath('node_modules/@emotion/react'),
					'emotion-theming': toPath('node_modules/@emotion/react'),
				},
				plugins: (config.resolve.plugins || []).concat([new TsconfigPathsPlugin()]),
			},
		};
	},
};
export default config;
