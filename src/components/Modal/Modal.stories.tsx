import type {Meta, StoryObj} from '@storybook/react';
import Modal, {ModalProps} from './';
import Icon from 'components/Icon';
import React from 'react';
import screenshot from './stories/screenshot.png';

const modal: Meta<ModalProps> = {
	title: 'Dialogs/Modal',
	component: Modal,
	argTypes: {
		content: {
			table: {
				disable: true,
			},
		},
		setOpen: {
			table: {
				disable: true,
			},
		},
	},
	parameters: {
		docs: {
			description: {
				component: 'Modal component is build on top of the Dialog component. Accepts an instance of ModalContent and renders the info passed down based on a set design.',
			},
			story: {
				iframeHeight: 500,
				inline: false,
			},
		},
	},
};

export default modal;

export const ConfirmReject: StoryObj<ModalProps> = {
	args: {
		content: {
			icon: <Icon fontSize="inherit" name="Home"/>,
			title: 'Get back on board',
			description: 'You\'ll need Premium to play this',
			confirmAction: {text: 'Go premium', callback: () => false},
			rejectAction: {text: 'No thanks'},
		},
		disablePortal: true,
		open: true,
	},
	name: 'Confirm/Reject',
};

export const HeaderImage: StoryObj<ModalProps> = {
	args: {
		content: {
			image: screenshot,
			title: 'Get back on board',
			description: 'You\'ll need Premium to play this',
			confirmAction: {text: 'Go premium', callback: () => false},
			rejectAction: {text: 'No thanks'},
		},
		disablePortal: true,
		open: true,
	},
};

export const IconNoButtons: StoryObj<ModalProps> = {
	args: {
		content: {
			icon: <Icon fontSize="inherit" name="Home"/>,
			title: 'Currently playing on another device',
		},
		disablePortal: true,
		open: true,
	},
	name: 'Icon/no buttons',
	parameters: {
		docs: {
			description: {
				story: 'Modal with an icon used to notify about currently playing on another device.',
			},
		},
	},
};

export const LongDescription: StoryObj<ModalProps> = {
	args: {
		content: {
			title: 'You subscribed through Apple in-app payment.\n Follow these instructions to unsubscribe:',
			description: '1. On your IOS device, go to Settings.\n 2. Tap on your name, then select iItunes & App Store.\n 3. Tap on your Apple ID, and the select View Apple ID and enter your password.\n 4. Tap on Subscriptions and select Moodagent.\n 5. Choose Cancel Subscription and confirm your choice',
			confirmAction: {text: 'Ok', callback: () => false},
			rejectAction: {text: 'No Thanks'},
		},
		disablePortal: true,
		open: true,
	},
};

export const WithLink: StoryObj<ModalProps> = {
	args: {
		content: {
			icon: <Icon fontSize="inherit" name="Home"/>,
			title: 'Something went wrong',
			description: <a href="https://moodagent.zendesk.com/" target="_blank" rel="noopener noreferrer">Contact support</a>,
			confirmAction: {text: 'Ok', callback: () => false},
		},
		disablePortal: true,
		open: true,
	},
};

export const WithoutButtons: StoryObj<ModalProps> = {
	args: {
		content: {
			icon: <Icon fontSize="inherit" name="Home"/>,
			title: 'Currently playing on another device',
		},
		disablePortal: true,
		open: true,
	},
};

export const IconAndBody: StoryObj<ModalProps> = {
	args: {
		content: {
			icon: <Icon fontSize="inherit" name="Home"/>,
			title: 'Currently playing on another device',
			confirmAction: {text: 'Ok', callback: () => false},
		},
		disablePortal: true,
		open: true,
	},
	name: 'Icon/Body',
};

export const WithFooter: StoryObj<ModalProps> = {
	args: {
		content: {
			title: 'This email is already registered.',
			description: 'This email is already registered. Please try again with another email or go to log in.',
			confirmAction: {text: 'Go to Login in', callback: () => false},
			rejectAction: {text: 'Sign up with another email', callback: () => false},
			footer: <>Have questions? <a href="https://moodagent.zendesk.com/" target="_blank" rel="noopener noreferrer">Contact support</a></>,
		},
		disablePortal: true,
		open: true,
	},
};
