import Input, {InputProps} from 'components/Input';
import React, {useState} from 'react';

export type Props = {
	fontWeight?: 'fontWeightBold' | 'fontWeightRegular'
	maxLength?: number
	onChange?: (value: string) => void
	value?: string
} & InputProps;

export default function Textarea({
	fontWeight = 'fontWeightRegular',
	maxLength,
	onChange,
	value: initialValue = '',
	...rest
}: Props) {
	const [value, setValue] = useState(initialValue);

	const handleChange = (value: string) => {
		onChange && onChange(value);
		setValue(value);
	};

	return (
		<Input
			FormHelperTextProps={{sx: {textAlign: 'end'}}}
			InputProps={{sx: {fontWeight}}}
			helperText={maxLength && value.length >= 30 ? `${value.length}/${maxLength}` : null}
			inputProps={{...maxLength === undefined || maxLength <= 0 ? {} : {maxLength}}}
			multiline
			onChange={event => handleChange(event.target.value)}
			value={value}
			{...rest}
		/>
	);
}
