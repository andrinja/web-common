import {addons} from '@storybook/manager-api';
import {create} from '@storybook/theming';
// @ts-ignore
import {version} from '../package.json';

addons.setConfig({
	theme: create({
		base: 'light',
		brandTitle: 'Moodagent Web Common v' + version,
	}),
});
