import Dialog, {DialogProps} from './';
import type {Meta, StoryObj} from '@storybook/react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import Image from '../Image';
import React from 'react';
import Textarea from '../Textarea';

const dialogModal: Meta<DialogProps> = {
	title: 'Dialogs/Naming Modal',
	component: Dialog,
	argTypes: {
		open: {
			control: {
				type: 'boolean',
			},
		},
		closable: {
			control: {
				type: 'boolean',
			},
		},
		fixedWidth: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		open: true,
		closable: true,
	},
	parameters: {
		docs: {
			story: {
				iframeHeight: 600,
				inline: false,
			},
		},
	},
};

export default dialogModal;

export const Default: StoryObj<DialogProps> = {
	render: args => (
		<Dialog fullWidth={false} maxWidth={false} open={args.open}>
			<DialogContent>
				<Box mt={2} width={258}>
					<Image src="https://ma-graphics.s3.amazonaws.com/moodagent-backgrounds/1-2.jpg"/>
					<Box pb={7} pt={2}>
						<Textarea fontWeight="fontWeightBold" fullWidth maxLength={100}/>
					</Box>
					<Button disabled fullWidth variant="contained">Save</Button>
				</Box>
			</DialogContent>
		</Dialog>
	),
};

export const WithValue: StoryObj<DialogProps> = {
	render: () => (
		<Dialog closable fullWidth={false} maxWidth={false} open={true}>
			<DialogContent>
				<Box mt={2} width={258}>
					<Image src="https://ma-graphics.s3.amazonaws.com/moodagent-backgrounds/1-2.jpg"/>
					<Box pb={7} pt={2}>
						<Textarea
							fontWeight="fontWeightBold"
							fullWidth
							maxLength={100}
							value="My awesome moodagent"
						/>
					</Box>
					<Button fullWidth variant="contained">Save</Button>
				</Box>
			</DialogContent>
		</Dialog>
	),
};

export const WithMaxLength: StoryObj<DialogProps> = {
	render: () => (
		<Dialog closable fullWidth={false} maxWidth={false} open={true}>
			<DialogContent>
				<Box mt={2} width={258}>
					<Image src="https://ma-graphics.s3.amazonaws.com/moodagent-backgrounds/1-2.jpg"/>
					<Box pb={7} pt={2}>
						<Textarea
							fontWeight="fontWeightBold"
							fullWidth
							maxLength={100}
							value="My super awesome moodagent My su"
						/>
					</Box>
					<Button fullWidth variant="contained">Save</Button>
				</Box>
			</DialogContent>
		</Dialog>
	),
};
