import type {Meta, StoryObj} from '@storybook/react';
import {Table, TableCell, TableHeader} from '../Table';
import React from 'react';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import {useTheme} from '@mui/material/styles';

const breakpoints: Meta = {
	title: 'Theme/breakpoints',
};

export default breakpoints;

export const Breakpoints: StoryObj = {
	name: 'breakpoints',
	render: () => {
		const {breakpoints} = useTheme();
		return (
			<Table title="Breakpoints">
				<TableHeader>
					<TableCell>Name</TableCell>
					<TableCell>Key</TableCell>
					<TableCell align="right">Values</TableCell>
				</TableHeader>
				<TableBody>
					{Object.entries(breakpoints.values).map(([key, value]) => (
						<TableRow key={key}>
							<TableCell component="th" scope="row">
								{key}
							</TableCell>
							<TableCell>{`theme.breakpoints.values.${key}`}</TableCell>
							<TableCell align="right">{value}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		);
	},
};
