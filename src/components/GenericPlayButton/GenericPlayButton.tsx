import IconButton, {IconButtonProps} from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import {Icon} from 'components/Icon';
import React from 'react';
import {useTranslation} from 'react-i18next';

export type Props = IconButtonProps & {
	playIcon?: 'PlayArrow' | 'RadioLogo'
};
/**
 * Play button used on Cards etc.; Use along assigning `theme.mixins.genericPlayButton` to a wrapper
 * (e.g. the Card) for setting up the visibility of the buttons.
 */
export default function GenericPlayButton({playIcon = 'PlayArrow', onClick, ...rest}: Props) {
	const {t} = useTranslation();

	const props: IconButtonProps = {
		color: 'primary',
		...rest,
	};

	return (
		<Box className="MagentGenericPlayButton">
			<IconButton aria-label={t('Play')} onClick={onClick} {...props}>
				<Icon name={playIcon}/>
			</IconButton>
			<IconButton aria-label={t('Pause')} onClick={onClick} {...props}>
				<Icon name="Pause"/>
			</IconButton>
			<IconButton aria-label={t('is playing')} disabled {...props}>
				<Icon name="VolumeUp"/>
			</IconButton>
			<IconButton aria-label={t('loading')} disabled {...props}>
				<CircularProgress color="inherit" size={16}/>
			</IconButton>
		</Box>
	);
}