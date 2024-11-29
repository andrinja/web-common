import Collapse, {CollapseProps} from '@mui/material/Collapse';
import React, {ReactNode} from 'react';
import SidebarMenuItem, {Props as SidebarMenuItemProps} from './SidebarMenuItem';
import Icon from 'components/Icon';
import List from '@mui/material/List';

export type Props = {
	children?: ReactNode
	CollapseProps?: CollapseProps
	open?: boolean
} & SidebarMenuItemProps;

export default function CollapsibleMenuItem({
	children,
	CollapseProps = {},
	open = false,
	...rest
}: Props) {
	return (
		<li>
			<SidebarMenuItem
				component="div"
				endIcon={<Icon name={open ? 'ArrowDropDown' : 'ArrowDropRight'}/>}
				{...rest}
			/>
			<Collapse in={open} timeout="auto" unmountOnExit {...CollapseProps}>
				<List disablePadding>
					{children}
				</List>
			</Collapse>
		</li>
	);
}
