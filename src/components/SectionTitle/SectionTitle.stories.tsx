import type {Meta, StoryObj} from '@storybook/react';
import SectionTitle, {SectionTitleProps} from './';

const sectionTitle: Meta<SectionTitleProps> = {
	component: SectionTitle,
	argTypes: {
		subtitle: {
			control: {
				type: 'text',
			},
		},
	},
	args: {
		subtitle: 'Section subtitle',
		title: 'Top results',
	},
};

export default sectionTitle;

export const Default: StoryObj<SectionTitleProps> = {};
