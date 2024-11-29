import React, {ReactNode} from 'react';
import TextField, {TextFieldProps} from '@mui/material/TextField';

export type Props = {
	id?: string
	label?: ReactNode
} & TextFieldProps;

export default function Input({id, label, ...rest}: Props) {
	const inputId = id
		? id : label && typeof label === 'string'
			? label.toLowerCase().replace(' ', '-') : undefined;

	return (
		<TextField
			InputLabelProps={{shrink: true}}
			color="secondary"
			id={inputId}
			label={label}
			variant="standard"
			{...rest}
		/>
	);
}
