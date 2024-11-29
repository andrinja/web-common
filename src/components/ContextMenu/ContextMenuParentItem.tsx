import React, {ReactElement, ReactNode, cloneElement} from 'react';
import Box from '@mui/material/Box';
import Icon from 'components/Icon';
import MenuItem from '@mui/material/MenuItem';
import {MenuItemProps} from '@mui/material/MenuItem';

export type Props = {
	children?: ReactNode
	icon?: ReactElement
	id: string
	label: string
} & MenuItemProps;

export default function ContextMenuParentItem({icon, id, children, label, ...rest}: Props) {
	let labelElement = <>{label}</>;

	if (children) {
		labelElement = cloneElement(
			labelElement,
			{...labelElement.props},
			[labelElement.props.children,
				<Box display="flex" key="next" sx={{marginInlineStart: 'auto'}}>
					<Icon fontSize="small" name="ChevronRight"/>
				</Box>,
			]
		);
	}

	if (icon) {
		const wrappedIcon = (
			<Box display="flex" key="icon" sx={{paddingInlineEnd: 1}}>
				{icon}
			</Box>
		);

		labelElement = cloneElement(
			labelElement,
			{...labelElement.props},
			[wrappedIcon, labelElement.props.children]
		);
	}

	return (
		<MenuItem
			disableGutters
			divider
			key={id}
			{...rest}
		>
			{labelElement}
		</MenuItem>
	);
}
