import MaxPageContainer, {MaxPageContainerProps} from './';
import type {Meta, StoryObj} from '@storybook/react';
import {FILLER_TEXT} from '../../setupStorybook';

const maxPageContainer: Meta<MaxPageContainerProps> = {
	component: MaxPageContainer,
} as Meta<MaxPageContainerProps>;

export default maxPageContainer;

export const Default: StoryObj<MaxPageContainerProps> = {
	args: {
		children: FILLER_TEXT,
	},
};
