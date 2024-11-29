import {Tab, TabContextProvider, TabPanel, TabPanels, Tabs} from './index';
import {fireEvent, render} from 'utils/test-utils';
import React from 'react';

test('Minimal properties', () => {
	const {getByText} = render(
		<TabContextProvider>
			<Tabs>
				<Tab/>
				<Tab/>
			</Tabs>
			<TabPanels>
				<TabPanel>Content for first tab</TabPanel>
				<TabPanel>Content for second tab</TabPanel>
			</TabPanels>
		</TabContextProvider>
	);

	expect(getByText('Content for first tab')).toBeVisible();
	expect(getByText('Content for second tab')).not.toBeVisible();
});

test('should fire on change callback when tab is pressed', () => {
	const onChange = jest.fn();
	const {getByText} = render(
		<TabContextProvider onChange={onChange}>
			<Tabs>
				<Tab label="Item One"/>
				<Tab label="Item Two"/>
			</Tabs>
		</TabContextProvider>
	);

	expect(getByText('Item Two')).toBeInTheDocument();
	fireEvent.click(getByText('Item Two'));
	expect(onChange).toHaveBeenCalledTimes(1);
});

test('using strings as tab indices', () => {
	const {getByText} = render(
		<TabContextProvider defaultTabIndex="tab-2">
			<Tabs>
				<Tab value="tab-1"/>
				<Tab value="tab-2"/>
			</Tabs>
			<TabPanels>
				<TabPanel index="tab-1">Content for first tab</TabPanel>
				<TabPanel index="tab-2">Content for second tab</TabPanel>
			</TabPanels>
		</TabContextProvider>
	);

	expect(getByText('Content for first tab')).not.toBeVisible();
	expect(getByText('Content for second tab')).toBeVisible();
});

test('should throw error when useTabContext used outside provider', () => {
	console.error = jest.fn();

	expect(() => render(
		<Tabs>
			<Tab/>
		</Tabs>
	)).toThrow(Error);
});

test('should throw error if index is not provided in one of the TabPanel', () => {
	console.error = jest.fn();

	expect(() => render(
		<TabContextProvider>
			<TabPanels>
				<TabPanel index={1}/>
				<TabPanel/>
			</TabPanels>
		</TabContextProvider>
	)).toThrow(Error);
});

test('should throw error if value is not provided in one of the Tab', () => {
	console.error = jest.fn();

	expect(() => render(
		<TabContextProvider defaultTabIndex={1}>
			<Tabs>
				<Tab value={1}/>
				<Tab/>
			</Tabs>
		</TabContextProvider>
	)).toThrow(Error);
});
