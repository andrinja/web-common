import React, {ReactNode} from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import SidebarMenuItems from './SidebarMenuItems';

export type Props = {
	children?: ReactNode
};

export default function SidebarActions({children}: Props) {
	return (
		<>
			<Box p={2}>
				<Divider/>
			</Box>
			<SidebarMenuItems>{children}</SidebarMenuItems>
		</>
	);
}
