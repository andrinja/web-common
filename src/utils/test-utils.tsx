import '@testing-library/jest-dom';
import React, {ReactElement, ReactNode} from 'react';
import {RenderOptions, RenderResult, render} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from '@mui/material/styles';
import theme from '../themes/yourbrand';

const CustomWrapper = function({children}: {children?: ReactNode}) {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				{children}
			</BrowserRouter>
		</ThemeProvider>
	);
};

const customRender = (ui: ReactElement, options?: RenderOptions): RenderResult =>
	render(ui, {wrapper: CustomWrapper, ...options});

interface WrapperState {
	_valueTracker?: {
		getValue(): string
		setValue(value: string): void
		stopTracking(): void
	}
}

/**
 * See https://github.com/facebook/react/issues/10135#issuecomment-500929024
 */
export function setReactInputValue(input: HTMLInputElement & WrapperState, value: string) {
	const previousValue = input.value;

	input.value = value;

	const tracker = input._valueTracker;
	if (tracker) {
		tracker.setValue(previousValue);
	}

	input.dispatchEvent(new Event('change', {bubbles: true}));
}

export * from '@testing-library/react';
export {customRender as render};
