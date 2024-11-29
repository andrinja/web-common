import React, {Children, ReactElement, ReactNode, cloneElement} from 'react';
import {useTabContext} from './TabContext';

export type Props = {
	children: ReactNode
};

export default function TabPanels({children}: Props) {
	const {activeTabIndex} = useTabContext();
	const childrenArray = Children.toArray(children) as ReactElement[];

	if (childrenArray.some(child => child.props?.index?.toString())
		&& !childrenArray.every(child => child.props?.index?.toString())
	) {
		throw new Error('Custom index should be provided either to all children or none in TabPanel');
	}

	return (
		<>
			{childrenArray.map((child, index) => {
				const childIndex = child.props.index || index;

				return cloneElement(
					child,
					{
						...child.props,
						index: childIndex,
						key: childIndex,
						hidden: childIndex !== activeTabIndex,
					}
				);
			})}
		</>
	);
}
