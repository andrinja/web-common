import IconButton, {IconButtonProps} from '@mui/material/IconButton';
import Input, {InputProps} from '../Input';
import Icon from 'components/Icon';
import {InputAdornment} from '@mui/material';
import {InputProps as MuiInputProps} from '@mui/material/Input';
import React from 'react';
import {useState} from 'react';

export type Props = {
	IconButtonProps?: IconButtonProps
	InputProps?: MuiInputProps
} & InputProps;

export default function PasswordInput({IconButtonProps, InputProps, ...rest}: Props) {
	const [showPassword, setShowPassword] = useState(false);

	const endAdornment = (
		<InputAdornment position="end">
			<IconButton
				edge="end"
				onClick={() => setShowPassword(!showPassword)}
				{...IconButtonProps}
			>
				<Icon name={showPassword ? 'Visibility' : 'VisibilityOff'}/>
			</IconButton>
		</InputAdornment>
	);

	return (
		<Input
			InputProps={{endAdornment, ...InputProps}}
			type={showPassword ? 'text' : 'password'}
			{...rest}
		/>
	);
}
