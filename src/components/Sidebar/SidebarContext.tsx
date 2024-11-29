import React, {ReactNode, createContext, useContext} from 'react';

type SidebarContextType = {
	activePath?: string
	onClose?: () => void
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export type Props = {
	children: ReactNode
} & SidebarContextType;

export const SidebarContextProvider = ({activePath, children, onClose}: Props) => {
	return (
		<SidebarContext.Provider value={{activePath, onClose}}>
			{children}
		</SidebarContext.Provider>
	);
};

export default function useSidebarContext() {
	const context = useContext(SidebarContext);

	if (!context) {
		throw new Error('useSidebarContext must be used within a SidebarContextProvider');
	}
	return context;
}
