import type {Meta, StoryObj} from '@storybook/react';
import AppBar from '@mui/material/AppBar';
import AvatarMenu from 'components/AvatarMenu';
import {ContextMenuItem} from 'components/ContextMenu';
import {FILLER_TEXT} from '../setupStorybook';
import Icon from 'components/Icon';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import Toolbar from '@mui/material/Toolbar';

const topBar: Meta = {
	title: 'Components/TopBar',
	parameters: {
		docs: {
			description: {
				component: 'Responsive TopBar. Clickable menu icon appears used to toggle sidebar on small screen size.',
			},
			story: {
				iframeHeight: 400,
				inline: false,
			},
		},
	},
};

export default topBar;

export const Responsive: StoryObj = {
	render: () => {
		const userProfile = {
			imageUrl: 'image_url',
			firstName: 'Test',
			lastName: 'User',
			username: 'testUser',
		};

		return (
			<>
				<AppBar>
					<Toolbar>
						<IconButton
							color="inherit"
							size="large"
							sx={{
								mr: 2,
								display: {
									sx: 'block',
									md: 'none',
								},
							}}
						>
							<Icon name="Menu"/>
						</IconButton>
						<AvatarMenu ml="auto" {...userProfile}>
							<ContextMenuItem label="Go to Account"/>
						</AvatarMenu>
					</Toolbar>
				</AppBar>
				<div style={{marginTop: 200}}>{FILLER_TEXT}</div>
			</>
		);
	},
};

export const ResponsiveWithChildren: StoryObj = {
	parameters: {
		docs: {
			description: {
				story: 'Responsive top bar showed with heading.',
			},
		},
	},
	render: () => {
		return (
			<>
				<AppBar>
					<Toolbar>
						<IconButton
							color="inherit"
							size="large"
							sx={{
								mr: 2,
								display: {
									sx: 'block',
									md: 'none',
								},
							}}
						>
							<Icon name="Menu"/>
						</IconButton>
						<h1>Test children</h1>
						<AvatarMenu ml="auto">
							<ContextMenuItem label="Go to Account"/>
						</AvatarMenu>
					</Toolbar>
				</AppBar>
				<div style={{marginTop: 200}}>{FILLER_TEXT}</div>
			</>
		);
	},
};
