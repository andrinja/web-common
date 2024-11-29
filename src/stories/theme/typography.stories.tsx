import type {Meta, StoryObj} from '@storybook/react';
import {Table, TableCell, TableHeader} from '../Table';
import {TypographyVariant, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import React from 'react';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import {baseTheme} from 'themes';
import theme from 'themes/yourbrand';

const typography: Meta = {
	title: 'Theme/typography',
};

export default typography;

export const FontStyles: StoryObj = {
	name: 'font styles',
	render: () => {
		const fontStyles = Object.entries(theme.typography)
			.filter(([, value]) => typeof value === 'object' && !!value.fontSize);

		return (
			<Table title="Font styles">
				<TableHeader>
					<TableCell align="right">Font size</TableCell>
					<TableCell>Variant</TableCell>
				</TableHeader>
				<TableBody>
					{fontStyles.map(([key, value]) => (
						<TableRow key={key}>
							<TableCell align="right">{value.fontSize}</TableCell>
							<TableCell>
								<Typography variant={key as TypographyVariant}>This is a {key} variant</Typography>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		);
	},
};

export const TextColors: StoryObj = {
	name: 'text colors',
	render: () => {
		const {palette} = useTheme();
		return (
			<>
				<Typography variant="h1">Text Colors</Typography>
				{Object.entries(palette.text).map(([key, value]) => (
					<Box key={key} my={2}>
						<Typography color={value}>{key}</Typography>
					</Box>
				))}
			</>
		);
	},
};

export const FontWeights: StoryObj = {
	name: 'font weights',
	render: () => {
		const fontWeights = Object.entries(baseTheme.typography)
			.filter(([key]) => key.startsWith('fontWeight')).sort(([, a], [, b]) => a - b);

		return (
			<Table title="Font weights">
				<TableHeader>
					<TableCell>Name</TableCell>
					<TableCell>Key</TableCell>
					<TableCell align="right">Value</TableCell>
				</TableHeader>
				<TableBody>
					{fontWeights.map(([key, value]) => (
						<TableRow key={key}>
							<TableCell>
								<Typography fontWeight={value}>{key.replace('fontWeight', '')}</Typography>
							</TableCell>
							<TableCell>{key}</TableCell>
							<TableCell align="right">{value}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		);
	},
};
