import {fireEvent, render} from 'utils/test-utils';
import CollapsibleMenuItem from './CollapsibleMenuItem';
import Icon from 'components/Icon';
import React from 'react';
import Sidebar from './Sidebar';
import SidebarAction from './SidebarAction';
import SidebarActions from './SidebarActions';
import SidebarMenuItem from './SidebarMenuItem';
import SidebarMenuItems from './SidebarMenuItems';
import {ThemeProvider} from '@mui/material/styles';
import theme from 'themes/yourbrand';

test('Single list item', () => {
	const {getByText} = render(
		<Sidebar open>
			<SidebarMenuItems>
				<SidebarMenuItem title="Title"/>
			</SidebarMenuItems>
		</Sidebar>
	);

	expect(getByText('Title')).toBeInTheDocument();
});

test('List item with icon', () => {
	const {getByText} = render(
		<Sidebar open>
			<SidebarMenuItems>
				<SidebarMenuItem activeIcon={<div>Icon mock</div>} title="Title"/>
			</SidebarMenuItems>
		</Sidebar>
	);

	expect(getByText('Icon mock')).toBeInTheDocument();
});

test('Action button', () => {
	const {getByText} = render(
		<Sidebar open>
			<SidebarMenuItems>
				<SidebarMenuItem title="Title"/>
			</SidebarMenuItems>
			<SidebarActions>
				<SidebarAction>Action without href</SidebarAction>
				<SidebarAction href="/">Action with href</SidebarAction>
			</SidebarActions>
		</Sidebar>
	);

	expect(getByText('Action without href')).toBeInTheDocument();
	expect(getByText('Action with href')).toBeInTheDocument();
});

test('!isReady', () => {
	const {container, queryByText} = render(
		<Sidebar isReady={false} open variant="permanent">
			<SidebarMenuItems>
				<SidebarMenuItem title="Title"/>
			</SidebarMenuItems>
		</Sidebar>
	);

	expect(container).not.toBeEmptyDOMElement();
	expect(queryByText('Title')).toBeNull();
});

test('Close on click', () => {
	const handleClose = jest.fn();

	const {getByText} = render(
		<Sidebar onClose={handleClose} open variant="temporary">
			<SidebarMenuItems>
				<SidebarMenuItem title="item1"/>
				<SidebarMenuItem shouldCloseSidebar={false} title="item2"/>
			</SidebarMenuItems>
		</Sidebar>
	);

	fireEvent.click(getByText('item1'));
	fireEvent.click(getByText('item2'));

	expect(handleClose).toHaveBeenCalledTimes(1);
});

test('Active Item Path with params', () => {
	const {getByText} = render(
		<Sidebar activePath="/abc/parameter" open>
			<SidebarMenuItems>
				<SidebarMenuItem path="/" title="Title"/>
				<SidebarMenuItem
					matchPattern="/abc/*"
					path="/"
					shouldCloseSidebar={false}
					title="Title 2"
				/>
			</SidebarMenuItems>
		</Sidebar>
	);

	expect(getByText('Title 2')).toBeInTheDocument();
});

test('SidebarMenuItem with icon', () => {
	const {getByText} = render(
		<Sidebar open>
			<SidebarMenuItems>
				<SidebarMenuItem icon={<Icon name="Home"/>} title="My playlist"/>
			</SidebarMenuItems>
		</Sidebar>
	);

	expect(getByText('My playlist')).toBeInTheDocument();
});

test('Element as SidebarMenuItem child', () => {
	const {getByText} = render(
		<Sidebar open>
			<SidebarMenuItems>
				<SidebarMenuItem title="Playlists">
					<SidebarMenuItems>
						<SidebarMenuItem title="My playlist"/>
					</SidebarMenuItems>
				</SidebarMenuItem>
			</SidebarMenuItems>
		</Sidebar>
	);

	expect(getByText('My playlist')).toBeInTheDocument();
});

test('Disabled sidebar menu item', () => {
	const handleClose = jest.fn();
	const {getByText} = render(
		<Sidebar onClose={handleClose} open>
			<SidebarMenuItems>
				<SidebarMenuItem disabled title="Home"/>
			</SidebarMenuItems>
		</Sidebar>
	);

	fireEvent.click(getByText('Home'));
	expect(handleClose).not.toHaveBeenCalled();
});

test('useSidebarContext used outside SidebarContextProvider', () => {
	console.error = jest.fn();
	expect(() => render(<SidebarMenuItem title="Home"/>)).toThrow();
});

test('Should render when passing undefined child to SidebarMenuItem', () => {
	const {getByText} = render(
		<Sidebar open>
			<SidebarMenuItems>
				<SidebarMenuItem title="Parent">
					<SidebarMenuItems>
						<SidebarMenuItem title="Child"/>
						{undefined}
					</SidebarMenuItems>
				</SidebarMenuItem>
			</SidebarMenuItems>
		</Sidebar>
	);

	expect(getByText('Child')).toBeInTheDocument();
});

test('Collapsible Menu Item', () => {
	const {queryAllByText} = render(
		<Sidebar open>
			<SidebarMenuItems>
				<CollapsibleMenuItem open title="Parent">
					<SidebarMenuItem title="Child"/>
				</CollapsibleMenuItem>
				<CollapsibleMenuItem title="Parent">
					<SidebarMenuItem title="Child"/>
				</CollapsibleMenuItem>
			</SidebarMenuItems>
		</Sidebar>
	);

	expect(queryAllByText('Child').length).toBe(1);
});

test('right-to-left', () => {
	theme.direction = 'rtl';

	const {getByText} = render(
		<ThemeProvider theme={theme}>
			<Sidebar open>
				<SidebarMenuItems>
					<SidebarMenuItem title="Title"/>
				</SidebarMenuItems>
			</Sidebar>
		</ThemeProvider>
	);

	expect(getByText('Title')).toBeInTheDocument();
});

test('!isReady in right-to-left', () => {
	theme.direction = 'rtl';

	const {container, queryByText} = render(
		<ThemeProvider theme={theme}>
			<Sidebar isReady={false} open variant="permanent">
				<SidebarMenuItems>
					<SidebarMenuItem title="Title"/>
				</SidebarMenuItems>
			</Sidebar>
		</ThemeProvider>
	);

	expect(container).not.toBeEmptyDOMElement();
	expect(queryByText('Title')).toBeNull();
});
