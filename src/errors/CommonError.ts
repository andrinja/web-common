import * as largeIcons from 'icons/large';

export type CommonErrorAction = (() => void) | 'reset';

export default class CommonError extends Error {
	name = 'CommonError';

	title: string;
	caption: string;
	iconName?: keyof typeof largeIcons;
	action?: CommonErrorAction;
	actionLabel?: string;

	constructor(
		title: string,
		caption: string,
		iconName?: keyof typeof largeIcons,
		action?: CommonErrorAction,
		actionLabel?: string
	) {

		if (actionLabel && !action || !actionLabel && action) {
			throw new Error('CommonError: Both "actionLabel" and "action" must be defined.');
		}

		super();
		this.title = title;
		this.caption = caption;
		this.iconName = iconName;
		this.action = action;
		this.actionLabel = actionLabel;
	}
}
