import React, {ReactNode, createContext, useCallback, useContext, useState} from 'react';
import MissingContextProviderError from 'errors/MissingContextProviderError';

interface SnackbarContextType {
	isSnackbarVisible: boolean
	message?: string
	setIsSnackbarVisible: (isVisible: boolean) => void
	setSnackbarMessage: (message: string) => void
}

const SnackbarContext = createContext<SnackbarContextType | null>(null);

export type Props = {
	children?: ReactNode
};

export function SnackbarContextProvider({children}: Props) {
	const [message, setMessage] = useState<string>();
	const [isSnackbarVisible, setIsVisible] = useState(false);

	const setIsSnackbarVisible = (isVisible: boolean) => setIsVisible(isVisible);

	const showMessage = useCallback((message: string) => {
		setMessage(message);
		setIsVisible(true);
	}, []);

	return (
		<SnackbarContext.Provider
			value={{
				isSnackbarVisible,
				message,
				setIsSnackbarVisible,
				setSnackbarMessage: showMessage,
			}}
		>
			{children}
		</SnackbarContext.Provider>
	);
}

export function useSnackbar() {
	const context = useContext(SnackbarContext);
	if (!context) {
		throw new MissingContextProviderError('useSnackbar', 'SnackbarContextProvider');
	}

	return context;
}
