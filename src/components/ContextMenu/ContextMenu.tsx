import React, {Children, ReactElement, forwardRef, useCallback, useState} from 'react';
import ContextMenuItemList from './ContextMenuItemList';
import Menu from '../Menu';
import type {MenuProps} from '../Menu';

type Child = ReactElement | null | undefined;

export type Props = {
	children?: ReactElement | Child[]
} & MenuProps;

export default function ContextMenu({children, ...rest}: Props) {
	const [parentIds, setParentIds] = useState<string[]>([]);

	const getMenuItems = useCallback(() => {
		let menuItems = Array.isArray(children) ? children : [children];

		if (parentIds.length === 0) {
			return menuItems;
		}

		parentIds.forEach(parentKey => {
			menuItems = Children.toArray(menuItems) as Child[];
			menuItems = menuItems.find(item => item?.props.id === parentKey)?.props.children;
		});

		return menuItems;
	}, [children, parentIds]);

	const MenuItemList = forwardRef(() => {
		return (
			<ContextMenuItemList parentIds={parentIds} setParentIds={setParentIds}>
				{getMenuItems()}
			</ContextMenuItemList>
		);
	});

	MenuItemList.displayName = 'MenuItemList';

	return (
		<Menu {...rest}>
			<MenuItemList/>
		</Menu>
	);
}
