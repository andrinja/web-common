import type {Meta, StoryObj} from '@storybook/react';
import Sidebar, {
	SidebarAction,
	SidebarActions,
	SidebarMenuItem,
	SidebarMenuItems,
	SidebarProps,
} from './';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CollapsibleMenuItem from './CollapsibleMenuItem';
import Icon from 'components/Icon';
import React from 'react';
import {fn} from '@storybook/test';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useState} from 'react';
import {useTheme} from '@mui/material/styles';

const sidebar: Meta<SidebarProps> = {
	component: Sidebar,
	argTypes: {
		activePath: {
			control: {
				type: 'select',
			},
			options: ['/', '/playlist', '/library/songs'],
		},
		listAriaLabel: {
			table: {
				disable: true,
			},
		},
		onClose: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		activePath: '/',
		onClose: fn((() => () => null)()),
	},
	decorators: [Story => <Box sx={{'.MuiDrawer-paper': {position: 'static'}}}><Story/></Box>],
	parameters: {
		docs: {
			story: {
				iframeHeight: 600,
				inline: false,
			},
			source: {
				excludeDecorators: true,
			},
		},
	},
};

export default sidebar;

export const Permanent: StoryObj<SidebarProps> = {
	parameters: {
		docs: {
			description: {
				story: 'The permanent sidebar is always visible.',
			},
		},
	},
	render: args => (
		<Sidebar variant="permanent" {...args}>
			<SidebarMenuItems>
				<SidebarMenuItem
					activeIcon={<Icon name="HomeActive"/>}
					icon={<Icon name="Home"/>}
					path="/"
					title="Explore"
				/>
				<SidebarMenuItem
					activeIcon={<Icon name="FormatListBulleted"/>}
					icon={<Icon name="FormatListBulleted"/>}
					path="/playlist"
					title="Playlist"
				/>
			</SidebarMenuItems>
			<Box p={2}>
				<Button color="secondary" size="small" startIcon={<Icon name="Add"/>} variant="contained">
					Create station
				</Button>
			</Box>
		</Sidebar>
	),
};

export const Responsive: StoryObj<SidebarProps> = {
	parameters: {
		docs: {
			description: {
				story: 'A temporary sidebar is visible for small screen sizes while a permanent sidebar is visible for wider screens.',
			},
		},
	},
	render: args => {
		const [isOpen, setIsOpen] = useState(false);
		const {breakpoints} = useTheme();
		const moreThanXs = useMediaQuery(breakpoints.up('sm'));

		return (
			<>
				{!moreThanXs && <button onClick={() => setIsOpen(true)}>Open Sidebar</button>}
				<Sidebar
					activePath="/playlist"
					className={moreThanXs ? '' : 'small'}
					open={isOpen}
					variant={moreThanXs ? 'permanent' : 'temporary'}
					{...args}
					onClose={fn(() => setIsOpen(false))}
				>
					<SidebarMenuItems>
						<SidebarMenuItem
							activeIcon={<Icon name="HomeActive"/>}
							icon={<Icon name="Home"/>}
							path="/"
							title="Explore"
						/>
						<SidebarMenuItem
							activeIcon={<Icon name="FormatListBulleted"/>}
							icon={<Icon name="FormatListBulleted"/>}
							path="/playlist"
							title="Playlist"
						/>
					</SidebarMenuItems>
				</Sidebar>
			</>
		);
	},
};

export const WithActions: StoryObj<SidebarProps> = {
	parameters: {
		docs: {
			description: {
				story: 'The actions that will replace the context menu on mobile devices.',
			},
		},
	},
	render: args => (
		<Sidebar variant="permanent" {...args}>
			<SidebarMenuItems>
				<SidebarMenuItem
					activeIcon={<Icon name="HomeActive"/>}
					icon={<Icon name="Home"/>}
					path="/"
					title="Explore"
				/>
				<SidebarMenuItem
					activeIcon={<Icon name="FormatListBulleted"/>}
					icon={<Icon name="FormatListBulleted"/>}
					path="/playlist"
					title="Playlist"
				/>
			</SidebarMenuItems>
			<SidebarActions>
				<SidebarAction icon={<Icon name="LogOut"/>}>Logout</SidebarAction>
				<SidebarAction href="https://player.moodagent.com" icon={<Icon name="Album"/>}>
					Go to player
				</SidebarAction>
			</SidebarActions>
		</Sidebar>
	),
};

