import React, {ReactNode} from 'react';
import Box from '@mui/material/Box';
import Icon from 'components/Icon';
import {styled} from '@mui/material/styles';

const StyledIconContainer = styled(Box)(({theme}) => ({
	alignItems: 'center',
	aspectRatio: 1,
	backgroundColor: theme.palette.text.secondary,
	display: 'flex',
	justifyContent: 'center',
	pointerEvents: 'none',
	'& > svg': {
		color: theme.palette.common.white,
		height: '50%',
		width: '50%',
	},
}));

export type Props = {
	borderRadius?: number | string
	children?: ReactNode
	for?: 'artist' | 'playlist' | 'radio' | 'release' | 'track'
};

function getIconName(type: Props['for']) {
	switch (type) {
		case 'artist':
			return 'MicExternal';
		case 'playlist':
			return 'FormatListBulleted';
		case 'radio':
			return 'RadioLogo';
		case 'release':
			return 'Album';
		case 'track':
			return 'AndroidNowPlaying';
		default:
			return 'music_note';
	}
}

export default function FallbackImage({borderRadius, children, for: type}: Props) {
	const iconName = getIconName(type);
	return (
		<StyledIconContainer borderRadius={borderRadius}>
			<Icon name={iconName}/>
			{children}
		</StyledIconContainer>
	);
}
