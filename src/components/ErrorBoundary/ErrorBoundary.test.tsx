import CommonError from 'errors/CommonError';
import {ErrorBoundary} from './index';
import React from 'react';
import {render} from 'utils/test-utils';

test('Basic rendering', () => {
	const {getByText} = render(
		<ErrorBoundary>
			<p>Content with no error</p>
		</ErrorBoundary>
	);

	expect(getByText('Content with no error')).toBeInTheDocument();
});

test('Catching and rendering error', () => {
	console.error = jest.fn();

	function ErrorComponent(): null {
		throw new CommonError('title', 'caption');
		return null;
	}

	const {getByText} = render(
		<ErrorBoundary>
			<ErrorComponent/>
		</ErrorBoundary>
	);

	expect(getByText('title')).toBeInTheDocument();
});
