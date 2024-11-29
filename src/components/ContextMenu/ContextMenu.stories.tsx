import ContextMenu, {ContextMenuProps} from './';
import type {Meta, StoryObj} from '@storybook/react';
import React, {useCallback, useRef, useState} from 'react';
import ContextMenuItem from './ContextMenuItem';
import ContextMenuParentItem from './ContextMenuParentItem';
import {FILLER_TEXT} from '../../setupStorybook';
import Icon from 'components/Icon';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';

const contextMenu: Meta<ContextMenuProps> = {
	component: ContextMenu,
};

export default contextMenu;

export const Default: StoryObj<ContextMenuProps> = {
	render: args => {
		const buttonRef = useRef(null);
		const [open, setOpen] = useState(false);

		return (
			<>
				<IconButton aria-label="Options" edge="end" onClick={() => setOpen(!open)} ref={buttonRef}>
					<Icon name="MoreHoriz"/>
				</IconButton>
				<ContextMenu
					{...args}
					anchorEl={buttonRef.current}
					open={open}
					setOpen={setOpen}
				>
					<ContextMenuItem label="Artist"/>
					<ContextMenuItem label={<Link href="/">Link</Link>}/>
				</ContextMenu>
				<br/>
				{FILLER_TEXT}
			</>
		);
	},
};

export const Nested: StoryObj<ContextMenuProps> = {
	render: args => {
		const buttonRef = useRef(null);
		const [open, setOpen] = useState(false);

		return (
			<>
				<IconButton aria-label="Options" edge="end" onClick={() => setOpen(!open)} ref={buttonRef}>
					<Icon name="MoreHoriz"/>
				</IconButton>
				<ContextMenu
					{...args}
					anchorEl={buttonRef.current}
					open={open}
					setOpen={setOpen}
				>
					<ContextMenuParentItem icon={<Icon name="Album"/>} id="artist" label="Artist">
						{Array.from(Array(20).keys()).map(key => (
							<ContextMenuItem
								divider={false}
								key={key}
								label="Some item"
							/>
						))}
					</ContextMenuParentItem>
					<ContextMenuItem icon={<Icon name="Album"/>} label={<Link href="/">Link</Link>}/>
				</ContextMenu>
			</>
		);
	},
};

export const DeferredLoading: StoryObj<ContextMenuProps> = {
	render: args => {
		const buttonRef = useRef(null);
		const [open, setOpen] = useState(false);
		const [deferredItems, setDeferredItems] = useState<number[]>([]);

		const handleClick = useCallback(() => {
			if (deferredItems.length) {
				return;
			}
			setTimeout(() => {
				setDeferredItems(Array.from(Array(20).keys()));
			}, 1000);
		}, [deferredItems]);

		return (
			<>
				<IconButton aria-label="Options" edge="end" onClick={() => setOpen(!open)} ref={buttonRef}>
					<Icon name="MoreHoriz"/>
				</IconButton>
				<ContextMenu
					{...args}
					anchorEl={buttonRef.current}
					open={open}
					setOpen={setOpen}
				>
					<ContextMenuParentItem
						icon={<Icon name="Album"/>}
						id="async"
						label="Async loaded items"
						onClick={handleClick}
					>
						<ContextMenuItem key="lol" label="Create new playlist"/>
						{deferredItems.length
							? deferredItems.map(key => <ContextMenuItem key={key} label="Some item"/>)
							: <ContextMenuItem key="loading" label="Loading"/>}
					</ContextMenuParentItem>
					<ContextMenuItem icon={<Icon name="Album"/>} label={<Link href="/">Link</Link>}/>
				</ContextMenu>
			</>
		);
	},
};
