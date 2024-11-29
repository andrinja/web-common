import Button, {ButtonProps} from '@mui/material/Button';
import type {Meta, StoryObj} from '@storybook/react';
import {Table, TableCell, TableHeader} from './Table';
import Icon from 'components/Icon';
import LoadingButton from '@mui/lab/LoadingButton';
import React from 'react';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import {fn} from '@storybook/test';

const button: Meta<ButtonProps & {label: string}> = {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		color: {
			control: {
				type: 'inline-radio',
			},
			options: [
				'inherit',
				'primary',
				'secondary',
				'tertiary',
				'success',
				'error',
				'info',
				'warning',
			],
		},
		size: {
			control: {
				type: 'inline-radio',
			},
			options: ['large', 'medium', 'small'],
		},
		variant: {
			control: {
				type: 'inline-radio',
			},
			options: ['text', 'contained', 'outlined'],
		},
	},
	args: {
		label: 'Play',
		onClick: fn(),
	},
};

export default button;

export const Default: StoryObj<ButtonProps & {label: string}> = {
	render: args => <Button {...args}>{args.label}</Button>,
};

export const Outlined: StoryObj<ButtonProps> = {
	render: () => (
		<Table>
			<TableHeader>
				<TableCell>State</TableCell>
				<TableCell>Large</TableCell>
				<TableCell>Small</TableCell>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell component="th" scope="row">
						Default
					</TableCell>
					<TableCell>
						<Button>Play</Button>
					</TableCell>
					<TableCell>
						<Button size="small">Play</Button>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell component="th" scope="row">
						Disabled
					</TableCell>
					<TableCell>
						<Button disabled>Play</Button>
					</TableCell>
					<TableCell>
						<Button disabled size="small">Play</Button>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell component="th" scope="row">
						Icon
					</TableCell>
					<TableCell>
						<Button startIcon={<Icon name="Home"/>}>Play</Button>
					</TableCell>
					<TableCell>
						<Button size="small" startIcon={<Icon name="Home"/>}>Play</Button>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell component="th" scope="row">
						Loading
					</TableCell>
					<TableCell>
						<LoadingButton loading/>
					</TableCell>
					<TableCell>
						<LoadingButton loading size="small"/>
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	),
};

export const Contained: StoryObj<ButtonProps> = {
	render: () => (
		<Table>
			<TableHeader>
				<TableCell>State</TableCell>
				<TableCell>Large</TableCell>
				<TableCell>Small</TableCell>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell component="th" scope="row">
						Default
					</TableCell>
					<TableCell>
						<Button variant="contained">Play</Button>
					</TableCell>
					<TableCell>
						<Button size="small" variant="contained">Play</Button>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell component="th" scope="row">
						Disabled
					</TableCell>
					<TableCell>
						<Button disabled variant="contained">Play</Button>
					</TableCell>
					<TableCell>
						<Button disabled size="small" variant="contained">Play</Button>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell component="th" scope="row">
						Icon
					</TableCell>
					<TableCell>
						<Button startIcon={<Icon name="Home"/>} variant="contained">Play</Button>
					</TableCell>
					<TableCell>
						<Button size="small" startIcon={<Icon name="Home"/>} variant="contained">Play</Button>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell component="th" scope="row">
						Loading
					</TableCell>
					<TableCell>
						<LoadingButton loading size="medium" variant="contained"/>
					</TableCell>
					<TableCell>
						<LoadingButton loading size="small" variant="contained"/>
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	),
};

export const Text: StoryObj<ButtonProps> = {
	render: () => (
		<Table>
			<TableHeader>
				<TableCell>State</TableCell>
				<TableCell>Large</TableCell>
				<TableCell>Small</TableCell>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell component="th" scope="row">
						Default
					</TableCell>
					<TableCell>
						<Button variant="text">Play</Button>
					</TableCell>
					<TableCell>
						<Button size="small" variant="text">Play</Button>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell component="th" scope="row">
						Disabled
					</TableCell>
					<TableCell>
						<Button disabled variant="text">Play</Button>
					</TableCell>
					<TableCell>
						<Button disabled size="small" variant="text">Play</Button>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell component="th" scope="row">
						Icon
					</TableCell>
					<TableCell>
						<Button startIcon={<Icon name="Home"/>} variant="text">Play</Button>
					</TableCell>
					<TableCell>
						<Button size="small" startIcon={<Icon name="Home"/>} variant="text">Play</Button>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell component="th" scope="row">
						Loading
					</TableCell>
					<TableCell>
						<LoadingButton loading variant="text"/>
					</TableCell>
					<TableCell>
						<LoadingButton loading size="small" variant="text"/>
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	),
};

export const Warning: StoryObj<ButtonProps> = {
	args: {
		children: 'Cancel',
		color: 'warning',
	},
};

export const W100: StoryObj<ButtonProps> = {
	args: {
		children: 'Cancel',
		fullWidth: true,
	},
	name: 'W100',
};
