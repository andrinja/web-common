import {default as MuiSnackbar, SnackbarProps as MuiSnackbarProps} from '@mui/material/Snackbar';
import React from 'react';
import {useSnackbar} from './SnackbarContext';

export type Props = Pick<MuiSnackbarProps, 'sx'>;

export default function Snackbar(props: Props) {
	const {isSnackbarVisible, message, setIsSnackbarVisible} = useSnackbar();

	if (!isSnackbarVisible) {
		return null;
	}

	return (
		<MuiSnackbar
			message={message}
			onClose={() => setIsSnackbarVisible(false)}
			open={isSnackbarVisible}
			{...props}
		/>
	);
}
