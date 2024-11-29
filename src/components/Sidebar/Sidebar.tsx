import Drawer, {DrawerProps} from '@mui/material/Drawer';
import React, {ReactNode} from 'react';
import Box from '@mui/material/Box';
import List from './List';
import {SidebarContextProvider} from './SidebarContext';
import SidebarSkeleton from './SidebarSkeleton';
import {useTheme} from '@mui/material/styles';

export type Props = {
	activePath?: string
	children?: ReactNode
	isReady?: boolean
	listAriaLabel?: string
	onClose?: () => void
} & DrawerProps;

export default function Sidebar({
	activePath,
	children,
	isReady = true,
	listAriaLabel = 'Menu',
	onClose,
	...rest
}: Props) {
	const {direction} = useTheme();

	if (!isReady) {
		return <SidebarSkeleton {...rest}/>;
	}

	return (
		<SidebarContextProvider activePath={activePath} onClose={onClose}>
			<Drawer anchor={direction === 'rtl' ? 'right' : 'left'} onClose={onClose} {...rest}>
				<Box mb={4} p={2}>
					<Box sx={theme => theme.mixins.logo}/>
				</Box>
				<List aria-label={listAriaLabel} component="nav">
					{children}
				</List>
			</Drawer>
		</SidebarContextProvider>
	);
}
