import List, {ListProps} from '@mui/material/List';
import ListItemIndicator, {TrackControl} from '../components/ListItemIndicator';
import type {Meta, StoryObj} from '@storybook/react';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import ListItemText from '../components/ListItemText';
import React from 'react';
import {ThemeProvider} from '@mui/material/styles';
import {fn} from '@storybook/test';
import {yourbrandOverlayTheme} from '../themes';

const list: Meta<ListProps> = {
	title: 'Components/List',
	component: List,
};

export default list;

export const Default: StoryObj<ListProps> = {
	render: args => (
		<List {...args}>
			<ListItem>
				<ListItemIndicator index={0}/>
				<ListItemText primary="Primary text"/>
			</ListItem>
			<ListItem>
				<ListItemIndicator imgSrc="/cover.jpg"/>
				<ListItemText
					primary={<Link href="/">Linked primary text</Link>}
					secondary={<Link href="/">Linked secondary text</Link>}
				/>
			</ListItem>
			<ListItem>
				<ListItemIndicator imgSrc="/cover.jpg"/>
				<ListItemText>Primary text</ListItemText>
			</ListItem>
			<ListItem>
				<ListItemIndicator index={3}/>
				<ListItemText primary="Primary text"/>
			</ListItem>
			<ListItem>
				<ListItemIndicator index={4}/>
				<ListItemText primary="Primary text"/>
			</ListItem>
			<ListItem>
				<ListItemIndicator imgSrc="/cover.jpg"/>
				<ListItemText
					primary={<Link href="/">Linked primary text</Link>}
					secondary={(
						<>
							<Link href="/">Linked secondary text</Link>, <Link href="/">Another linked secondary text</Link>
						</>
					)}
				/>
			</ListItem>
			<ListItem>
				<ListItemIndicator imgSrc="/cover.jpg"/>
				<ListItemText
					primary="A very long primary text does not wrap, but is cut off XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
				/>
			</ListItem>
			<ListItem>
				<ListItemText primary="Primary text" secondary="Secondary text"/>
			</ListItem>
			<ListItem
				sx={theme => theme.mixins.genericPlayButton({
					isBusy: false,
					isPaused: false,
					isPlaying: false,
					isReadyToPlay: true,
				})}
			>
				<ListItemIndicator imgSrc="/cover.jpg">
					<ThemeProvider theme={yourbrandOverlayTheme}>
						<TrackControl onClick={fn()}/>
					</ThemeProvider>
				</ListItemIndicator>
				<ListItemText>with TrackControl</ListItemText>
			</ListItem>
			<ListItem
				sx={theme => theme.mixins.genericPlayButton({
					isBusy: true,
					isPaused: false,
					isPlaying: false,
					isReadyToPlay: false,
				})}
			>
				<ListItemIndicator imgSrc="/cover.jpg">
					<ThemeProvider theme={yourbrandOverlayTheme}>
						<TrackControl onClick={fn()}/>
					</ThemeProvider>
				</ListItemIndicator>
				<ListItemText>with TrackControl in busy state</ListItemText>
			</ListItem>
			<ListItem
				sx={theme => theme.mixins.genericPlayButton({
					isBusy: true,
					isPaused: false,
					isPlaying: false,
					isReadyToPlay: false,
				})}
			>
				<ListItemIndicator>
					<TrackControl onClick={fn()}/>
				</ListItemIndicator>
				<ListItemText>without image; with TrackControl in busy state</ListItemText>
			</ListItem>
		</List>
	),
};
