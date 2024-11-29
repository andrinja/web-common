import {Menu, MenuItem, MenuProps} from './';
import type {Meta, StoryObj} from '@storybook/react';
import React, {useRef, useState} from 'react';
import {FILLER_TEXT} from '../../setupStorybook';
import Icon from '../Icon';
import IconButton from '@mui/material/IconButton';

const menu: Meta<MenuProps> = {
	component: Menu,
};

export default menu;

export const Default: StoryObj<MenuProps> = {
	render: args => {
		const buttonRef = useRef<HTMLButtonElement>(null);
		const [open, setOpen] = useState(false);

		return (
			<>
				<IconButton aria-label="Options" edge="end" onClick={() => setOpen(!open)} ref={buttonRef}>
					<Icon name="MoreHoriz"/>
				</IconButton>
				<Menu
					{...args}
					anchorEl={buttonRef.current}
					open={open}
					setOpen={setOpen}
				>
					<MenuItem>Item 1</MenuItem>
					<MenuItem>Item 2</MenuItem>
				</Menu>
				<br/>
				{FILLER_TEXT}
			</>
		);
	},
};
