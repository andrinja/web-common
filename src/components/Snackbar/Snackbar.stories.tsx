import type {Meta, StoryObj} from '@storybook/react';
import React, {useEffect} from 'react';
import {Snackbar, SnackbarContextProvider, SnackbarProps, useSnackbar} from './';

const snackbar: Meta<SnackbarProps & {message?: string}> = {
	component: Snackbar,
	argTypes: {
		message: {
			control: {
				type: 'text',
			},
		},
	},
	args: {
		message: 'Snackbar message',
	},
	parameters: {
		docs: {
			story: {
				iframeHeight: 200,
				inline: false,
			},
		},
	},
};

export default snackbar;

function TestComponent({message}: {message?: string}) {
	const {setSnackbarMessage} = useSnackbar();

	useEffect(() => {
		message && setSnackbarMessage(message);
	}, [message, setSnackbarMessage]);

	return null;
}

export const Default: StoryObj<SnackbarProps & {message: string}> = {
	render: ({message}) => (
		<SnackbarContextProvider>
			<TestComponent message={message}/>
			<Snackbar/>
		</SnackbarContextProvider>
	),
};
