import React, {ReactNode} from 'react';
import {createContext, useContext, useState} from 'react';

type TabContextType = {
	activeTabIndex?: number | string
	changeTab: (value: string | number) => void
};

const TabContext = createContext<TabContextType | undefined>(undefined);

export type Props = {
	activeTabIndex?: number | string
	children: ReactNode
	defaultTabIndex?: number | string
	onChange?: (value: number | string) => void
};

export const TabContextProvider = ({
	activeTabIndex: externalActiveTabIndex,
	children,
	defaultTabIndex = 0,
	onChange,
}: Props) => {
	const [activeTabIndex, setActiveTabIndex] = useState(defaultTabIndex);

	const changeTab = (value: string | number) => {
		!externalActiveTabIndex && setActiveTabIndex(value);

		onChange && onChange(value);
	};

	return (
		<TabContext.Provider
			value={{
				activeTabIndex: externalActiveTabIndex || activeTabIndex,
				changeTab,
			}}
		>
			{children}
		</TabContext.Provider>
	);
};

export const useTabContext = () => {
	const context = useContext(TabContext);

	if (!context) {
		throw new Error('useTabContext must be used within TabContextProvider');
	}

	return context;
};
