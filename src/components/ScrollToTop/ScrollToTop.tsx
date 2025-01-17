import React, {ReactNode, useEffect} from 'react';
import {useLocation} from 'react-router-dom';

export type Props = {
	children?: ReactNode
};

export default function ScrollToTop({children}: Props) {
	const {pathname} = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return <>{children}</>;
}