export const WithLevels: StoryObj<SidebarProps> = {
	parameters: {
		docs: {
			description: {
				story: 'Sidebar menu items with levels.',
			},
		},
	},
	render: args => (
		<Sidebar variant="permanent" {...args}>
			<SidebarMenuItems>
				<SidebarMenuItem
					activeIcon={<Icon name="FormatListBulleted"/>}
					icon={<Icon name="FormatListBulleted"/>}
					path="/playlists"
					title="Playlists"
				>
					<SidebarMenuItems>
						<SidebarMenuItem
							disabled={false}
							icon={<Icon name="Add" fontSize="small"/>}
							title="Create new playlist"
						/>
						<SidebarMenuItem path="/hyberbeast" title="HYPEBEAST"/>
						<SidebarMenuItem path="/rc" title="Rap Caviar"/>
					</SidebarMenuItems>
				</SidebarMenuItem>
				<SidebarMenuItem
					activeIcon={<Icon name="AndroidNowPlaying"/>}
					icon={<Icon name="AndroidNowPlaying"/>}
					path="/library/songs"
					title="Songs"
				/>
			</SidebarMenuItems>
		</Sidebar>
	),
};

export const CollapsibleItems: StoryObj<SidebarProps> = {
	render: args => {
		const [expandedMenuItems, setExpandedMenuItems]
			= useState<{[key: string]: boolean}>({collapse2: true});

		const handleClick = (id: string) =>
			setExpandedMenuItems({...expandedMenuItems, [id]: !expandedMenuItems[id]});

		return (
			<Sidebar variant="permanent" {...args}>
				<SidebarMenuItems>
					<CollapsibleMenuItem
						icon={<Icon name="Home"/>}
						onClick={() => handleClick('collapse1')}
						open={expandedMenuItems['collapse1']}
						title="Explore"
					>
						<SidebarMenuItem
							activeIcon={<Icon name="FormatListBulleted"/>}
							icon={<Icon name="FormatListBulleted"/>}
							path="/playlist"
							title="Playlist"
						/>
						<SidebarMenuItem icon={<Icon name="Album"/>} path="/album" title="Album"/>
					</CollapsibleMenuItem>
					<CollapsibleMenuItem
						icon={<Icon name="Home"/>}
						disablePadding={false}
						onClick={() => handleClick('collapse2')}
						open={expandedMenuItems['collapse2']}
						title="Explore"
					>
						<SidebarMenuItem
							activeIcon={<Icon name="FormatListBulleted"/>}
							icon={<Icon name="FormatListBulleted"/>}
							matchPattern="/playlist/*"
							path="/playlist/abc"
							title="Playlist"
						/>
						<SidebarMenuItem icon={<Icon name="Album"/>} path="/album" title="Album"/>
					</CollapsibleMenuItem>
				</SidebarMenuItems>
			</Sidebar>
		);
	},
};

export const Skeleton: StoryObj<SidebarProps> = {
	parameters: {
		docs: {
			description: {
				story: 'Display a placeholder preview of sidebar content before the data gets loaded.',
			},
		},
	},
	render: args => {
		const [isOpen, setIsOpen] = useState(false);
		const {breakpoints} = useTheme();
		const moreThanSm = useMediaQuery(breakpoints.up('sm'));

		return (
			<>
				<button onClick={() => setIsOpen(true)}>Open Sidebar</button>
				<Sidebar
					className={moreThanSm ? '' : 'small'}
					onClose={() => setIsOpen(false)}
					open={isOpen}
					variant={moreThanSm ? 'permanent' : 'temporary'}
					{...args}
					isReady={false}
				>
					<SidebarMenuItems>
						<SidebarMenuItem
							activeIcon={<Icon name="HomeActive"/>}
							icon={<Icon name="Home"/>}
							path="/explore"
							title="Explore"
						/>
						<SidebarMenuItem
							activeIcon={<Icon name="FormatListBulleted"/>}
							icon={<Icon name="FormatListBulleted"/>}
							matchPattern="/playlist/*"
							path="/playlist/abc"
							title="Playlist"
						/>
					</SidebarMenuItems>
				</Sidebar>
			</>
		);
	},
};

export const ActiveItemPathWithParams: StoryObj<SidebarProps> = {
	parameters: {
		docs: {
			description: {
				story: 'Use this for SidebarMenuItems whose paths contain parameters that changed based on user interactions.\n'
					+ 'Add the matchPattern to the SidebarMenuItem for a proper way of handling the active state.',
			},
		},
	},
	render: args => (
		<Sidebar variant="permanent" {...args} activePath="/playlist/hello">
			<SidebarMenuItems>
				<SidebarMenuItem
					activeIcon={<Icon name="HomeActive"/>}
					icon={<Icon name="Home"/>}
					path="/explore"
					title="Explore"
				/>
				<SidebarMenuItem
					activeIcon={<Icon name="FormatListBulleted"/>}
					icon={<Icon name="FormatListBulleted"/>}
					matchPattern="/playlist/*"
					path="/playlist/abc"
					title="Playlist"
				/>
			</SidebarMenuItems>
		</Sidebar>
	),
};
