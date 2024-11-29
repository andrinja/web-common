import {ListProps, default as MuiList} from '@mui/material/List';
import React, {ElementType, ReactNode} from 'react';

export type Props = {
	children?: ReactNode
	// "component" should not be necessary, see https://github.com/mui/material-ui/issues/13921
	component?: ElementType
} & ListProps;

export default function List({children, ...rest}: Props) {
	return (
		<MuiList disablePadding {...rest}>
			{children}
		</MuiList>
	);
}
