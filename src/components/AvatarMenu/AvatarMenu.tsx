import Box, {BoxProps} from '@mui/material/Box';
import ContextMenu, {ContextMenuProps} from '../ContextMenu';
import React, {ReactElement, useRef, useState} from 'react';
import AvatarFallbackIcon from './Avatar_fallback.svg';
import Button from '@mui/material/Button';
import Icon from 'components/Icon';
import Typography from '@mui/material/Typography';
import {useTheme} from '@mui/material/styles';

export type Props = {
	ContextMenuProps?: Omit<ContextMenuProps, 'open' | 'setOpen'>
	children?: ReactElement | ReactElement[]
	displayName?: string
} & BoxProps;

export default function AvatarMenu({
	ContextMenuProps = {},
	children,
	displayName,
	...rest
}: Props) {

	const buttonRef = useRef(null);
	const [open, setOpen] = useState(false);
	const theme = useTheme();

	return (
		<Box {...rest}>
			<ContextMenu
				anchorEl={buttonRef.current}
				modifiers={[{
					name: 'offset',
					options: {offset: [0, parseInt(theme.spacing(1))]},
				}]}
				placement="bottom-end"
				open={open}
				setOpen={setOpen}
				{...ContextMenuProps}
			>
				{children}
			</ContextMenu>
			<Button
				color="secondary"
				disabled={displayName === undefined}
				endIcon={<Icon name={open ? 'ExpandLess' : 'ExpandMore'}/>}
				onClick={() => setOpen(!open)}
				ref={buttonRef}
				size="large"
				sx={{alignItems: 'center', display: 'flex', minWidth: 'auto', px: 1, textTransform: 'none'}}
				variant="text"
			>
				<Box pr={1} width="40px"><AvatarFallbackIcon/></Box>
				{displayName && (
					<Typography fontWeight="fontWeightMedium" variant="caption">
						{displayName}
					</Typography>
				)}
			</Button>
		</Box>
	);
}
