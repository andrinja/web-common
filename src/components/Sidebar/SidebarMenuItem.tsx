import React, {ElementType, ReactElement, ReactNode} from 'react';
import {Link as RouterLink, matchPath} from 'react-router-dom';
import Link from '@mui/material/Link';
import ListItem from './ListItem';
import ListItemButton from './ListItemButton';
import {ListItemProps} from '@mui/material/ListItem';
import MenuItemBody from './MenuItemBody';
import useSidebarContext from './SidebarContext';

export type Props = {
	activeIcon?: ReactNode
	// "component" should not be necessary, see https://github.com/mui/material-ui/issues/13921
	component?: ElementType
	endIcon?: ReactNode
	icon?: ReactNode
	children?: ReactElement | ReactElement[]
	disabled?: boolean
	matchPattern?: string
	path?: string
	shouldCloseSidebar?: boolean
	title: string
} & ListItemProps;

export default function SidebarMenuItem({
	activeIcon,
	endIcon,
	icon,
	children,
	disabled = false,
	matchPattern,
	path,
	shouldCloseSidebar = true,
	title,
	...rest
}: Props) {
	const {activePath, onClose} = useSidebarContext();

	const isActive = matchPattern && activePath
		? !!matchPath(matchPattern, activePath)
		: activePath === path;

	const menuItemBody = (
		<MenuItemBody endIcon={endIcon} icon={isActive ? activeIcon : icon}>
			{title}
		</MenuItemBody>
	);

	return (
		<ListItem
			isActive={isActive}
			key={title}
			onClick={() => !disabled && onClose && shouldCloseSidebar && onClose()}
			{...rest}
		>
			<ListItemButton disabled={disabled}>
				{
					!path
						? menuItemBody
						: (
							<Link
								{...(isActive && {color: 'primary'})}
								component={RouterLink}
								height="100%"
								to={path}
								underline="none"
								width="100%"
							>
								{menuItemBody}
							</Link>
						)
				}
			</ListItemButton>
			{children}
		</ListItem>
	);
}
