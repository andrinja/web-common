import type {Meta, StoryObj} from '@storybook/react';
import {Tab, TabContextProvider, TabPanel, TabPanels, Tabs, TabsProps} from './';
import React from 'react';
import {useState} from 'react';

const tabs: Meta<TabsProps> = {
	component: Tabs,
};

export default tabs;

export const Default: StoryObj<TabsProps> = {
	render: () => (
		<TabContextProvider>
			<Tabs>
				<Tab aria-controls="tabpanel-1" id="tab-1" label="Item One"/>
				<Tab aria-controls="tabpanel-2" id="tab-2" label="Item Two"/>
				<Tab aria-controls="tabpanel-3" id="tab-2" label="Item Three"/>
			</Tabs>
			<TabPanels>
				<TabPanel aria-labelledby="tab-1" id="tabpanel-1">
					Content for first tab
				</TabPanel>
				<TabPanel aria-labelledby="tab-2" id="tabpanel-2">
					Content for second tab
				</TabPanel>
				<TabPanel aria-labelledby="tab-3" id="tabpanel-3">
					Content for third tab
				</TabPanel>
			</TabPanels>
		</TabContextProvider>
	),
};

export const Controlled: StoryObj<TabsProps> = {
	render: () => {
		const [activeTabIndex, setActiveTabIndex] = useState(1);

		return (
			<TabContextProvider
				activeTabIndex={activeTabIndex}
				onChange={index => setActiveTabIndex(index as number)}
			>
				<Tabs>
					<Tab aria-controls="tabpanel-1" id="tab-1" value={1} label="Item One"/>
					<Tab aria-controls="tabpanel-2" id="tab-2" value={2} label="Item Two"/>
					<Tab aria-controls="tabpanel-3" id="tab-2" value={3} label="Item Three"/>
				</Tabs>
				<TabPanels>
					<TabPanel aria-labelledby="tab-1" id="tabpanel-1" index={1}>
						Content for first tab
					</TabPanel>
					<TabPanel aria-labelledby="tab-2" id="tabpanel-2" index={2}>
						Content for second tab
					</TabPanel>
					<TabPanel aria-labelledby="tab-3" id="tabpanel-3" index={3}>
						Content for third tab
					</TabPanel>
				</TabPanels>
			</TabContextProvider>
		);
	},
};
