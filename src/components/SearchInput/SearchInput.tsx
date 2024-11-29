import React, {EventHandler, MouseEvent} from 'react';
import {TextField, TextFieldProps} from '@mui/material';
import Icon from '../Icon';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

export type Props = {
	onClearClick?: EventHandler<MouseEvent>
} & TextFieldProps;

export default function SearchInput({onClearClick, value, ...rest}: Props) {

	return (
		<TextField
			InputProps={{
				endAdornment: value
					? (
						<InputAdornment position="end">
							<IconButton color="secondary" onClick={onClearClick} size="small">
								<Icon name="Cancel"/>
							</IconButton>
						</InputAdornment>
					)
					: null,
				startAdornment: (
					<InputAdornment position="start">
						<Icon color="secondary" name="Search"/>
					</InputAdornment>
				),
			}}
			color="secondary"
			fullWidth
			sx={{
				width: {
					xs: 320,
					sm: 364,
					md: 376,
				},
				'.MuiOutlinedInput-root': {
					'.MuiInputAdornment-root, .MuiInputBase-input': {
						zIndex: 1,
					},
					'.MuiInputBase-input': {
						minHeight: 40,
						padding: 0,
					},
					'.MuiOutlinedInput-notchedOutline': {
						border: 'none',
					},
				},
			}}
			inputProps={{
				maxLength: 255,
			}}
			value={value}
			variant="outlined"
			{...rest}
		/>
	);
}
