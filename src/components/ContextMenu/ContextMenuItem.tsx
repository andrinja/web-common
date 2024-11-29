import React, {ReactElement, ReactNode, cloneElement} from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import {MenuItemProps} from '@mui/material/MenuItem';

export type Props = {
	icon?: ReactElement
	label?: ReactElement | ReactNode
} & MenuItemProps;

export default function ContextMenuItem({icon, label, ...rest}: Props) {
	let elementLabel = label as ReactElement;

	if (elementLabel.props === undefined) {
		elementLabel = <>{label}</>;
	}

	const isMenuItem = elementLabel && elementLabel.props.role && elementLabel.props.role === 'menuitem';

	if (isMenuItem) {
		label = cloneElement(elementLabel, {...elementLabel.props, color: 'initial', underline: 'none'});
	}

	if (icon) {
		const wrappedIcon = (
			<Box display="flex" key="icon" sx={{paddingInlineEnd: 1}}>
				{icon}
			</Box>
		);

		label = cloneElement(
			elementLabel,
			{...elementLabel.props},
			[wrappedIcon, elementLabel.props.children]
		);
	}

	return (
		<MenuItem
			disableGutters
			divider
			{...isMenuItem ? {role: 'none'} : {}}
			{...rest}
		>
			{label}
		</MenuItem>
	);
}
