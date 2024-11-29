import type {Preview, StoryContext, StoryFn} from '@storybook/react';
import {
	oisterOverlayTheme,
	oisterTheme,
	threeOverlayTheme,
	threeTheme,
	yourbrandOverlayTheme,
	yourbrandTheme
} from '../src/themes';
import CssBaseline from '@mui/material/CssBaseline';
import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {I18nextProvider} from 'react-i18next';
import {MemoryRouter} from 'react-router';
import {STORYBOOK} from './CONSTANTS';
import {ThemeProvider} from '@mui/material/styles';
import i18n from './i18n';

const withI18next = (Story: StoryFn) => {
	return (
		<Suspense fallback={<div>loading translations…</div>}>
			<I18nextProvider i18n={i18n}>
				<Story />
			</I18nextProvider>
		</Suspense>
	);
};

const withRouter = (Story: StoryFn) => {
	return (
		<MemoryRouter>
			<Routes>
				<Route path="/*" element={<Story/>}/>
			</Routes>
		</MemoryRouter>
	);
};

const getTheme = (themeId: string, isOverlay: boolean) => {
	if (themeId === 'three') {
		return isOverlay ? threeOverlayTheme : threeTheme;
	} else if (themeId === 'oister') {
		return isOverlay ? oisterOverlayTheme : oisterTheme;
	}
	return isOverlay ? yourbrandOverlayTheme : yourbrandTheme;
};

const withTheme = (Story: StoryFn, context: StoryContext): JSX.Element => {
	const {theme, isOverlay} = context.globals;
	const storyTheme = getTheme(theme, isOverlay);

	return (
		<ThemeProvider theme={storyTheme}>
			<CssBaseline/>
			<div
				style={{
					background: isOverlay ? storyTheme.palette.background.default : 'transparent',
					padding: '16px',
				}}
			>
				<Story/>
			</div>
		</ThemeProvider>
	);
};

const preview: Preview = {
	decorators: [withTheme, withRouter, withI18next],
	globalTypes: {
		theme: {
			name: 'Themes',
			description: 'Global theme for components',
			defaultValue: 'yourbrand',
			toolbar: {
				icon: 'circlehollow',
				items: [
					{value: 'yourbrand', icon: 'circle', title: 'yourbrand'},
					{value: 'three', icon: 'circle', title: 'three'},
					{value: 'oister', icon: 'circle', title: 'oister'},
				],
				dynamicTitle: true,
			},
		},
		isOverlay: {
			name: 'Overlay',
			description: 'Negative theme variant',
			defaultValue: false,
			toolbar: {
				icon: 'circlehollow',
				items: [
					{value: false, icon: 'circlehollow', title: 'default'},
					{value: true, icon: 'circle', title: 'negative'},
				],
				title: 'Overlay',
			},
		},
	},
	parameters: {
		backgrounds: {
			values: [
				{...STORYBOOK.BACKGROUND.DARK},
				{...STORYBOOK.BACKGROUND.LIGHT},
			],
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		options: {
			// @ts-ignore
			storySort: (a, b) => {
				return a.title.localeCompare(b.title, undefined, {numeric: true});
			},
		},
		viewport: {
			breakpointXS: {
				name: 'Breakpoint XS',
				styles: {
					height: '700px',
					width: '414px',
				},
			},
			breakpointSM: {
				name: 'Breakpoint SM',
				styles: {
					height: '700px',
					width: '567px',
				},
			},
			breakpointMD: {
				name: 'Breakpoint MD',
				styles: {
					height: '700px',
					width: '768px',
				},
			},
			breakpointLG: {
				name: 'Breakpoint LG',
				styles: {
					height: '700px',
					width: '1056px',
				},
			},
			breakpointXL: {
				name: 'Breakpoint XL',
				styles: {
					height: '700px',
					width: '1440px',
				},
			},
		},
	},
	tags: ['autodocs']
};

export default preview;
