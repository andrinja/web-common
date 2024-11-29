import React, {MouseEventHandler, ReactNode} from 'react';
import ListItem from './ListItem';
import ListItemButton from './ListItemButton';
import MenuItemBody from './MenuItemBody';
import {default as MuiLink} from '@mui/material/Link/Link';

export type Props = {
	children?: ReactNode
	href?: string | null
	icon?: ReactNode
	onClick?: MouseEventHandler<HTMLLIElement>
};

export default function SidebarAction({
	children,
	href,
	icon,
	onClick,
}: Props) {
	const actionItem = <MenuItemBody icon={icon}>{children}</MenuItemBody>;

	if (href) {
		return (
			<ListItem>
				<ListItemButton>
					<MuiLink
						color="text.primary"
						href={href}
						rel="noopener noreferrer"
						target="_blank"
						underline="none"
						width="100%"
					>
						{actionItem}
					</MuiLink>
				</ListItemButton>
			</ListItem>
		);
	}
	return (
		<ListItem onClick={onClick}>
			<ListItemButton>
				{actionItem}
			</ListItemButton>
		</ListItem>
	);
}
