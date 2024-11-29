import React, {ReactElement, ReactNode} from 'react';
import AppBar from '@mui/material/AppBar';
import {Children} from 'react';
import {default as MuiTabs} from '@mui/material/Tabs';
import {useTabContext} from './TabContext';

export type Props = {
	children?: ReactNode
};

export const Tabs = ({children}: Props) => {
	const {activeTabIndex, changeTab} = useTabContext();
	const childrenArray = Children.toArray(children) as ReactElement[];

	if (childrenArray.some(child => child.props?.value?.toString())
		&& !childrenArray.every(child => child.props?.value?.toString())
	) {
		throw new Error('Custom value should be provided either to all children or none in Tabs');
	}

	return (
		<AppBar position="static" sx={{backgroundColor: 'transparent'}}>
			<MuiTabs onChange={(_, value) => changeTab(value)} value={activeTabIndex}>
				{children}
			</MuiTabs>
		</AppBar>
	);
};

export default Tabs;
