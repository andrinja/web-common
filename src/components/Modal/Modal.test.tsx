import Modal, {ModalContent} from './Modal';
import {fireEvent, render} from 'utils/test-utils';
import Icon from 'components/Icon';
import React from 'react';

const confirmAction = jest.fn();
const rejectAction = jest.fn();
const CONFIRM_TEXT = 'Go premium';
const REJECT_TEXT = 'Reject';

const content = {
	icon: <Icon name="Home"/>,
	title: 'Get back on board',
	description: 'You\'ll need Premium to play this',
	confirmAction: {text: CONFIRM_TEXT, callback: confirmAction},
	rejectAction: {text: REJECT_TEXT, callback: rejectAction},
} as ModalContent;

test('Minimal properties', () => {
	const {getAllByRole, getByText} = render(
		<Modal content={content} onClick={confirmAction} open={true}/>
	);
	expect(getAllByRole('dialog')).toHaveLength(1);
	expect(getByText(CONFIRM_TEXT)).toBeTruthy();
});

test('onClick', () => {
	const handleSetOpen = jest.fn();
	const {getByText} = render(<Modal content={content} open={true} setOpen={handleSetOpen}/>);

	const button = getByText(CONFIRM_TEXT);
	fireEvent.click(button);
	expect(confirmAction).toHaveBeenCalledTimes(1);
	expect(handleSetOpen).toHaveBeenCalledTimes(1);
});

test('rejectAction', () => {
	const handleSetOpen = jest.fn();
	const {getByText} = render(<Modal content={content} open={true} setOpen={handleSetOpen}/>);

	expect(getByText(REJECT_TEXT)).toBeInTheDocument();
	fireEvent.click(getByText('Reject'));
	expect(rejectAction).toHaveBeenCalledTimes(1);
	expect(handleSetOpen).toHaveBeenCalledTimes(1);
});

test('With icon', () => {
	const {getByRole} = render(<Modal content={content} open={true}/>);

	expect(getByRole('dialog').childNodes[0].childNodes[0]).not.toBeEmptyDOMElement();
});

test('With image', () => {
	const content = {image: 'Mock image', title: 'title'};
	const {getByAltText} = render(<Modal content={content} open={true}/>);

	expect(getByAltText('')).toBeInTheDocument();
});

test('Without description', () => {
	const content = {title: 'title'};
	const {getByText} = render(<Modal content={content} open={true}/>);
	expect(getByText('title')).toBeInTheDocument();
});

test('With Footer', () => {
	const content = {
		title: 'Test',
		description: 'description',
		footer: <>This is a <a href="some-link">link</a></>,
	};
	const {getByText} = render(<Modal content={content} onClick={confirmAction} open={true}/>);
	expect(getByText('link')).toBeInTheDocument();
});

test('Closed', () => {
	const {container} = render(<Modal open={false}/>);
	expect(container).toBeEmptyDOMElement();
});
