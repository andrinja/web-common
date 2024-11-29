import ArticleDialog, {ArticleDialogProps} from '.';
import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';

const articleDialog: Meta<ArticleDialogProps> = {
	component: ArticleDialog,
	args: {
		articleReferenceProps: {
			reference: {
				imageUrl: '/cover.jpg',
				subtitle: 'Like Karpe, Harry Styles…',
				title: 'Jada Radio',
			},
			isExclusive: false,
			playButtonProps: {
				isCurrentContext: false,
				isFetching: false,
				isPlaying: false,
				isTrackLoading: false,
				onPlayClick: fn(),
			},
		},
		articleProps: {
			content: 'Jada is the Danish queen of soulful R&B and has won the hearts of thousands of fans with her amazing voice, heartfelt lyrics and tender charm. As our brand ambassador she has generously curated this station of her favorite R&B tracks, ranging from soul classics to the stars of tomorrow. Dive into this amazing selection of tracks that will seduce your heart, move your feet and soothe your soul. Playing on stage in uberville arizona Casper Falbe former guitarist of Jada accidentally broke his guitar on a security guard creating an international drama with Fender guitarmakers.',
			createdDate: 'Sep 14, 2023',
			imageUrl: '/articleCover.jpg',
			isExclusive: true,
			link: {text: 'Go to competition', url: 'https://www.moodagent.com'},
			subtitle: 'Curated by Jada',
			title: 'In a soulful mood…',
		},
		onClose: fn(),
		open: true,
	},
	parameters: {
		docs: {
			story: {
				iframeHeight: 400,
				inline: false,
			},
		},
	},
};

export default articleDialog;

export const Default: StoryObj<ArticleDialogProps> = {};
