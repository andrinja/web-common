import React, {useCallback} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CenterAlign from 'components/CenterAlign';
import CommonError from 'errors/CommonError';
import Icon from 'components/Icon';
import Typography from '@mui/material/Typography';
import {useTranslation} from 'react-i18next';

export type Props = {
	error: CommonError
	resetErrorBoundary?: (...args: unknown[]) => void
};

export default function ErrorPage({error, resetErrorBoundary}: Props) {
	const {t} = useTranslation();
	const image = <Icon name={error.iconName || 'ErrorGeneral'}/>;

	const handleClick = useCallback(() => {
		typeof error.action === 'function' && error.action();

		resetErrorBoundary && resetErrorBoundary();
	}, [error, resetErrorBoundary]);

	return (
		<CenterAlign>
			<Typography variant="h3">{error.title}</Typography>
			<Box color="text.secondary" sx={{marginBlockStart: 1}} typography="body2">
				{error.caption}
			</Box>
			{(error.action || resetErrorBoundary) && (
				<Box sx={{marginBlockStart: 2}}>
					<Button onClick={handleClick} variant="contained">
						{error.actionLabel || t('Try again')}
					</Button>
				</Box>
			)}
			<Box sx={{marginBlockStart: 2}}>
				{image}
			</Box>
		</CenterAlign>
	);
}
