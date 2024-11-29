import React, {useCallback, useState} from 'react';
import {fireEvent, render, waitFor} from 'utils/test-utils';
import ContextMenu from './ContextMenu';
import ContextMenuItem from './ContextMenuItem';
import ContextMenuParentItem from './ContextMenuParentItem';

test('Minimal properties', () => {

	const {getByText} = render(
		<>
			<ContextMenu anchorEl={document.body} open setOpen={jest.fn()}>
				<ContextMenuItem label="First context menu item"/>
				<ContextMenuItem label="Second context menu item"/>
			</ContextMenu>
		</>
	);
	expect(getByText('First context menu item')).toBeVisible();
});

test('children being undefined or null', () => {

	const {getByText} = render(
		<>
			<ContextMenu anchorEl={document.body} open setOpen={jest.fn()}>
				<ContextMenuItem label="First context menu item"/>
				{undefined}
				{null}
			</ContextMenu>
		</>
	);
	expect(getByText('First context menu item')).toBeVisible();
});

test('synchronous navigation', () => {
	const {getByText} = render(
		<ContextMenu anchorEl={document.getElementsByTagName('body')[0]} open setOpen={jest.fn()}>
			<ContextMenuParentItem id="parent" label="A">
				<ContextMenuItem label="B"/>
			</ContextMenuParentItem>
		</ContextMenu>
	);

	fireEvent.click(getByText('A'));
	expect(getByText('B')).toBeVisible();
	fireEvent.click(getByText('Back'));
	expect(getByText('A')).toBeVisible();
});

test('Multi-level navigation', () => {
	const {getByText} = render(
		<ContextMenu anchorEl={document.getElementsByTagName('body')[0]} open setOpen={jest.fn()}>
			<ContextMenuParentItem id="parent-a" label="A">
				<ContextMenuParentItem id="parent-b" label="B">
					<ContextMenuItem label="C"/>
				</ContextMenuParentItem>
			</ContextMenuParentItem>
		</ContextMenu>
	);

	fireEvent.click(getByText('A'));
	expect(getByText('B')).toBeVisible();
	fireEvent.click(getByText('B'));
	expect(getByText('C')).toBeVisible();
	fireEvent.click(getByText('Back'));
	expect(getByText('B')).toBeVisible();
	fireEvent.click(getByText('Back'));
	expect(getByText('A')).toBeVisible();
});

test('Child item with node label', () => {
	const {getByText} = render(
		<ContextMenu anchorEl={document.getElementsByTagName('body')[0]} open setOpen={jest.fn()}>
			<ContextMenuItem label={<span>A</span>}/>
		</ContextMenu>
	);

	expect(getByText('A')).toBeVisible();
});

test('nesting onClick', () => {
	const {getAllByText, getByText} = render(
		<ContextMenu anchorEl={document.getElementsByTagName('body')[0]} open setOpen={jest.fn()}>
			<ContextMenuParentItem id="parent" label="A">
				<ContextMenuItem label="B"/>
				{[0, 1, 2].map(key => <ContextMenuItem key={key} label="item"/>)}
			</ContextMenuParentItem>
		</ContextMenu>
	);

	fireEvent.click(getByText('A'));
	expect(getAllByText('item').length).toBe(3);
});

test('asynchronously updating menu items', async() => {

	function TestWrapper() {
		const [deferredItems, setDeferredItems] = useState<number[]>([]);

		const handleClick = useCallback(() => {
			if (deferredItems.length) {
				return;
			}
			setTimeout(() => {
				setDeferredItems(Array.from(Array(1).keys()));
			}, 1);
		}, [deferredItems]);

		return (
			<ContextMenu anchorEl={document.getElementsByTagName('body')[0]} open setOpen={jest.fn()}>
				<ContextMenuParentItem id="parent-a" label="A" onClick={handleClick}>
					{
						deferredItems.length
							? deferredItems.map(key => <ContextMenuItem key={key} label="Some item"/>)
							: <ContextMenuItem key="loading" label="Loading"/>
					}
				</ContextMenuParentItem>
			</ContextMenu>
		);
	}

	const {getByText} = render(<TestWrapper/>);

	fireEvent.click(getByText('A'));

	await waitFor(() => {
		expect(getByText('Some item')).toBeVisible();
	});
});

test('asynchronously updating menu items per multiple sources', async() => {

	function TestWrapper() {
		const [deferredItems, setDeferredItems] = useState<{a: number[], b: number[]}>({a: [], b: []});

		const handleClick = useCallback((target: 'a' | 'b') => {
			if (deferredItems[target].length) {
				return;
			}

			const newDeferredItems = Object.assign({}, deferredItems);

			setTimeout(() => {
				newDeferredItems[target] = Array.from(Array(1).keys());
				setDeferredItems(newDeferredItems);
			}, 1);
		}, [deferredItems]);

		return (
			<ContextMenu anchorEl={document.getElementsByTagName('body')[0]} open setOpen={jest.fn()}>
				<ContextMenuParentItem id="A" label="A" onClick={() => handleClick('a')}>
					{
						deferredItems.a.length
							? deferredItems.a.map(key => <ContextMenuItem key={key} label="aa"/>)
							: <ContextMenuItem label="Loading"/>
					}
				</ContextMenuParentItem>
				<ContextMenuParentItem id="B" label="B" onClick={() => handleClick('b')}>
					{
						deferredItems.b.length
							? deferredItems.b.map(key => <ContextMenuItem key={key} label="bb"/>)
							: <ContextMenuItem label="Loading"/>
					}
				</ContextMenuParentItem>
			</ContextMenu>
		);
	}

	const {getByText} = render(<TestWrapper/>);

	fireEvent.click(getByText('A'));

	await waitFor(() => {
		expect(getByText('aa')).toBeVisible();
	});

	fireEvent.click(getByText('Back'));

	fireEvent.click(getByText('B'));

	await waitFor(() => {
		expect(getByText('bb')).toBeVisible();
	});
});
