import React from 'react';
import {Helmet as ReactHelmet} from 'react-helmet';

export type Props = {
	title: string
};

export default function Helmet({title}: Props) {

	return (
		<ReactHelmet>
			<title>{title}</title>
		</ReactHelmet>
	);
}
