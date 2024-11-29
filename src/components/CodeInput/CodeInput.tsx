import {FormControlProps, FormHelperTextProps} from '@mui/material';
import Input, {InputProps} from '../Input';
import {useCallback, useEffect, useState} from 'react';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import React from 'react';

export type Props = {
	FormHelperTextProps?: FormHelperTextProps
	InputProps?: InputProps
	autoFocus?: boolean
	error?: boolean
	helperText?: string
	inputCount?: number
	name?: string
	onChange?: (code: string) => void
	onClick?: (event: React.MouseEvent) => void
	value?: string
} & Omit<FormControlProps, 'onChange'>;

export default function CodeInput({
	FormHelperTextProps,
	InputProps,
	autoFocus = true,
	error,
	helperText,
	inputCount = 6,
	name,
	onChange,
	onClick,
	value,
	...rest
}: Props) {
	const [inputs] = useState<HTMLInputElement[]>([]);
	const [isPasteEvent, setIsPasteEvent] = useState(false);
	const [values, setValues] = useState<string[]>([]);

	const setFocus = useCallback((index: number) => {
		const newTarget = inputs[index];

		if (newTarget) {
			newTarget.focus();
			newTarget.select();
		}
	}, [inputs]);

	const getUpdatedValues = useCallback(
		/**
		 * @param index Position to update
		 * @param number Sequence of characters to place at index
		 * @returns Updated character sequence
		 */
		(index: number, number: string): string[] => {
			const digits = number.split('');

			return Array(inputCount).fill('').map((_value, i) => {
				if (i < index) {
					return values[i];
				}
				if (i >= index && digits[i - index]) {
					return digits[i - index];
				}
				return values[i];
			});
		},
		[inputCount, values]
	);

	const compileCode = (values: string[]): string => {
		return values.map(value => value === '' ? ' ' : value).join('');
	};

	const handleClick = useCallback((event: React.MouseEvent): void => {
		const target = event.target as HTMLInputElement;
		const index = target.value !== ''
			? Number(target.dataset.id)
			: inputs.findIndex(input => input.value === '');
		setFocus(index);
		onClick && onClick(event);
	}, [inputs, onClick, setFocus]);

	const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		const number = event.target.value.replace(/\D/g, '');

		const index = isPasteEvent ? 0 : Number(event.target.dataset.id);
		const updatedValues = getUpdatedValues(index, number);
		const code = compileCode(updatedValues);

		setFocus(index + 1);

		setValues(updatedValues);

		if (number.length > 1 && isPasteEvent) {
			setFocus(number.length - 1);
			setIsPasteEvent(false);
		}

		if (onChange && code) {
			onChange(code);
		}
	}, [getUpdatedValues, isPasteEvent, onChange, setFocus]);

	const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
		const target = event.target as HTMLInputElement;
		const index = Number(target.dataset.id);
		const nextTarget = inputs[index + 1];
		const prevTarget = inputs[index - 1];

		switch (event.key) {
			case 'ArrowLeft':
				event.preventDefault();
				if (prevTarget) {
					prevTarget.focus();
					prevTarget.select();
				}
				break;
			case 'ArrowRight':
				event.preventDefault();
				if (nextTarget && target.value !== '') {
					nextTarget.focus();
					nextTarget.select();
				}
				break;
			case 'Backspace':
				event.preventDefault();

				inputs[index].value = '';
				const updatedValues = values.slice();
				updatedValues[index] = '';
				setValues(updatedValues);

				if (inputs[index].value === '' && prevTarget) {
					prevTarget.focus();
					prevTarget.select();
				}

				onChange && onChange(compileCode(updatedValues));
				break;
			case 'Delete':
				event.preventDefault();

				inputs[index].value = '';
				const newValues = values.slice();
				newValues[index] = '';
				setValues(newValues);

				onChange && onChange(compileCode(newValues));
				break;
			case 'E':
			case 'e':
				// https://stackoverflow.com/a/31706796
			// eslint-disable-next-line no-fallthrough
			case '.':
				event.preventDefault();
				break;
			default:
				break;
		}
	}, [inputs, onChange, values]);

	useEffect(() => {
		const digits = value?.toString().split('');
		const digitsArray = digits?.map(digit => digit === ' ' ? '' : Number(digit));

		setValues(
			Array.from(Array(inputCount).keys())
				.map((_, i) => value && digitsArray && digitsArray[i].toString() || '')
		);
	}, [inputCount, value]);

	return (
		<FormControl {...rest}>
			<Grid container item justifyContent="space-between">
				{values.map((digit, index) => (
					<Input
						autoFocus={!value && autoFocus && (index === 0)}
						error={error}
						inputProps={{
							autoComplete: 'off',
							'data-id': index,
							pattern: '[0-9]{1}',
							type: 'number',
						}}
						inputRef={(ref: HTMLInputElement) => {
							inputs[index] = ref;
						}}
						key={`input-${index}`}
						name={name}
						onChange={handleChange}
						onClick={handleClick}
						onFocus={(event: React.FocusEvent<HTMLInputElement>) => event.target.select()}
						onKeyDown={handleKeyDown}
						onPaste={() => setIsPasteEvent(true)}
						sx={theme => ({
							p: 0,
							input: {
								appearance: 'textfield',
								fontSize: theme.typography.h1.fontSize,
								margin: 0,
								textAlign: 'center',
								width: '44px',
								'&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
									WebkitAppearance: 'none',
								},
							},
						})}
						value={digit || ''}
						{...InputProps}
					/>
				))}
			</Grid>
			{helperText && (
				<FormHelperText
					error={error}
					sx={{marginBlockStart: 1, textAlign: 'center'}}
					{...FormHelperTextProps}
				>
					{helperText}
				</FormHelperText>
			)}
		</FormControl>
	);
}
