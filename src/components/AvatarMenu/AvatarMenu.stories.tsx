import {AvatarMenu, AvatarMenuProps} from './';
import type {Meta, StoryObj} from '@storybook/react';
import ContextMenuItem from 'components/ContextMenu/ContextMenuItem';
import {FILLER_TEXT} from '../../setupStorybook';
import React from 'react';

const avatarMenu: Meta<AvatarMenuProps & {isLoggedIn: boolean}> = {
	component: AvatarMenu,
	argTypes: {
		ContextMenuProps: {
			control: false,
		},
		displayName: {
			control: {
				type: 'text',
			},
		},
	},
	args: {
		displayName: 'Test User',
		isLoggedIn: true,
	},
	parameters: {
		docs: {
			description: {
				component: 'Used in the top bar.',
			},
		},
	},
};

export default avatarMenu;

export const Default: StoryObj<AvatarMenuProps & {isLoggedIn: boolean}> = {
	render: ({isLoggedIn, ...args}) => (
		<>
			<AvatarMenu
				{...args}
				display="flex"
				justifyContent="flex-end"
				displayName={!isLoggedIn ? undefined : args.displayName}
			>
				<ContextMenuItem label="Go to Account"/>
			</AvatarMenu>
			<br/>
			{FILLER_TEXT}
		</>
	),
};
