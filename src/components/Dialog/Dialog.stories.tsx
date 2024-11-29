import Dialog, {DialogProps} from './';
import type {Meta, StoryObj} from '@storybook/react';
import DialogContent from '@mui/material/DialogContent';
import React from 'react';

const dialog: Meta<DialogProps> = {
	title: 'Dialogs/Dialog',
	component: Dialog,
	argTypes: {
		closable: {
			control: {
				type: 'boolean',
			},
		},
		fixedWidth: {
			control: {
				type: 'boolean',
			},
		},
	},
	args: {
		closable: false,
		fixedWidth: false,
		maxWidth: 'md',
	},
	parameters: {
		docs: {
			story: {
				iframeHeight: 400,
				inline: false,
			},
		},
	},
};

export default dialog;

export const Default: StoryObj<DialogProps> = {
	render: args => (
		<Dialog {...args} disablePortal open={true}>
			<DialogContent>Dialog with dark background</DialogContent>
		</Dialog>
	),
};

export const WithCloseIcon: StoryObj<DialogProps> = {
	render: () => (
		<Dialog closable disablePortal onClose={() => false} open={true}>
			<DialogContent>Dialog with close icon</DialogContent>
		</Dialog>
	),
};

export const DefaultWidthAuto: StoryObj<DialogProps> = {
	render: () => (
		<Dialog disablePortal fullWidth={false} open={true}>
			<DialogContent>
				Dialog not scaling larger than the content, but constrained by default (md) maximum width.
			</DialogContent>
		</Dialog>
	),
};

export const FixedWidth: StoryObj<DialogProps> = {
	render: () => (
		<Dialog disablePortal fixedWidth open={true}>
			<DialogContent>
				Dialog has a fixed width across viewports, mostly used for the Modal component.
			</DialogContent>
		</Dialog>
	),
};

export const MaxWidthSm: StoryObj<DialogProps> = {
	render: () => (
		<Dialog disablePortal fullWidth={false} maxWidth="sm" open={true}>
			<DialogContent>{'Dialog not scaling larger than sm on viewports >= sm.'}</DialogContent>
		</Dialog>
	),
};

export const Unconstrained: StoryObj<DialogProps> = {
	render: () => (
		<Dialog disablePortal maxWidth={false} open={true}>
			<DialogContent>
				Unconstrained dialog scaling according to content up to the viewport width.
			</DialogContent>
		</Dialog>
	),
};

export const FullViewport: StoryObj<DialogProps> = {
	render: () => (
		<Dialog disablePortal fullWidth maxWidth={false} open={true}>
			<DialogContent>Scaling across the full viewport.</DialogContent>
		</Dialog>
	),
};
