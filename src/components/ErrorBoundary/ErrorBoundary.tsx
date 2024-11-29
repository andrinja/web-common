import {Component, ReactNode} from 'react';
import Box from '@mui/material/Box';
import CommonError from 'errors/CommonError';
import ErrorPage from 'components/ErrorPage';
import React from 'react';

type State = {
	error?: CommonError
	hasError: boolean
};

export default class ErrorBoundary extends Component<{children: ReactNode}, State> {
	constructor(props: {children: ReactNode}) {
		super(props);
		this.state = {
			error: undefined,
			hasError: false,
		};
	}

	static getDerivedStateFromError(error: CommonError) {
		return {error, hasError: true};
	}

	render() {
		if (this.state.hasError && this.state.error) {
			return (
				<Box height="100vh">
					<ErrorPage error={this.state.error}/>
				</Box>
			);
		}
		return this.props.children;
	}
}
