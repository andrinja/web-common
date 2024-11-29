import React, {MouseEventHandler} from 'react';
import {ButtonBaseOwnProps} from '@mui/material/ButtonBase/ButtonBase';
import {Icon} from 'components/Icon';
import IconButton from '@mui/material/IconButton';
import {useTranslation} from 'react-i18next';

export type Props = {
	isPlaying?: boolean
	onClick?: MouseEventHandler
} & ButtonBaseOwnProps;

export default function PlayButton({isPlaying, ...rest}: Props) {
	const {t} = useTranslation();

	return (
		<IconButton
			aria-label={isPlaying ? t('Pause') : t('Play')}
			size="large"
			sx={{
				bgcolor: 'primary.main',
				color: 'common.white',
				':hover': {
					bgcolor: 'primary.dark',
				},
			}}
			{...rest}
		>
			<Icon name={isPlaying ? 'Pause' : 'PlayArrow'}/>
		</IconButton>
	);
}
